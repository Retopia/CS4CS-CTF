import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainPage.module.css';

const MainPage = () => {
    return (
        <div className={styles.container}>
            <h1>CS4CS CTF - Seeking Control of HOME</h1>
            <h2>Welcome, brave explorer!</h2>
            <p>
                It's the year 2040 and Earth has become uninhabitable.
            </p>

            {/* Add challenges as separate divs */}
            <div className={styles.challenge}>
                <h2><Link to="/challenge1">Challenge 1: Unlock the Crate</Link></h2>
                <p>
                    A set of instructions to access the outstation sentries' control system has been intercepted. Unfortunately, the instructions are encoded using a Vigenere cipher and the Python decoder program is broken. The Orcas need to fix the program and decode the instructions. The program itself also appears to be encrypted.
                </p>
            </div>
            <div className={styles.challenge}>
                <h2><Link to="/challenge2">Challenge 2: Decoding the Asterisk Message</Link></h2>
                <p>
                    The Orcas manage to find a locked digital crate that was dropped by one of the sentries. To unlock it, they need to enter a correct key. The crate only grants access if the sum of ASCII values of the key equals a standard value. It also hints at a flag once the access is granted. The Orcas must  correctly figure out the correct sum of ASCII values to unlock the crate and find the flag.
                </p>
            </div>
            {/* More challenges... */}
        </div>
    );
};

export default MainPage;
