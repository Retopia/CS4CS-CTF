import React, { useState, useEffect } from "react";
import styles from './Chat.module.css';

const Chat = () => {
  const [chatLog, setChatLog] = useState([]);
  const [displayedChat, setDisplayedChat] = useState([]);
  const [isChatFinished, setIsChatFinished] = useState(false);

  // Fetch chat log from file
  useEffect(() => {
    fetch("/convo.txt")
      .then(response => response.text())
      .then(data => {
        const parsedData = data.split('\n').map((line) => {
          const index = line.indexOf(':');
          const speaker = line.slice(0, index) + "\n";
          const text = line.slice(index + 1).trim();
          return { speaker, text, side: speaker.trim() === 'Person A' ? 'left' : 'right' };
        }).filter(item => item.text !== '');
        setChatLog(parsedData);
      });
  }, []);

  // Set a delay to display messages one by one
  useEffect(() => {
    let delay = 0;
    let timeouts = [];

    chatLog.forEach((item, index) => {
      delay += 1500; // Change the delay as needed.
      const timeout = setTimeout(() => {
        setDisplayedChat(prev => [...prev, item]);

        // When the last message is displayed
        if (index === chatLog.length - 1) {
          setIsChatFinished(true);
        }

      }, delay);
      timeouts.push(timeout);
    });
    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, [chatLog]);

  return (
    <div className={styles.container}>
      {displayedChat.map((item, index) => (
        <div
          key={index}
          className={`${styles.chatBubble} ${item.side === 'left' ? styles.chatBubbleLeft : styles.chatBubbleRight}`}
        >
          <p><strong>{item.speaker}</strong>{item.text}</p>
        </div>
      ))}
      {isChatFinished && (
        <div className={styles.downloadContainer}>
          <p>Now that you have this information, have fun with the following file:</p>
          <a href="/traversal.py" download>Download file</a>
        </div>
      )}
    </div>
  );
};

export default Chat;
