import React from "react"
import styles from "./rect-picture.module.css"

export default (props) => (
    <figure className={styles.container}>
        <img alt={props.alt} src={props.img}></img>
    </figure>
)