import React from "react"
import PostTitile from "../components/post/post-title.js"
import PostSubtitle from "../components/post/post-subtitle.js"
import ContentList from "../components/post/content-list.js"
import PostHeading from "../components/post/post-heading.js"
import TextSegment from "../components/post/text-segment.js"
import InteractiveTabs from "../components/demonstration/interactive-tabs.js"
import TestAbc from "../components/tests/test-abc.js"
import Further from "../components/post/post-further-links.js"

import tabs from "../data/def-art-tabs-ex.js"
import test from "../data/def-art-test-abc.js"

import styles from "../styles/definite-articles.module.css"

const cont = [
    {name: 'Introduction', id: '#Introduction'},
    {name: 'Rules', id: '#Rules'},
    [
        {name: 'Le', id: '#Le'},
        {name: 'La', id: '#La'},
        {name: "L'", id: '#L'},
        {name:'Les', id: '#Les'}
    ],
    {name: 'Examples', id: '#Examples'},
    {name: 'Exercises', id: '#Exercises'}
]

const par = [
    '“Le, la, les, l’“ are definite pronouns in French. They are used to designate something specific, that is to say clearly defined or identified.',
    `They usually work just like “the“ in English. To know which one to use, you have to know the noun's gender, number and if it starts with a consonant or a vowel.`
]

const further = [
    {name: "Un, une, des", path: '/indefinite-articles', description: "Definite articles have indefinite counterparts. Curious to see them?"},
    {name: "Elision", path: '/elision', description: "L' is an effect of elision. Learn more about that here."}
]

export default () => (
    <>
        <PostTitile title='Definite articles' />
        <PostSubtitle subtitle="La, le, les, l'" />
        <ContentList content={cont} />
        <PostHeading identifier='Introduction' heading='La, le, les, l’ = the' />
        <TextSegment textSegments={par} />
        <PostHeading identifier='Rules' heading='When which one?' />
        <ArticlesRules />
        <PostHeading identifier='Examples' heading='See it in action' />
        <InteractiveTabs examples={tabs} />
        <PostHeading identifier='Exercises' heading='Give it a try' />
        <TestAbc exercises={test} />
        <Further list={further} />
    </>
)

function ArticlesRules() {
    return (
        <React.Fragment>
            <RuleWrapper id='La' placement='first'>
                <p className={styles.ruleHeading}><span className={styles.frenchInEnglish}>Le</span> is for masculine.</p>
                <p className={styles.ruleExample}><span className={styles.specialWord}>Le </span>train est en retard.</p>
                <p className={styles.ruleTranslation}>The train is late.</p>
            </RuleWrapper>
            <RuleWrapper id='Le' placement='right'>
                <p className={styles.ruleHeading}><span className={styles.frenchInEnglish}>La</span> is for feminime.</p>
                <p className={styles.ruleExample}><span className={styles.specialWord}>La</span> rue est vide.</p>
                <p className={styles.ruleTranslation}>The street is empty.</p>
            </RuleWrapper>
            <RuleWrapper id='L' placement='middle'>
                <p className={styles.ruleHeading}><span className={styles.frenchInEnglish}>L'</span> is for both.</p>
                <p className={styles.ruleExplanation}>It is used when a singular, either masculine or feminime noun starts with a vowel or a silent h.</p>
                <div className={styles.multipleExamples}>
                    <p><span className={styles.specialWord}>L’</span>homme est grand.</p>
                    <p>The man is big.</p>
                    <p><span className={styles.specialWord}>L’</span>école est grande.</p>
                    <p>The school is big.</p>
                </div> 
            </RuleWrapper>
            <RuleWrapper id='Les' placement='whole'>
                <p className={styles.ruleHeading}><span className={styles.frenchInEnglish}>Les</span> is for plural, no matter the gender.</p>
                <p className={styles.ruleExample}><span className={styles.specialWord}>Les</span> animaux dansent.</p>
                <p className={styles.ruleTranslation}>The animals are dancing.</p>
            </RuleWrapper>
        </React.Fragment>
    )
}

function RuleWrapper(props) {
    return (
        <div id={props.id} className={`${styles.ruleWrapper} ${styles[props.placement]}`}>
            {props.children}
        </div>
    )
}