import React from "react"
import { Link } from "gatsby"
import Particles from "react-particles-js"
import particlesConfig from "../configs/particles-config.js"
import "../styles/reset.css"
import indexStyles from "../styles/index.module.css"
import TopicNavList from "../components/topic-nav-list.js"

const dummyTopics = [
  "La, le, les, l'",
  "On, nous",
  "Ich, du, dich",
  "Bla, bla, blas",
  "Lorem ipsum",
]
export default () => (
  <section id="" className={indexStyles.pageContainer}>
    <div className={indexStyles.vertLine} />
    <div className={indexStyles.vertLineDesktop} />
    <header className={indexStyles.nameHeader}>
      <h1 className={indexStyles.appName}>Grammechs</h1>
      <nav className={indexStyles.desktopNav}>
        <ul className={indexStyles.desktopNavList}>
          <li className={indexStyles.desktopNavLink + ' ' + indexStyles.boxHover}>About</li>
          <li className={indexStyles.desktopNavLink + ' ' + indexStyles.boxHover}>Authors</li>
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
      <TopicNavList topics={dummyTopics} />
    </div>
    <TopicList topics={dummyTopics} />
    <footer className={indexStyles.mobileFooterContainer}>
      <div className={indexStyles.footerLinkWrapper}>
        <p>About</p>
      </div>
      <div className={indexStyles.footerLinkWrapper}>
        <p>Authors</p>
      </div>
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
          key={topic}
          className={indexStyles.topicWrapper}
        >
        <Link to='/definite-articles' className={indexStyles.topicBox + " " + indexStyles.boxHover}>
          <h2>{topic}</h2>
        </Link>
        </li>
      ))}
    </ul>
  )
}
