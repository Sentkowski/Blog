import React from "react"
import styles from "./interactive-tabs.module.css"

import arrow from "../../../static/arrow.svg"

export default class InteractiveTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            exampleSwitchCount: 0,
            currentTab: 0
        }
    }

    arrowClick(val) {
        this.setState(prevState => ({
            exampleSwitchCount: prevState.exampleSwitchCount + val
        }));
    }

    tabClick(newTabIndex) {
        this.setState({
            currentTab: newTabIndex
        });
    }

    cycleThroughExamples() {
        return Math.abs(this.state.exampleSwitchCount % this.props.examples.length);
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.tabsContainer}>
                    {this.props.examples[this.cycleThroughExamples()].map((tab, i) => 
                        i !== this.state.currentTab ? 
                        (
                            <button onClick={() => this.tabClick(i)} key={i} className={styles.tab}>
                                {tab.button}
                            </button>
                        ) :
                        (
                            <button onClick={() => this.tabClick(i)} key={i} className={`${styles.tabSelected} ${styles.tab}`}>
                               {tab.activeButton}
                            </button> 
                        ))}
                </div>
                <p className={styles.frenchText}>{this.props.examples[this.cycleThroughExamples()][this.state.currentTab].french}</p>
                <div className={styles.translationContainer}>
                    <button onClick={(e) => this.arrowClick(-1, e)} className={styles.previousButton}>
                        <img alt="Arrow pointing backwards." src={arrow} />
                    </button>
                    <p className={styles.translation}>{this.props.examples[this.cycleThroughExamples()][this.state.currentTab].translation}</p>
                    <button onClick={(e) => this.arrowClick(1, e)}  className={styles.nextButton}>
                        <img alt="Arrow pointing forward." src={arrow} />
                    </button>
                </div>
                <div className={styles.hints}>
                    <p className={styles.tapHint}>Tap on icons to change the sentence</p>
                    <p className={styles.exampleNumber}>Example {this.cycleThroughExamples() + 1}/{this.props.examples.length}</p>
                </div>
            </div>
        )
    }
}
