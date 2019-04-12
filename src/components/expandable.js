import React from "react"
import styles from "../components/expandable.module.css"

export default (props) => (
    <details open className={styles.container}>
        <summary className={styles.summary}>{props.summary}</summary>
        <p className={styles.text}>{props.text}</p>
    </details>
)