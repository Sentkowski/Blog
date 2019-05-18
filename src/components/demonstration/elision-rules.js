import React from "react"
import PostHeading from "../post/post-heading.js"
import styles from "./elision-rules.module.css"
import appear from "../animations/slide-vert.module.css"
import fade from "../animations/show.module.css"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import arrow from "../../../static/long-arrow-bottom.svg"

const transClassNames = {
    enter: appear.compEnter,
    enterActive: appear.compEnterActive,
    exit: appear.compExit,
    exitActive: appear.compExitActive,
}

const exTransClassNames = {
    enter: fade.compEnter,
    enterActive: fade.compEnterActive,
    exit: fade.compExit,
    exitActive: fade.compExitActive,
    exitDone: fade.compExitDone
}

export default class ElisionRules extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentExample: 0,
            exVisible: false,
            starCount: 0
        }
        this.exRef = React.createRef();
    }

    validatePick(pickedCode) {
        if (pickedCode === this.props.exercise[this.state.currentExample].ruleCode) {
            this.setState(prevState => ({
                currentExample: prevState.currentExample + 1
            }));
        }
    }

    generateMotivation() {
        const niceList = ["Perfect!", "Great!", "Good!", "Right!", "Correct!"];
        return niceList[Math.floor(Math.random() * niceList.length)];
    }

    generateExamplesList() {
        let examples = [];
        let ruleBefore;
        let ruleAfter;
        for (let i = 0; i < this.state.currentExample; i++) {
            for (let rule of this.props.rules) {
                if (rule.ruleCode === this.props.exercise[i].ruleCode) {
                    ruleBefore = rule.before;
                    ruleAfter = rule.after;
                }
            }
            examples.push(
            <li className={styles.exampleCorrect} key={i}>
                <p className={styles.exampleRuleNote}>{ruleBefore} → {ruleAfter}</p>
                <p>{this.props.exercise[i].correct}</p>
                <p className={styles.exampleRuleNote}>{this.props.exercise[i].translation}</p>
            </li>)
        }
        return examples;
    }

    generateStar(rule) {
        if ('note' in rule) {
            this.setState(prevState => ({
                starCount: prevState.starCount + 1
            }));
            let star = '*';
            return <div>{star.repeat(this.state.starCount)}</div>
        }
    }

    componentDidMount() {
        const obsOptions = {
            root: null,
            rootMargin: "0px",
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7]
        };
        const observer = new IntersectionObserver((entries) => this.handleIntersect(entries), obsOptions);
        observer.observe(this.exRef.current);
    }

    handleIntersect(entries) {
            // If condition to prevent the error on page change 
            if (this.exRef.current) {
            const elemSize = this.exRef.current.offsetWidth * this.exRef.current.offsetHeight;
            const viewportSize = document.documentElement.clientWidth * document.documentElement.clientHeight;
            entries.forEach(entry => {
                if (0.5 * viewportSize - elemSize * entry.intersectionRatio < 0) {
                    this.setState({exVisible: true});
                } else if (document.documentElement.clientWidth > 500) {
                    this.setState({exVisible: true});
                } else {
                    this.setState({exVisible: false});
                }
            })
        }
    }

    render() {
        let starCount = 1;
        const star = '*';
        return (
            <>
                <ul className={styles.rulesList} ref={this.exRef}>
                    {this.props.rules.map((rule) => (
                        <li key={rule.ruleCode} className={styles.ruleWrapper}>
                            <button onClick={(evt) => this.validatePick(rule.ruleCode, evt)} className={styles.rule}>
                                <div className={styles.ruleLabel}>{rule.label}</div>
                                <div className={styles.ruleBefore}>{rule.before}</div>
                                <img className={styles.ruleArrow} alt='Arrow symbol.' src={arrow} />
                                <div className={styles.ruleAfter}>{rule.after}</div>
                                <div className={styles.ruleTranslation}>({rule.translation})</div>
                                {('note' in rule) && <div className={styles.ruleStars}>{star.repeat(starCount++)}</div>}
                                {(this.state.currentExample > 0 && this.props.exercise[this.state.currentExample - 1].ruleCode === rule.ruleCode) && 
                                <div className={styles.goodMessage}>
                                    <p className={styles.goodMessageText}>{this.generateMotivation()}</p>
                                </div>
                                }
                            </button>
                        </li>
                    ))}
                </ul>
                <CSSTransition mountOnEnter={true} in={this.state.exVisible} timeout={200} classNames={exTransClassNames}>
                    <div className={styles.exerciseContainer}>
                        {this.state.currentExample === 0 &&
                        <div className={styles.exerciseTooltip}>Correct this sentence by tapping on the rule which should be applied!</div>
                        }
                        <div className={styles.exerciseTextContainer}>
                            <TransitionGroup component={null}>
                                <CSSTransition
                                key={this.props.exercise[this.state.currentExample].wrong}
                                timeout={300}
                                classNames={transClassNames}
                                >
                                <div className={styles.exerciseText}>{this.props.exercise[this.state.currentExample].wrong}</div>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                        <div className={styles.exerciseTranslation}>{this.props.exercise[this.state.currentExample].translation}</div>
                    </div>
                </CSSTransition>
                <ul className={styles.starNotesList}>
                    <li className={styles.starNote}>* Only before <i className={styles.frenchWord}>il</i> and <i className={styles.frenchWord}>ils.</i></li>
                    <li className={styles.starNote}>** Before the verb.</li>
                    <li className={styles.starNote}>*** Between an imperative verb and the pronoun <i className={styles.frenchWord}>en</i> or <i className={styles.frenchWord}>y</i>.</li>
                </ul>
                <PostHeading identifier='Examples' heading='Examples' />
                <ul className={styles.examplesList}>
                    {this.generateExamplesList()}
                    {this.state.currentExample === 0 &&
                    <p className={styles.exampleCorrect}>This time you have to help us build this section. Examples are hiding in the above exercise!</p>
                    }
                </ul>
            </>
        )
    }
}
