import React from "react"
import { Link } from "gatsby"
import Particles from "react-particles-js"
import particlesConfig from "../configs/particles-config.js"
import styles from "../components/page-sidebar.module.css"
import TopicNavList from "../components/topic-nav-list.js"

export default () => {
    if (typeof window !== 'undefined') {
        return (
            <aside className={styles.container}>
            {window.matchMedia("only screen and (min-width: 1000px)").matches &&
                <Particles
                    width={'300px'}
                    params={particlesConfig}
                    className={styles.particlesBackground}
                />
            }
                <Link to='/' className={styles.appName}>Grammechs</Link>
                <TopicNavList abouts={true} numbers={false} />
            </aside>
        )
    } else {
        return (
            <aside className={styles.container}>
                <Link to='/' className={styles.appName}>Grammechs</Link>
                <TopicNavList abouts={true} numbers={false} />
            </aside>
        )
    }
}