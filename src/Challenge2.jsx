import React, { useState, useEffect, useRef } from "react";
import styles from "./Challenge2.module.css";

const Challenge2 = () => {
    const [key, setKey] = useState("");``
    const [history, setHistory] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        const handleKeyPress = () => {
            inputRef.current.focus();
        };

        const handleClick = (event) => {
            if (event.target !== inputRef.current) {
                inputRef.current.focus();
            }
        };

        document.addEventListener("keydown", handleKeyPress);
        document.addEventListener("mousedown", handleClick);

        // cleanup function to remove event listeners when component unmounts
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    const checkKey = () => {
        let sum = 0;
        for (let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i);
        }

        let message = "";
        if (sum === 742) {
            let arr = [
                "z",
                "l",
                "5",
                "1",
                "!",
                "f",
                "x",
                "t",
                "t",
                "3",
                "h",
                "d",
                "_",
                "s",
                "e",
                "1",
                "b",
                "g",
                "a",
                "3",
                "g",
            ];
            let out = "";
            for (let j = 0; j < 10; j++) {
                out += arr[j + (j + 1)];
            }
            message = `ACCESS GRANTED!!\nYour Flag is: Flag{${out}}`;
        } else {
            message = `WRONG!\n`;
        }

        setHistory((oldHistory) => [...oldHistory, `> ${key}`, message]);
        setKey("");
    };

    return (
        <div className={styles.terminal}>
            <pre>{history.join("\n")}</pre>
            <div className={styles.inputLine}>
                <span>{"> "} </span>
                <input
                    ref={inputRef}
                    type="text"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                    onKeyPress={(event) => {
                        if (event.key === "Enter") {
                            event.preventDefault();
                            checkKey();
                        }
                    }}
                />
            </div>
        </div>
    );
};

export default Challenge2;