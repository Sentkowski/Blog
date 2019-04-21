import React from "react"
import styles from "./expandable.module.css"

export default (props) => (
    <details className={styles.container}>
        <summary className={styles.summary}>{props.summary}</summary>
        <p className={styles.text}>{props.text}</p>
    </details>
)