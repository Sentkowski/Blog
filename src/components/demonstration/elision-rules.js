import React from "react"
import styles from "./elision-rules.module.css"

import arrow from "../../../static/long-arrow-bottom.svg"

const dummy = [
    {
        label: "Definite articles",
        before: "le & la",
        after: "l'",
        translation: "the"
    },
    {
        label: "Definite articles",
        before: "le & la",
        after: "l'",
        translation: "the"
    },
    {
        label: "Definite articles",
        before: "le & la",
        after: "l'",
        translation: "the"
    },
    {
        label: "Definite articles",
        before: "le & la",
        after: "l'",
        translation: "the"
    }
]

export default (props) => (
    <ul className={styles.rulesList}>
        {props.rules.map((rule) => (
            <li className={styles.rule}>
                <div className={styles.label}>{rule.label}</div>
                <div className={styles.before}>{rule.before}</div>
                <img className={styles.arrow} src={arrow} />
                <div className={styles.after}>{rule.after}</div>
                <div className={styles.translation}>({rule.translation})</div>
            </li>
        ))}
    </ul>
)