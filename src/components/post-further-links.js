import React from "react"
import { Link } from "gatsby"
import styles from "../components/post-further-links.module.css"

export default (props) => (
    <nav className={styles.container}>
        <h4 className={styles.header}>Let's keep going</h4>
        <ul>
        {props.list.map(lesson => (
            <li className={styles.lesson} key={lesson.name}>
                <Link className={styles.link} to={lesson.path}>{lesson.name}</Link>
                <p>{lesson.description}</p>
            </li>
        ))
        }
        </ul>
    </nav>
)
