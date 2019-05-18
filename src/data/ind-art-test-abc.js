import React from "react"
import mSymbol from "../../static/m-symbol.svg"
import fSymbol from "../../static/f-symbol.svg"
import groupSymbol from "../../static/group-symbol.svg"

export default [
    {
        frenchGap: '_ fille mange.',
        translation: 'A girl is eating.',
        icon: <img style={{width: '32px', height:'32px'}} alt='Female symbol' src={fSymbol} />,
        answers: [
            {text: 'Un', isRight: false},
            {text: 'Une', isRight: true},
            {text: 'Des', isRight: false}
        ]
    },
    {
        frenchGap: '_ chien aboie.',
        translation: 'A dog is barking.',
        icon: <img style={{width: '32px', height:'32px'}} alt='Male symbol.' src={mSymbol} />,
        answers: [
            {text: 'Un', isRight: true},
            {text: 'Une', isRight: false},
            {text: 'Des', isRight: false}
        ]
    },
    {
        frenchGap: 'J’ai _ animaux',
        translation: 'I have animals.',
        icon: <img style={{width: '32px', height:'32px'}} alt='Group symbol.' src={groupSymbol} />,
        answers: [
            {text: "un", isRight: false},
            {text: 'une', isRight: false},
            {text: "des", isRight: true}
        ]
    },
    {
        frenchGap: '_ gens marchent',
        translation: 'People are walking.',
        icon: <img style={{width: '32px', height:'32px'}} alt='Group symbol.' src={groupSymbol} />,
        answers: [
            {text: 'Un', isRight: false},
            {text: 'Une', isRight: false},
            {text: 'Des', isRight: true}
        ]
    },
    {
        frenchGap: 'Je vois _ maison',
        translation: 'I see a house.',
        icon: <img style={{width: '32px', height:'32px'}} alt='Female symbol.' src={fSymbol} />,
        answers: [
            {text: "un", isRight: false},
            {text: 'une', isRight: true},
            {text: "des", isRight: false}
        ]
    },
    {
        frenchGap: 'Tu as _ chat',
        translation: 'You have a cat.',
        icon: <img style={{width: '32px', height:'32px'}} alt='Male smybol.' src={mSymbol} />,
        answers: [
            {text: "un", isRight: true},
            {text: 'une', isRight: false},
            {text: "des", isRight: false}
        ]
    },
]
