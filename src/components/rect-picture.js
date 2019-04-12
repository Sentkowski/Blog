import React from "react"
import styles from "../components/rect-picture.module.css"

export default (props) => (
    <figure className={styles.container}>
        <img src={props.img}></img>
    </figure>
)