import React from "react"
import styles from "./content-list.module.css"

export default function(props) {
  return <ol className={styles.mainList}>{props.content.map(item => createList(item))}</ol>

  function createList(item) {
    if (Array.isArray(item)) {
      return (
        <li key={item}>
          <ol>
            {item.map(item => (
              <li className={styles.nestedItemWrapper} key={item.name}><a href={item.id} className={styles.item}>{item.name}</a></li>
            ))}
          </ol>
        </li>
      )
    } else {
      return <li key={item.name}><a href={item.id} className={styles.item}>{item.name}</a></li>
    }
  }
}
