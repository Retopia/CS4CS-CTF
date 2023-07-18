import React, { useState } from "react";
import styles from "./Scavenger.module.css";

const Scavenger = () => {
  const [step, setStep] = useState(0);
  const [userInput, setUserInput] = useState("");

  const questions = [
    "Your cybersecurity adventure begins with a search for the three-letter abbreviation representing a common form of malware. Discover its name to find your next clue.",
    <div>
      <a href="https://i.imgur.com/PkYiBMz.jpg" target="_blank" rel="noopener noreferrer">Link to Fablab image</a>
      <br />
      <a href="https://i.imgur.com/T2qlYdC.jpg" target="_blank" rel="noopener noreferrer">Link to Microwave image</a>
    </div>,
    "Ages go by fast,\nPeople, they walk past,\nYet remain I here,\nUnable to bark or hear\nNever moving an inch,\nYou can sit beside me on a bench.\nAs plastic as can be\nBrooklyn Commons in I be",
    "Where technology hums and innovation takes flight, seek the symphony of keys, a melodic delight. In the heart of MetroTech, where work and art unite, discover the instrument that brings melodies to life",
    "Elementary, my dear Watson! Embark on a quest right where you are to uncover an ancient calculating device, where numbers dance and solutions arise. Seek the tool of calculation, an instrument revered, with beads and wires entwined. Unlock the secrets of the past, where mathematics and history are entwined.",
    "I chill without ice, preserving what's nice.\nIn a frosty abobe, freshness I provide.\nA box that stores, where coldness resides.",
    "5+5\nSet your sights on the tier of tens\nYour destination lies in an altitude of ten\nAscend to the double digits\nThe highest score in Olympic figure skating\nHow many players are on a basketball team\nA common rating for an exceptional film\nThe base of the decimal numbering system\nThe atomic number of neon\nThe number of provinces in Canada\nThe number of innings in a regulation baseball game"
  ];

  const answers = [
    "remote access trojan/rat",
    "transport layer security/tls",
    "secure sockets layer/secure socket layer",
    "netscape",
    "mozilla firefox/firefox",
    "def con/defcon",
  ];

  const handleChange = (e) => {
    setUserInput(e.target.value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const possibleAnswers = answers[step].split('/');
    if (possibleAnswers.includes(userInput)) {
      setUserInput("");
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        alert("You have completed the scavenger hunt!");
      }
    } else {
      alert("Wrong answer. Please try again.");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Scavenger Hunt</h1>
      <form onSubmit={handleSubmit}>
        {typeof questions[step] === 'string' ?
          <p className={styles.para}>{questions[step]}</p> :
          questions[step]
        }
        <div className={styles.inputContainer}>
          {step < questions.length - 1 ? (
            <>
              <input className={styles.inputBox} value={userInput} onChange={handleChange} />
              <button type="submit">Submit</button>
            </>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Scavenger;
