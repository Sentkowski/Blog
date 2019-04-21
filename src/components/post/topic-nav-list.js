import React from "react"
import { Link } from "gatsby"
import styles from "./topic-nav-list.module.css"
import topicArr from "../../configs/topic-arr.js"

export default function TopicList(props) {
  let num = 1
  return (
    <ol className={styles.TopicList + ' ' + (props.desktopOnly ? styles.TopicList__desktopOnly : '')}>
      {topicArr.map(topic => (
        <li
          key={topic.name}
          className={styles.TopicList_TopicLink}
        >
          <Link activeStyle={{color: '#b1e5f2'}} to={topic.path}>
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
          <Link activeStyle={{color: '#b1e5f2'}} to='/about'>
            About
          </Link>
        </li>
        <li
          key={'Authors'}
          className={styles.abouts}
        >
          <Link activeStyle={{color: '#b1e5f2'}} to='/authors'>
            Authors
          </Link>
        </li>
      </>
      }
    </ol>
  )
}
