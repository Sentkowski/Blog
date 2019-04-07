import React from "react"
import PostContainer from "../components/post-container.js"
import PostTitile from "../components/post-title.js"
import PostSubtitle from "../components/post-subtitle.js"
import ContentList from "../components/content-list.js"
import PostHeading from "../components/post-heading.js"
import TextSegment from "../components/text-segment.js"
import InteractiveTabs from "../components/interactive-tabs.js"

import styles from "../styles/definite-articles.module.css"
import mSymbol from "../../static/m-symbol.svg"
import fSymbol from "../../static/f-symbol.svg"
import groupSymbol from "../../static/group-symbol.svg"

const dummyTabs = [
    [
        {
            button: <img src={mSymbol} />,
            activeButton: 'source',
            french: <><span style={{color:'red'}}>t</span>ext</>,
            translation: 'text in english',
        }, 
        {
            button: <img src={fSymbol} />,
            activeButton: 'source',
            french: '>t<ext',
            translation: 'text in english',
        }, 
        {
            button: <img src={groupSymbol} />,
            activeButton: 'source',
            french: '>t<ext',
            translation: 'text in english',
        }, 
    ]
]

const dummy = [
    'Introduction',
    'Rules',
    [
        'La',
        'Le',
        "L'",
        'Les'
    ],
    'Examples',
    'Exercises'
]

const par = [
    'An interesting description of definite articles. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Proin nibh augue, suscipit a, scelerisque sed, lacinia in, mi. Cras vel lorem. Etiam pellentesque aliquet tellus. Phasellus pharetra nulla ac diam.'
]

export default () => (
    <PostContainer>
        <PostTitile title='French definite articles' />
        <PostSubtitle subtitle="La, le, les, l'" />
        <ContentList content={dummy} />
        <PostHeading heading='La, le, les, l’ = the' />
        <TextSegment textSegments={par} />
        <PostHeading heading='When which one?' />
        <ArticlesRules />
        <PostHeading heading='See it in action' />
        <InteractiveTabs examples={dummyTabs} />
    </PostContainer>
)

function ArticlesRules() {
    return (
        <React.Fragment>
            <RuleWrapper placement='first'>
                <p className={styles.ruleHeading}><span className={styles.frenchInEnglish}>La</span> is for feminime.</p>
                <p className={styles.ruleExample}><span className={styles.specialWord}>La</span> femme a soif.</p>
                <p className={styles.ruleTranslation}>The woman is thirsty</p>
            </RuleWrapper>
            <RuleWrapper placement='right'>
                <p className={styles.ruleHeading}><span className={styles.frenchInEnglish}>La</span> is for feminime.</p>
                <p className={styles.ruleExample}><span className={styles.specialWord}>La</span> femme a soif.</p>
                <p className={styles.ruleTranslation}>The woman is thirsty</p>
            </RuleWrapper>
            <RuleWrapper placement='middle'>
                <p className={styles.ruleHeading}><span className={styles.frenchInEnglish}>La</span> is for feminime.</p>
                <p className={styles.ruleExplanation}>An interesting description of when to use l’. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className={styles.multipleExamples}>
                    <p><span className={styles.specialWord}>La</span> femme a soif.</p>
                    <p>The woman is thirsty</p>
                    <p><span className={styles.specialWord}>La</span> femme a soif.</p>
                    <p>The woman is thirsty</p>
                </div> 
            </RuleWrapper>
            <RuleWrapper placement='whole'>
                <p className={styles.ruleHeading}><span className={styles.frenchInEnglish}>La</span> is for feminime.</p>
                <p className={styles.ruleExample}><span className={styles.specialWord}>La</span> femme a soif.</p>
                <p className={styles.ruleTranslation}>The woman is thirsty</p>
            </RuleWrapper>
        </React.Fragment>
    )
}

function RuleWrapper(props) {
    return (
        <div className={`${styles.ruleWrapper} ${styles[props.placement]}`}>
            {props.children}
        </div>
    )
}