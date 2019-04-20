import React from "react"
import PostTitile from "../components/post-title.js"
import PostSubtitle from "../components/post-subtitle.js"
import ContentList from "../components/content-list.js"
import PostHeading from "../components/post-heading.js"
import TextSegment from "../components/text-segment.js"
import InteractiveTabs from "../components/interactive-tabs.js"
import TestAbc from "../components/test-abc.js"
import Further from "../components/post-further-links.js"

import styles from "../styles/indefinite-articles.module.css"
import mSymbol from "../../static/m-symbol.svg"
import fSymbol from "../../static/f-symbol.svg"
import groupSymbol from "../../static/group-symbol.svg"

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


const tabs = [
    [
        {
            button: <img src={mSymbol} />,
            activeButton: <img className={styles.chosenIcon} src={mSymbol} />,
            french: <><span style={{color:'#b1e5f2'}}>Un </span>garçon dort.</>,
            translation: 'A boy is sleeping.',
        }, 
        {
            button: <img src={fSymbol} />,
            activeButton: <img className={styles.chosenIcon} src={fSymbol} />,
            french: <><span style={{color:'#b1e5f2'}}>Une </span>fille dort.</>,
            translation: 'A girl is sleeping.',
        }, 
        {
            button: <img src={groupSymbol} />,
            activeButton: <img className={styles.chosenIcon} src={groupSymbol} />,
            french: <><span style={{color:'#b1e5f2'}}>Des </span>gens dorment.</>,
            translation: 'People are sleeping.',
        },
    ],
    [
        {
            button: <img src={mSymbol} />,
            activeButton: <img className={styles.chosenIcon} src={mSymbol} />,
            french: <>Je vois <span style={{color:'#b1e5f2'}}>un </span>chien.</>,
            translation: 'I see a dog.',
        }, 
        {
            button: <img src={fSymbol} />,
            activeButton: <img className={styles.chosenIcon} src={fSymbol} />,
            french: <>Je vois <span style={{color:'#b1e5f2'}}>une </span>vache.</>,
            translation: 'I see a cow.',
        }, 
        {
            button: <img src={groupSymbol} />,
            activeButton: <img className={styles.chosenIcon} src={groupSymbol} />,
            french: <>Je vois <span style={{color:'#b1e5f2'}}>des </span>animaux.</>,
            translation: 'I see animals.',
        },
    ],
    [
        {
            button: <img src={mSymbol} />,
            activeButton: <img className={styles.chosenIcon} src={mSymbol} />,
            french: <>J’entends <span style={{color:'#b1e5f2'}}>un </span>homme chanter.</>,
            translation: 'I hear a man sing.',
        }, 
        {
            button: <img src={fSymbol} />,
            activeButton: <img className={styles.chosenIcon} src={fSymbol} />,
            french: <>J’entends <span style={{color:'#b1e5f2'}}>une </span>femme chanter.</>,
            translation: 'I hear a woman sing.',
        }, 
        {
            button: <img src={groupSymbol} />,
            activeButton: <img className={styles.chosenIcon} src={groupSymbol} />,
            french: <>J’entends <span style={{color:'#b1e5f2'}}>des </span>gens chanter.</>,
            translation: 'I hear people sing.',
        },
    ],
]

const test = [
    {
        frenchGap: '_ fille mange.',
        translation: 'A girl is eating.',
        icon: <img style={{width: '32px', height:'32px'}} src={fSymbol} />,
        answers: [
            {text: 'Un', isRight: false},
            {text: 'Une', isRight: true},
            {text: 'Des', isRight: false}
        ]
    },
    {
        frenchGap: '_ chien aboie.',
        translation: 'A dog is barking.',
        icon: <img style={{width: '32px', height:'32px'}} src={mSymbol} />,
        answers: [
            {text: 'Un', isRight: true},
            {text: 'Une', isRight: false},
            {text: 'Des', isRight: false}
        ]
    },
    {
        frenchGap: 'J’ai _ animaux',
        translation: 'I have animals.',
        icon: <img style={{width: '32px', height:'32px'}} src={groupSymbol} />,
        answers: [
            {text: "un", isRight: false},
            {text: 'une', isRight: false},
            {text: "des", isRight: true}
        ]
    },
    {
        frenchGap: '_ gens marchent',
        translation: 'People are walking.',
        icon: <img style={{width: '32px', height:'32px'}} src={groupSymbol} />,
        answers: [
            {text: 'Un', isRight: false},
            {text: 'Une', isRight: false},
            {text: 'Des', isRight: true}
        ]
    },
    {
        frenchGap: 'Je vois _ maison',
        translation: 'I see a house.',
        icon: <img style={{width: '32px', height:'32px'}} src={fSymbol} />,
        answers: [
            {text: "un", isRight: false},
            {text: 'une', isRight: true},
            {text: "des", isRight: false}
        ]
    },
    {
        frenchGap: 'Tu as _ chat',
        translation: 'You have a cat.',
        icon: <img style={{width: '32px', height:'32px'}} src={mSymbol} />,
        answers: [
            {text: "un", isRight: true},
            {text: 'une', isRight: false},
            {text: "des", isRight: false}
        ]
    },
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