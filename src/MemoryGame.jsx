import React, { useState, useEffect } from 'react';
import styles from './MemoryGame.module.css';

const MemoryGame = ({ onGameComplete }) => {
    const [values, setValues] = useState([]);
    const [matches, setMatches] = useState([]);
    const [selected, setSelected] = useState([]);
    const [mismatchButtons, setMismatchButtons] = useState(Array(16).fill(false));

    useEffect(() => {
        const initialValues = Array(6).fill(null).map((_, i) => i + 1);
        const gameValues = [...initialValues, ...initialValues].sort(() => Math.random() - 0.5);
        setValues(gameValues);
    }, []);

    const handleButtonClick = index => {
        setSelected([...selected, index]);
    };

    useEffect(() => {
        if (selected.length === 2) {
            const [index1, index2] = selected;
            if (values[index1] === values[index2]) {
                setMatches([...matches, index1, index2]);
                setSelected([]);
                if (matches.length + 2 === values.length) {
                    onGameComplete();
                }
            } else {
                let newMismatchButtons = [...mismatchButtons];
                newMismatchButtons[index1] = true;
                newMismatchButtons[index2] = true;
                setMismatchButtons(newMismatchButtons);
                setTimeout(() => {
                    setSelected([]);
                    newMismatchButtons[index1] = false;
                    newMismatchButtons[index2] = false;
                    setMismatchButtons(newMismatchButtons);
                }, 1000);
            }
        }
    }, [selected]);

    return (
        <div className={styles.container}>
            {values.map((value, index) => (
                <button
                    key={index}
                    className={`${styles.button} ${!selected.includes(index) && !matches.includes(index) ? styles.hidden : ''}`}
                    disabled={selected.length === 2 || matches.includes(index)}
                    onClick={() => handleButtonClick(index)}
                >
                    {value}
                </button>
            ))}
        </div>
    );
};

export default MemoryGame;
