import React from "react"
import styles from "../components/test-abc.module.css"

export default class abcTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        }
    }

    addBlanks(text) {
        let split = text.split('_');
        for (let i = 1; i < split.length; i+= 2) {
            split.splice(i, 0, <span key={i} className={styles.gap}>___</span>);
        }
        return split
    }

    handleAnswer(correct, e) {
        if (correct) {
            e.target.style.animationName = styles.right;
            e.target.style.animationDuration = '0.8s';
            e.target.style.animationPlayState = 'running';
            setTimeout(() => {
                this.setState(prevState => ({
                    current: (prevState.current + 1) % this.props.exercises.length,
                }));
            }, 800);
        } else {
            e.target.style.animationPlayState = 'running';
        }
    }

    render() {
        const currentExercise = this.props.exercises[this.state.current];
        return (
            <div className={styles.container}>
                <div className={styles.translationContainer}>
                    <div className={styles.cornerIcon}>{currentExercise.icon}</div>
                    <p className={styles.translation}>{currentExercise.translation}</p>
                </div>
                <div className={styles.frenchContainer}>
                    <p>{this.addBlanks(currentExercise.frenchGap)}</p>
                </div>
                <div className={styles.answersContainer}>
                    {currentExercise.answers.map((answer) => (
                        <button onClick={(e) => this.handleAnswer(answer.isRight, e)} key={answer.text + this.state.current} className={styles.answer}>{answer.text}</button>
                    ))}
                </div>
            </div>
        )
    }


}