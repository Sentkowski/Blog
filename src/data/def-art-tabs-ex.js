import React from "react"
import mSymbol from "../../static/m-symbol.svg"
import fSymbol from "../../static/f-symbol.svg"
import groupSymbol from "../../static/group-symbol.svg"
import styles from "../styles/indefinite-articles.module.css"

export default [
    [
        {
            button: <img alt="Male symbol." src={mSymbol} />,
            activeButton: <img className={styles.chosenIcon} alt="Male symbol." src={mSymbol} />,
            french: <><span style={{color:'#b1e5f2'}}>Le </span>garcon est gentil.</>,
            translation: 'The boy is nice.',
        }, 
        {
            button: <img alt="Female symbol." src={fSymbol} />,
            activeButton: <img className={styles.chosenIcon} alt="Female symbol." src={fSymbol} />,
            french: <><span style={{color:'#b1e5f2'}}>La</span> fille est gentile.</>,
            translation: 'The girl is nice.',
        }, 
        {
            button: <img alt="Group symbol." src={groupSymbol} />,
            activeButton: <img className={styles.chosenIcon} alt="Group symbol." src={groupSymbol} />,
            french: <><span style={{color:'#b1e5f2'}}>Les</span> enfants sont gentils.</>,
            translation: 'The children are nice.',
        },
    ],
    [
        {
            button: <img alt="Male symbol." src={mSymbol} />,
            activeButton: <img className={styles.chosenIcon} alt="Male symbol." src={mSymbol} />,
            french: <><span style={{color:'#b1e5f2'}}>L’</span>arbre est grand.</>,
            translation: 'The tree is big.',
        }, 
        {
            button: <img alt="Female symbol." src={fSymbol} />,
            activeButton: <img className={styles.chosenIcon} alt="Female symbol." src={fSymbol} />,
            french: <><span style={{color:'#b1e5f2'}}>La</span> lune est grande.</>,
            translation: 'The moon is big.',
        }, 
        {
            button: <img alt="Group symbol." src={groupSymbol} />,
            activeButton: <img className={styles.chosenIcon} alt="Group symbol." src={groupSymbol} />,
            french: <><span style={{color:'#b1e5f2'}}>Les</span> maisons sont grandes.</>,
            translation: 'The houses are big.',
        },
    ],
    [
        {
            button: <img alt="Male symbol." src={mSymbol} />,
            activeButton: <img className={styles.chosenIcon} alt="Male symbol." src={mSymbol} />,
            french: <><span style={{color:'#b1e5f2'}}>Le</span> chien mange.</>,
            translation: 'The dog is eating.',
        }, 
        {
            button: <img alt="Female symbol." src={fSymbol} />,
            activeButton: <img className={styles.chosenIcon} alt="Female symbol." src={fSymbol} />,
            french: <><span style={{color:'#b1e5f2'}}>La</span> reine mange.</>,
            translation: 'The queen is eating.',
        }, 
        {
            button: <img alt="Group symbol." src={groupSymbol} />,
            activeButton: <img className={styles.chosenIcon} alt="Group symbol." src={groupSymbol} />,
            french: <><span style={{color:'#b1e5f2'}}>Les</span> paysans mangent</>,
            translation: 'The peasants are eating.',
        },
    ],
]