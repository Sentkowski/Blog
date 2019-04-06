import React from "react"
import styles from "../components/topic-nav-list.module.css"

export default function TopicList(props) {
  let num = 1
  return (
    <ol className={styles.TopicList + ' ' + styles.TopicList__desktopOnly}>
      {props.topics.map(topic => (
        <li
          key={topic}
          className={styles.TopicList_TopicLink}
        >
          <h2>
            {num++}. {topic}
          </h2>
        </li>
      ))}
    </ol>
  )
}
