import React from "react"
import PostTitile from "../components/post/post-title.js"
import PostSubtitle from "../components/post/post-subtitle.js"
import ContentList from "../components/post/content-list.js"
import PostHeading from "../components/post/post-heading.js"
import TextSegment from "../components/post/text-segment.js"
import InteractiveTabs from "../components/demonstration/interactive-tabs.js"
import TestAbc from "../components/tests/test-abc.js"
import Further from "../components/post/post-further-links.js"

import tabs from "../data/ind-art-tabs-ex.js"
import test from "../data/ind-art-test-abc.js"

import styles from "../styles/indefinite-articles.module.css"

const par = [
    '“Un, une, des“ are definite pronouns in French. They are used to designate something unspecific. They are similar in meaning to “a“ and “an“ in English.',
    `To know which one to use, you not only have to know the number of a given noun (like in English), but also its gender. What is good is that they do not depend on how the words start or end.`
]

const cont = [
    {name: 'Introduction', id: '#Introduction'},
    {name: 'Rules', id: '#Rules'},
    [
        {name: 'Un', id: '#Un'},
        {name: 'Une', id: '#Une'},
        {name: "Des", id: '#Des'},
    ],
    {name: 'Examples', id: '#Examples'},
    {name: 'Exercises', id: '#Exercises'}
]

const further = [
    {name: "La, le, les, l'", path: '/definite-articles', description: "Indefinite articles have definite counterparts. Why not check them out now?"}
]

export default () => (
    <>
        <PostTitile title='Indefinite articles' />
        <PostSubtitle subtitle="Un, une, des" />
        <ContentList content={cont} />
        <PostHeading identifier='Introduction' heading='Un, une, des = a, an' />
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
            <RuleWrapper id='Un' placement='first'>
                <p className={styles.ruleHeading}><span className={styles.frenchInEnglish}>Un</span> is for masculine.</p>
                <p className={styles.ruleExample}><span className={styles.specialWord}>Un </span>oiseau chante.</p>
                <p className={styles.ruleTranslation}>A bird is singing.</p>
            </RuleWrapper>
            <RuleWrapper id='Une' placement='right'>
                <p className={styles.ruleHeading}><span className={styles.frenchInEnglish}>Une</span> is for feminime.</p>
                <p className={styles.ruleExample}><span className={styles.specialWord}>Une </span>fille danse.</p>
                <p className={styles.ruleTranslation}>A girl is dancing.</p>
            </RuleWrapper>
            <RuleWrapper id='Des' placement='whole'>
                <p className={styles.ruleHeading}><span className={styles.frenchInEnglish}>Des</span> is for plural, no matter the gender.</p>
                <p className={styles.ruleExample}><span className={styles.specialWord}>Des </span>animaux mangent.</p>
                <p className={styles.ruleTranslation}>Some animals are eating.</p>
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