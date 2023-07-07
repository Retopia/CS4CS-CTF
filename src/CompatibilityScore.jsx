import React, { useState } from 'react';
import styles from './CompatibilityScore.module.css';

const CompatibilityScore = () => {
    const [hash1, setHash1] = useState('');
    const [hash2, setHash2] = useState('');
    const [score, setScore] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (hash1.length !== hash2.length) {
            throw new Error("Input arrays must have the same length");
        }

        let totalDifference = 0;
        for (let i = 0; i < hash1.length; i++) {
            totalDifference += Math.abs(hash1[i] - hash2[i]);
        }

        // totalDifference range is 0 to 4*hash1.length
        // to normalize it, we'd subtract from 1 the ratio of totalDifference to maximum possible difference
        const compatibility = 1 - (totalDifference / (4 * hash1.length));
        setScore(Math.round(compatibility * 100)/100 * 100);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Compatibility Score</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.hashDisplay}>
                    Hash 1: <input className={styles.inputField} type="text" value={hash1} onChange={(e) => setHash1(e.target.value)} />
                </label>
                <label className={styles.hashDisplay}>
                    Hash 2: <input className={styles.inputField} type="text" value={hash2} onChange={(e) => setHash2(e.target.value)} />
                </label>
                <button className={styles.submitButton} type="submit">Calculate</button>
            </form>
            {score !== null && <div className={styles.result}>Compatibility score: {score}</div>}
        </div>
    );
}

export default CompatibilityScore;
