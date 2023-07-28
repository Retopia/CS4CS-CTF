import React from "react";
import styles from './Week3.module.css';

const Dir = () => {
    let riddle = "Start where brains are filled and futures born,\r\nOn Tech Street number six, in the city adorned.\r\n\r\nWhere metropolitan marvels in view lie,\r\nLook beneath the entrance to find where secrets lie.\r\n\r\nDescend where scholars go to ponder and prepare,\r\nIn the heart of Brooklyn, you'll find your answer there.\r\n\r\nThis spot for learning, quiet and grand,\r\nIs where you'll find the next clue at hand.\r\n"
    let text = "7=28L!CbDE_?0`d0!C_5`8JN"

    return (
        <div className={styles.container}>
            <pre className={styles.centeredText}>{riddle}</pre>
        </div>
    );
};

export default Dir;
