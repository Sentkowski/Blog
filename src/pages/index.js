import React from "react"
import { Link } from "gatsby"
import Particles from "react-particles-js"
import particlesConfig from "../data/particles-config.js"
import "../styles/reset.css"
import indexStyles from "../styles/index.module.css"
import TopicNavList from "../components/post/topic-nav-list.js"
import topicArr from "../data/topic-arr.js"

export default () => (
  <section id="" className={indexStyles.pageContainer}>
    <div className={indexStyles.vertLine} />
    <div className={indexStyles.vertLineDesktop} />
    <header className={indexStyles.nameHeader}>
      <h1 className={indexStyles.appName}>Grammechs</h1>
      <nav className={indexStyles.desktopNav}>
        <ul className={indexStyles.desktopNavList}>
        <li className={indexStyles.desktopNavLink + ' ' + indexStyles.boxHover}>
          <Link className={indexStyles.boxHover}  to='/about'>
            About
          </Link>
          </li>
          <li className={indexStyles.desktopNavLink + ' ' + indexStyles.boxHover}>
          <Link className={indexStyles.boxHover} to='/authors'>
            Authors
          </Link>
          </li>
        </ul>
      </nav>
    </header>
    <div className={indexStyles.description}>
      <p className={indexStyles.descriptionText}>
        French grammar mechanised.
        <br />
        Made interactive.
        <br />
        <span className={indexStyles.specialText}>Made for you.</span>
      </p>
      <TopicNavList desktopOnly={true} abouts={false} numbers={true}/>
    </div>
    <TopicList topics={topicArr} />
    <footer className={indexStyles.mobileFooterContainer}>
      <Link to='/about'>
            About
      </Link>
      <Link to='/authors'>
            Authors
      </Link>
    </footer>
    <Particles
      params={particlesConfig}
      className={indexStyles.particlesBackground}
    />
  </section>
)

function TopicList(props) {
  return (
    <ul className={indexStyles.topicList}>
      {props.topics.map(topic => (
        <li
          key={topic.name}
          className={indexStyles.topicWrapper}
        >
        <Link to={topic.path} className={indexStyles.topicBox + " " + indexStyles.boxHover}>
          <h2>{topic.name}</h2>
        </Link>
        </li>
      ))}
    </ul>
  )
}
