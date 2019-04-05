import React from "react"
import Particles from 'react-particles-js';
import particlesConfig from "../configs/particles-config.js"
import "../styles/reset.css"
import "../styles/index.css"

const dummyTopics = [
    "La, le, les, l'",
    "On, nous",
    "Ich, du, dich",
    "Bla, bla, blas",
    "Lorem ipsum"
]

export default () => (
    <section id='' className='page-container'>
        <div className='vert-line'/>
        <div className='vert-line-desktop'/>
        <header className='name-header'>
            <h1 className='app-name'>Grammechs</h1>
            <nav className='desktop-nav'>
                <ul className='desktop-nav-list'>
                    <li className='desktop-nav-link'>About</li>
                    <li className='desktop-nav-link'>Authors</li>
                </ul>
            </nav>
        </header>
        <div className='description'>
            <p>French grammar mechanised.<br/>Made interactive.<br/><span className='special-text'>Made for you.</span></p>
            <TopicNavList topics={dummyTopics}/>
        </div>
        <TopicList topics={dummyTopics}/>
        <footer className='mobile-footer-container'>
            <div className='footer-link-wrapper'>
                <p>About</p>
            </div>
            <div className='footer-link-wrapper'>
                <p>Authors</p>
            </div>
        </footer>
        <Particles params={particlesConfig} className='particles-background'/>
    </section>
)

function TopicList(props) {
    return (
        <ul className='topic-list'>
            {props.topics.map((topic) =>
                <li key={topic} className='topic-box box-hover'>
                    <h2>{topic}</h2>
                </li>
            )}
        </ul>
    )
}

function TopicNavList(props) {
    let num = 1;
    return (
        <ol className='topic-nav-list'>
            {props.topics.map((topic) =>
                <li key={topic} className='topic-nav-link box-hover'>
                    <h2>{num++}. {topic}</h2>
                </li>
            )}
        </ol>
    )
}