import React from "react"
import PostTitile from "../components/post/post-title.js"
import PostSubtitle from "../components/post/post-subtitle.js"
import ContentList from "../components/post/content-list.js"
import PostHeading from "../components/post/post-heading.js"
import TextSegment from "../components/post/text-segment.js"
import InteractiveTabs from "../components/demonstration/interactive-tabs.js"
import TestAbc from "../components/tests/test-abc.js"
import Further from "../components/post/post-further-links.js"
import ElisionRules from "../components/demonstration/elision-rules.js" 

import rules from "../data/elision-rules.js"
import exercise from "../data/elision-rules-ex"

import styles from "../styles/elision.module.css"

const cont = [
    {name: 'Introduction', id: '#Introduction'},
    {name: 'Rules', id: '#Rules'},
    {name: 'Examples', id: '#Examples'}
]

const introText = ["The elision is the omission of a syllable which ends in a vowel before a word beginning with a vowel or a mute “h”. Thath's why French sounds so smooth."]
const rulesIntroText = ["Elision occurs in specific contexts. Don't try to learn them by heart – it's better to let the intuition handle it. With a bit of practise it will come naturally.", "Start by correcting the sentences below. In each of them there is a possibility to elide – your task is to find the corresponding rule to make it happen.", "In the next section you will find the examples you corrected."]

export default () => (
    <>
        <PostTitile title='Elision' />
        <PostSubtitle subtitle="J'ai, l'arbre" />
        <ContentList content={cont} />
        <PostHeading identifier='Introduction' heading='What is elision?' />
        <TextSegment textSegments={introText} />
        <PostHeading identifier='Rules' heading='Rules' />
        <TextSegment textSegments={rulesIntroText} />
        <ElisionRules rules={rules} exercise={exercise} />
    </>
)