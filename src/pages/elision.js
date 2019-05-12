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

import styles from "../styles/elision.module.css"

const cont = [
    {name: 'Introduction', id: '#Introduction'}
]

const dummy = [
    {
        label: "Definite articles",
        before: "le & la",
        after: "l'",
        translation: "the"
    },
    {
        label: "Subject pronouns",
        before: "je & ce",
        after: "j' & c'",
        translation: "I & it"
    },
    {
        label: "Particle",
        before: "ne",
        after: "n'",
        translation: "not"
    },
    {
        label: "Preposition",
        before: "de",
        after: "d'",
        translation: "of"
    },
    {
        label: "It depends :(",
        before: "que",
        after: "qu'",
        translation: "e.g. what, which"
    },
    {
        label: "Conjunction",
        before: "si",
        after: "s'",
        translation: "if"
    },
    {
        label: "Object pronouns",
        before: "me, te, se, le, la",
        after: "m', t', s', l'",
        translation: "me, you, ...self, her, him"
    },
    {
        label: "Object pronouns",
        before: "le, la, moi, toi",
        after: "l', m', t'",
        translation: "him, her, me, you"
    }
]

export default () => (
    <>
        <PostTitile title='Elision' />
        <PostSubtitle subtitle="J'ai, l'arbre" />
        <ContentList content={cont} />
        <PostHeading identifier='Introduction' heading='What is elision?' />
        <ElisionRules rules={dummy} />

    </>
)