import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainPage.module.css';

const MainPage = () => {
    return (
        <div className={styles.container}>
            {/* <h1>CS4CS CTF - Seeking Control of HOME</h1> */}

            {/* <div className={styles.activityContainer}>
                <div className={styles.activity}>
                    <h2><Link to="/comptest">Compatibility Test</Link></h2>
                    <p>
                        Week 1 Day 4's Activity is here! Answer 30 questions to get your compatibility "hash"
                    </p>
                </div>
                <div className={styles.activity}>
                    <h2><Link to="/compscore">Compatibility Score Comparison</Link></h2>
                    <p>
                        Enter 2 compatibility "hashes" here to see how compatible they are
                    </p>
                </div>
            </div> */}
            {/* <div className={styles.challenge}>
                <h2><Link to="/challenge2">DE-L0ck the 67 82 65 84 69</Link></h2>
            </div> */}
            {/* <div className={styles.challenge}>
                <h2><Link to="/scav">Scavenger Hunt</Link></h2>
            </div> */}
            <div className={styles.challenge}>
                <h2><Link to="/chat">Chat</Link></h2>
            </div>
            <div className={styles.challenge}>
                <h2><Link to="/week2">Q&A</Link></h2>
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
