import React, { useState } from 'react';
import MemoryGame from './MemoryGame'; 
import styles from './Challenge3.module.css';

const Challenge3 = () => {
    const [gameCompleted, setGameCompleted] = useState(false);

    return (
        <div className={styles.foreground}>
            <h1 className={styles.title}>Challenge 3</h1>
            <MemoryGame onGameComplete={() => setGameCompleted(true)} />
            {gameCompleted ? (
                <div className={styles.grantedAccess}>
                    <h2 className={styles.grantedText}>ACCESS GRANTED</h2>
                    <div className={styles.grid}>
                        <button className={styles.gridButton}>File 1</button>
                        <button className={styles.gridButton}>File 2</button>
                        {/* Add your other buttons */}
                    </div>
                </div>
            ) : (
                <div className={styles.deniedAccess}>
                    <h2 className={styles.deniedText}>ACCESS DENIED</h2>
                </div>
            )}
        </div>
    );
}

export default Challenge3;
