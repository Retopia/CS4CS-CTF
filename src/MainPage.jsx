import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './MainPage.module.css';

const MainPage = () => {
    const navigate = useNavigate(); // Get the navigate function

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        const response = await fetch('http://3.18.5.45:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            navigate('/divspage', { state: { username } }); // Navigate to /divspage
        } else {
            alert(data.error);
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        const response = await fetch('http://3.18.5.45:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
        } else {
            alert(data.error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.challenge}>
                <h2><Link to="/final">Week 3</Link></h2>
            </div>

            <div className={styles.formContainer}>
                <h2>Login</h2>
                <form onSubmit={handleLoginSubmit} className={styles.form}>
                    <label className={styles.label}>
                        Username:
                        <input type="text" name="username" required className={styles.input} />
                    </label>
                    <label className={styles.label}>
                        Password:
                        <input type="password" name="password" required className={styles.input} />
                    </label>
                    <button type="submit" className={styles.button}>Login</button>
                </form>
            </div>

            <div className={styles.formContainer}>
                <h2>Register</h2>
                <form onSubmit={handleRegisterSubmit} className={styles.form}>
                    <label className={styles.label}>
                        Username:
                        <input type="text" name="username" required className={styles.input} />
                    </label>
                    <label className={styles.label}>
                        Password:
                        <input type="password" name="password" required className={styles.input} />
                    </label>
                    <button type="submit" className={styles.button}>Register</button>
                </form>
            </div>
        </div>
    );
};

export default MainPage;
