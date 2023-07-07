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

            <div className={styles.challenge}>
                <h2>Week 1 Day 4 Activity</h2>
                <h3><Link to="/comptest">Compatability Test</Link></h3>
                <h3><Link to="/compscore">Compatability Score Comparison</Link></h3>
            </div>
            <div className={styles.challenge}>
                <h2><Link to="/challenge1">Challenge 1: Unlock the Crate</Link></h2>
                <p>
                    A set of instructions to access the outstation sentries' control system has been intercepted. Unfortunately, the instructions are encoded using a Vigenere cipher and the Python decoder program is broken. The Orcas need to fix the program and decode the instructions. The program itself also appears to be encrypted.
                </p>
            </div>
            <div className={styles.challenge}>
                <h2><Link to="/challenge2">Challenge 2: ASCII Value Guessing</Link></h2>
                <p>
                    The Orcas manage to find a locked digital crate that was dropped by one of the sentries. To unlock it, they need to enter a correct key. The crate only grants access if the sum of ASCII values of the key equals a standard value. It also hints at a flag once the access is granted. The Orcas must  correctly figure out the correct sum of ASCII values to unlock the crate and find the flag.
                </p>
            </div>
            {/* <div className={styles.challenge}>
                <h2><Link to="/challenge3">Challenge 3: Decoding the Asterisk Message</Link></h2>
                <p>
                The Orcas find a secure data chip containing what appears to be a part of the blueprint for the HOME's underground sewer networks. But there's a hitch - the data appears to be encrypted with a peculiar cipher, rendering it useless for the time being.
                </p>
            </div>
            <div className={styles.challenge}>
                <h2><Link to="/challenge4">Challenge 4: Atbash and Rail Fence</Link></h2>
                <p>
                The Orcas have intercepted an encoded message from the sentries. It's believed to contain vital information about the security system of the outpost. However, the message has been encoded multiple times using different ciphers. The Orcas need to decode the message to proceed with their mission.
                </p>
            </div> */}
        </div>
    );
};

export default MainPage;
