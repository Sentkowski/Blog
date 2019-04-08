import React from "react"
import styles from "../components/page-layout.module.css"

export default (props) => (
    <div className={styles.container}>
        {props.children}
    </div>
)