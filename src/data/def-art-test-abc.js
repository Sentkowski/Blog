import React from "react"
import mSymbol from "../../static/m-symbol.svg"
import fSymbol from "../../static/f-symbol.svg"
import groupSymbol from "../../static/group-symbol.svg"

export default [
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