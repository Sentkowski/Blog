import React from "react"
import { Link } from "gatsby"
import styles from "../components/topic-nav-list.module.css"
import topicArr from "../configs/topic-arr.js"

export default function TopicList(props) {
  let num = 1
  return (
    <ol className={styles.TopicList + ' ' + (props.desktopOnly ? styles.TopicList__desktopOnly : '')}>
      {topicArr.map(topic => (
        <li
          key={topic}
          className={styles.TopicList_TopicLink}
        >
          <Link to={topic.path}>
            {(props.numbers) ? `${num++}. ` : ''}{topic.name}
          </Link>
        </li>
      ))}
      {props.abouts &&
      <>
        <li
          key={'About'}
          className={styles.abouts}
        >
          <h2>
            About
          </h2>
        </li>
        <li
          key={'Authors'}
          className={styles.abouts}
        >
          <h2>
            Authors
          </h2>
        </li>
      </>
      }
    </ol>
  )
}
