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
            french: <><span style={{color:'#b1e5f2', fontWeight:'bold'}}>Le </span>garcon est gentil.</>,
            translation: 'The boy is nice.',
        }, 
        {
            button: <img src={fSymbol} />,
            activeButton: <img className={styles.chosenIcon} src={fSymbol} />,
            french: <><span style={{color:'#b1e5f2', fontWeight:'bold'}}>La</span> fille est gentile.</>,
            translation: 'The girl is nice.',
        }, 
        {
            button: <img src={groupSymbol} />,
            activeButton: <img className={styles.chosenIcon} src={groupSymbol} />,
            french: <><span style={{color:'#b1e5f2', fontWeight:'bold'}}>Les</span> enfants sont gentils.</>,
            translation: 'The children are nice.',
        },
    ],
    [
        {
            button: <img src={mSymbol} />,
            activeButton: <img className={styles.chosenIcon} src={mSymbol} />,
            french: <><span style={{color:'#b1e5f2', fontWeight:'bold'}}>L’</span>arbre est grand.</>,
            translation: 'The tree is big.',
        }, 
        {
            button: <img src={fSymbol} />,
            activeButton: <img className={styles.chosenIcon} src={fSymbol} />,
            french: <><span style={{color:'#b1e5f2', fontWeight:'bold'}}>La</span> lune est grande.</>,
            translation: 'The moon is big.',
        }, 
        {
            button: <img src={groupSymbol} />,
            activeButton: <img className={styles.chosenIcon} src={groupSymbol} />,
            french: <><span style={{color:'#b1e5f2', fontWeight:'bold'}}>Les</span> maisons sont grandes.</>,
            translation: 'The houses are big.',
        },
    ],
    [
        {
            button: <img src={mSymbol} />,
            activeButton: <img className={styles.chosenIcon} src={mSymbol} />,
            french: <><span style={{color:'#b1e5f2', fontWeight:'bold'}}>Le</span> chien mange.</>,
            translation: 'The dog is eating.',
        }, 
        {
            button: <img src={fSymbol} />,
            activeButton: <img className={styles.chosenIcon} src={fSymbol} />,
            french: <><span style={{color:'#b1e5f2', fontWeight:'bold'}}>La</span> reine mange.</>,
            translation: 'The queen is eating.',
        }, 
        {
            button: <img src={groupSymbol} />,
            activeButton: <img className={styles.chosenIcon} src={groupSymbol} />,
            french: <><span style={{color:'#b1e5f2', fontWeight:'bold'}}>Les</span> paysans mangent</>,
            translation: 'The peasants are eating.',
        },
    ],
]

const test = [
    {
        frenchGap: 'Où est _ voiture ?',
        translation: 'Where is the car?',
        icon: <img style={{width: '32px', height:'32px'}} src={fSymbol} />,
        answers: [
            {text: 'les', isRight: false},
            {text: 'la', isRight: true},
            {text: 'le', isRight: false}
        ]
    },
    {
        frenchGap: '_ animal mange.',
        translation: 'The animal is eating.',
        icon: <img style={{width: '32px', height:'32px'}} src={mSymbol} />,
        answers: [
            {text: "L'", isRight: true},
            {text: 'Le', isRight: false},
            {text: 'Les', isRight: false}
        ]
    },
    {
        frenchGap: '_ femme dort.',
        translation: 'The woman is sleeping.',
        icon: <img style={{width: '32px', height:'32px'}} src={fSymbol} />,
        answers: [
            {text: "L'", isRight: false},
            {text: 'Le', isRight: false},
            {text: 'La', isRight: true}
        ]
    },
    {
        frenchGap: '_ chat est beau.',
        translation: 'The cat is beautiful.',
        icon: <img style={{width: '32px', height:'32px'}} src={mSymbol} />,
        answers: [
            {text: "La", isRight: false},
            {text: 'Le', isRight: true},
            {text: "L'", isRight: false}
        ]
    },
    {
        frenchGap: '_ chats boivent.',
        translation: 'The cats are drinking.',
        icon: <img style={{width: '32px', height:'32px'}} src={groupSymbol} />,
        answers: [
            {text: "Les", isRight: true},
            {text: 'La', isRight: false},
            {text: "Le", isRight: false}
        ]
    },
    {
        frenchGap: '_ voiture est là !',
        translation: 'The car is here!',
        icon: <img style={{width: '32px', height:'32px'}} src={fSymbol} />,
        answers: [
            {text: 'Les', isRight: false},
            {text: 'La', isRight: true},
            {text: 'Le', isRight: false}
        ]
    }
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
                <p className={styles.ruleExample}><span className={styles.specialWord}>Le </span>train est en retard.</p>
                <p className={styles.ruleTranslation}>The train is late.</p>
            </RuleWrapper>
            <RuleWrapper id='Une' placement='right'>
                <p className={styles.ruleHeading}><span className={styles.frenchInEnglish}>Une</span> is for feminime.</p>
                <p className={styles.ruleExample}><span className={styles.specialWord}>La</span> rue est vide.</p>
                <p className={styles.ruleTranslation}>The street is empty.</p>
            </RuleWrapper>
            <RuleWrapper id='Des' placement='whole'>
                <p className={styles.ruleHeading}><span className={styles.frenchInEnglish}>Des</span> is for plural, no matter the gender.</p>
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