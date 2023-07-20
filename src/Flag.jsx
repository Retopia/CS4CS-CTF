import React from "react";
import styles from './Flag.module.css';

const Flag = () => {
    let text = "flag{PreSt0n}"
    return (
        <div className={styles.container}>
            <p className={styles.centeredText}>{text}</p>
        </div>
    );
};

export default Flag;
