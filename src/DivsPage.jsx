import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './DivsPage.module.css';

const DivsPage = () => {
    const [divs, setDivs] = useState([1, 2, 3, 4, 5, 6]);
    const [clickedDivs, setClickedDivs] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const username = location.state?.username;

    const textMap = {
        1: "Susan - K12 Office - The code you're looking for is derived from the initials and date of birth of the famous playwright who wrote 'Romeo and Juliet,' 'Hamlet,' and many other renowned plays!",
        2: 'Ryan - Makerspace desk - Ironman’s last words abbreviated',
        3: "Rishika - IESOSC Classroom - To find the code, think of a popular phrase involving numbers that people use to express their love and affection, especially on Valentine's Day. The first four letters are NGBA.",
        4: "Katherine - K12 Office - Abbreviation for level at 1500",
        5: "Aysha - SOSC - The year a notable event took place when a well-known singer from Destiny's Child, Beyoncé, took a major step in her career by releasing her first solo album, marking a significant moment in her musical journey. The first three letter are short for ‘Be right Back",
        6: "Preston - 9th floor - Thumbs up",
    };

    useEffect(() => {
        const fetchClickedDivs = async () => {
            const response = await fetch(`http://3.18.5.45:3000/users/${username}`);
            const data = await response.json();
            setClickedDivs(data.clickedDivs);
            // If the user has clicked any divs, update divs state to contain only the clicked divs
            if (data.clickedDivs.length > 0) {
                setDivs(data.clickedDivs);
            }
        };

        fetchClickedDivs();
    }, [username]);

    const handleClick = async (divId) => {
        const response = await fetch(`http://3.18.5.45:3000/divs/${divId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username })
        });

        if (response.ok) {
            setClickedDivs(prev => [...prev, divId]);
            setDivs([divId]);
        } else {
            // handle error here
        }
    };

    return (
        <div className={styles.container}>
            {divs.map(div => (
                <div key={div} className={styles.divBox} onClick={() => handleClick(div)}>
                    {/* Display the text for the div if it has been clicked, otherwise just display the number */}
                    {clickedDivs.includes(div) ? textMap[div] : div}
                </div>
            ))}
        </div>
    );
};

export default DivsPage;
