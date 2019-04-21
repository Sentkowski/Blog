import React from "react"
import styles from "./page-layout.module.css"

export default (props) => (
    <div id='page' className={styles.container}>
        {props.children}
    </div>
)