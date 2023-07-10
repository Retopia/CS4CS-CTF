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
                    "I find it easy to understand new programming concepts.",
                    "I am confident in my ability to solve coding challenges.",
                    "I am familiar with common cybersecurity threats and how to prevent them.",
                    "I understand the importance of secure coding practices.",
                    "I am interested in learning more about network security.",
                    "I often think about how I can improve the security of my own digital information.",
                    "I am familiar with the principles of ethical hacking.",
                    "I am confident in my understanding of encryption and decryption methods.",
                    "I am aware of the legal and ethical implications of cybersecurity.",
                    "I am interested in pursuing a career in cybersecurity.",
                    "I keep up-to-date with the latest cybersecurity news and trends.",
                    "I am confident in my ability to create a secure password.",
                    "I am familiar with the concept of social engineering in cybersecurity.",
                    "I understand how firewalls and antivirus software work.",
                    "I am comfortable discussing cybersecurity concepts with others.",
                    "I am aware of the role of cryptography in cybersecurity.",
                    "I am familiar with different types of malware and their impacts.",
                    "I have an understanding of how a VPN can enhance internet security.",
                    "I am aware of the impact of cybercrime on businesses and individuals.",
                    "I understand the importance of regularly updating software for security reasons."

                    // Add your other questions here
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
