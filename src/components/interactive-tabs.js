import React from "react"
import styles from "../components/interactive-tabs.module.css"

import arrow from "../../static/arrow.svg"

export default class InteractiveTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentExample: 0,
            currentTab: 0
        }
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.tabsContainer}>
                    {this.props.examples[this.state.currentExample].map((tab, i ) => (
                        <button key={i} className={styles.tab}>
                            {tab.button}
                        </button>
                    ))}
                </div>
                <p className={styles.frenchText}>{this.props.examples[this.state.currentExample][this.state.currentTab].french}</p>
                <div className={styles.translationContainer}>
                    <button className={styles.previousButton}>
                        <img src={arrow} />
                    </button>
                    <p className={styles.translation}>{this.props.examples[this.state.currentExample][this.state.currentTab].translation}</p>
                    <button className={styles.nextButton}>
                        <img src={arrow} />
                    </button>
                </div>
            </div>
        )
    }
}
