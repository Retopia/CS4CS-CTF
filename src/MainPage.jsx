import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MainPage.module.css';

const MainPage = () => {
    return (
        <div className={styles.container}>
            <h1>CS4CS CTF - Seeking Control of HOME</h1>
            <h2>Welcome, brave explorer!</h2>
            <p>
            In the year 2040, just 20 years after the global pandemic, a nuclear war burst out on planet earth which led to devastating effects which rendered earth uninhabitable due to the oxygen level depleting at an alarming rate as the Trione gas, an after effect of the blast, reacted vigorously with the oxygen in the atmosphere. In an attempt to save humanity, a group of elite scientists, architects, engineers, and businessmen were sent to planet Mars to build a habitable, oxidized, man-made earth dubbed, HOME. After 24 months of expedited work on HOME, it was nearing its final stages of completion and thus a group of twelve prime citizens of earth were hand-selected to be sent to inhabit Mars by two separate spaceships. On the day of launch though, some survivors who were part of the revolution against the government’s failure, took control of one of the ships and launched it with six of their own while the other rocket was launched with the prime citizens. On arrival at the landing station at HOME, the rocket with the revolutionaries were not granted access to land and were shot off the sky, leading to them crash landing 35 miles East of HOME. It has been 5 years now and the revolutionaries have since been fighting to gain entry into HOME as all resources they had on the rocket as well as the ones they were stealing from the sentries and exploratory groups sent out to explore mars weren't enough to sustain them. Thus, Thadeus, the leader of the group of revolutionaries who now call themselves, ‘The Orcas’, has decided that they storm the castle and take control of HOME. They would need to first strike an outstation to get an old schematic map of the HOME that would contain maps of the underground sewer networks which would serve as their entry point. 
            </p>

            <div className={styles.activityContainer}>
                <div className={styles.activity}>
                    <h2><Link to="/comptest">Compatibility Test</Link></h2>
                    <p>
                        Week 1 Day 4's Activity is here! Answer 20 questions to get your compatibility "hash"
                    </p>
                </div>
                <div className={styles.activity}>
                    <h2><Link to="/compscore">Compatibility Score Comparison</Link></h2>
                    <p>
                        Enter 2 compatibility "hashes" here to see how compatible they are
                    </p>
                </div>
            </div>
            <div className={styles.challenge}>
                <h2>Unlock the Crate</h2>
                <p>
                    A set of instructions to access the outstation sentries' control system has been intercepted. Unfortunately, the instructions are encoded using a Vigenere cipher and the Python decoder program is broken. The Orcas need to fix the program and decode the instructions. The program itself also appears to be encrypted.
                </p>
            </div>
            <div className={styles.challenge}>
                <h2>ASCII Value Guessing</h2>
                <p>
                    The Orcas manage to find a locked digital crate that was dropped by one of the sentries. To unlock it, they need to enter a correct key. The crate only grants access if the correct ASCII values are entered.
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
