import React from "react"
import mSymbol from "../../static/m-symbol.svg"
import fSymbol from "../../static/f-symbol.svg"
import groupSymbol from "../../static/group-symbol.svg"
import styles from "../styles/indefinite-articles.module.css"


export default [
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