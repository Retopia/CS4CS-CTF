import React, { useState } from 'react';
import Question from './Question';
import styles from './CompatibilityTest.module.css';

const CompatibilityTest = () => {
    const [answers, setAnswers] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
    });
    const [hash, setHash] = useState(null);

    const handleRadioChange = (event) => {
        const { name, value } = event.target;
        setAnswers({
            ...answers,
            [name]: parseInt(value, 10) || 0,
        });
    };


    const handleSubmit = (event) => {
        event.preventDefault();

        const encoded = Object.values(answers).join("");
        // Check if all questions have been answered
        if (encoded.length < 20) {
            alert('Please answer all questions');
            return;
        }

        setHash(encoded);
    };


    return (
        <div>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <h1>Compatibility Test</h1>
                {[
                    "Would you ever dress as the opposite gender for a day?",
                    "If given a chance, would you choose to live forever?",
                    "Would you trade looks for intelligence or vice versa?",
                    "Would you eat only ice-cream for an entire week if you could?",
                    "Would you attend school at night if you could sleep all day?",
                    "Would you rather time travel to the past or the future?",
                    "Would you want your favorite celebrity to teach you every subject in school?",
                    "Do you think it's okay to read your friend's texts if they leave their phone open?",
                    "Would you consider yourself as the President of your country?",
                    "Do you think the use of AI can ever surpass human intelligence?",
                    "Would you rather be an animal than a human in your next life?",
                    "Would you switch lives with your favorite movie character?",
                    "Can money buy happiness?",
                    "How likely are you to survive a zombie apocalypse?",
                    "Would you spend a day as a ghost if you could?",
                    "Do you believe in life on other planets?",
                    "Would you rather have superhuman strength or the ability to read minds?",
                    "Would you give up all technology for a year to win $1 million?",
                    "Would you eat your least favorite food for every meal if it meant you never had to go to school?",
                    "Would you rather have your whole life broadcast on national television or lose the ability to use social media forever?",
                    "Would you rather spend a year in the past or a year in the future?",
                    "Is pineapple an acceptable pizza topping?",
                    "If you found a magic genie, is world peace the first thing you'd wish for?",
                    "Can cats and dogs get along?",
                    "Would you rather spend the night in a haunted house or a night in a forest alone?",
                    "Would you drink a bottle of ketchup for $500?",
                    "Would you let a spider crawl all over you for $1000?",
                    "Do your parents understand your generation?",
                    "Would you rather live without music or without movies?",
                    "Would you use time travel to change something in your past?"
                ].map((questionText, index) => (
                    <Question
                        key={index}
                        id={`${index + 1}`}
                        label={questionText}
                        onChange={handleRadioChange}
                    />
                ))}
                <button className={styles.submitButton} type="submit">Submit</button>
                {hash && <div className={styles.result}>Your hash: {hash}</div>}
            </form>
        </div>
    );
}

export default CompatibilityTest;
