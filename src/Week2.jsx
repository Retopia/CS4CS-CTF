import React, { useState } from "react";
import styles from "./Scavenger.module.css";

const Week2 = () => {
    const [step, setStep] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [completed, setCompleted] = useState(false);

    const questions = [
        "key: malicious software that encrypts files or locks computer systems until a ransom is paid\nvalue: ROMAN GENERAL!!!!!\nEg: CS4CS -> JZ11JZ",
        "key Permission to read information in an information system\nvalue: len((SGVsbA==))",
        "key: process of identifying and assessing potential risks in order to determine appropriate actions to mitigate them\nvalue: if(true)",
        "key: decentralized digital currency that operates on a technology called blockchain\nvalue: Suppose there is a digital forensics investigation happening, and each day, the digital forensics team can analyze 1.25 terabytes (TB) of data. They are given a set of digital evidence totaling 15 terabytes.\nThe question is, how many days will it take to analyze all the data if they take 1 day off every 4 days?\n\nFinalAnswer = Answer - 9",
        'key: hacking technique that involves systematically trying all possible combinations to guess a password or encryption key\nvalue: A HTTP response header named "X-Content-Type-Options" can be used to protect against MIME type confusion attacks. If a website wanted to enable this protection, what value should it set for the "X-Content-Type-Options" header?\nNumber equivalent of the answer??????',
        'key: network of infected computers, controlled by a single entity, used for malicious activities\nvalue: In TCP, the checksum field is the 16th field in the header. It is a mandatory field, which means it is always present even if its value is zero. What is the length of the checksum field in the TCP header in bytes?',
        'key: error or flaw in software that causes unexpected behavior\nvalue: When analyzing packets in Wireshark, one of the displayed columns is "Protocol". For example, you might see protocols like "TCP", "UDP", "HTTP", etc. If you captured a packet that was part of a web request, and this packet was carrying the actual data of the HTTP request, what would be the protocol displayed in this column for this packet? ans= num(protocol)',
        "key: using advanced search techniques to find sensitive information or vulnerabilities via Google search\nvalue: len(cybersecurity)%7",
        "key: unit of data transfer rate equal to one billion bits per second\nvalue:\ndef function(use_the value_given_above):\ncount = 0\nnumber_str = str(use_the value_given_above)\nfor digit in number_str:\nif digit == '0':\ncount += 1\nreturn count\n\nFinal Answer = Answer/3",
        "key: good+bad = hacker\nvalue: apply && operator on each binary digit of 200"
    ];

    const answers = [
        'R7', 'R4', 'R1', 'B5', 'B0', 'B2', 'B1', 'G6', 'G3', 'G0'
    ];

    const handleChange = (e) => {
        setUserInput(e.target.value.toUpperCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const possibleAnswers = answers[step].split('/');
        if (possibleAnswers.includes(userInput)) {
            setUserInput("");
            if (step < questions.length - 1) {
                setStep(step + 1);
            } else {
                setCompleted(true);
            }
        } else {
            alert("Wrong answer. Please try again.");
        }
    };

    if (completed) {
        return (
            <div className={styles.container}>
                <p>Pixels in array, a digital sea,
                    Ordered they stand, awaiting decree.
                    Follow the pattern, each row in line,
                    But the answer lies in a column's shine.
                </p>
                <p>
                    A realm of myriad fields, where bits reside,
                    Ordering their rank, they quietly confide.
                    In this place of silent chatter, a rule is subtly set,
                    Least Bit reigns, a scheme of hidden threat.
                </p>
                <p>
                    In the arena of colors, a sequence unfolds,
                    With an order, a narrative, as each bit holds.
                    A triad so vivid, its sequence is true,
                    First shines the Red, then Green, and lastly Blue.
                </p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h2>Answer should be in format of first letter of the key + value</h2>
            <form onSubmit={handleSubmit}>
                {typeof questions[step] === 'string' ?
                    <p className={styles.para}>{questions[step]}</p> :
                    questions[step]
                }
                <div className={styles.inputContainer}>
                    <>
                        <input className={styles.inputBox} value={userInput} onChange={handleChange} />
                        <button type="submit">Submit</button>
                    </>
                </div>
            </form>
        </div>
    );
};

export default Week2;
