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
        <header className='name-header'>
            <h1 className='app-name'>Grammechs</h1>
        </header>
        <p className='description'>French grammar mechanised.<br/>Made interactive.<br/><span className='special-text'>Made for you.</span></p>
        <TopicList topics={dummyTopics}/>
        <script src="particles.js"></script>
        <Particles params={particlesConfig} className='particles-background'/>
    </section>
)

function TopicList(props) {
    return (
        <ul className='topic-list'>
            {props.topics.map((topic) =>
                <li key={topic} className='topic-box'>
                    <h2>{topic}</h2>
                </li>
            )}
        </ul>
    )
}