import React from 'react';
import styles from './Question.module.css';

const Question = ({ id, label, onChange }) => (
  <div className={styles.container}>
    <label className={styles.label} htmlFor={id}>{`Question ${id}: ${label}`}</label>
    <div className={styles.radioGroup}>
      <label>
        <input type="radio" id={id} name={id} value="5" onChange={onChange} />
        Most Likely
      </label>
      <label>
        <input type="radio" id={id} name={id} value="4" onChange={onChange} />
        Likely
      </label>
      <label>
        <input type="radio" id={id} name={id} value="3" onChange={onChange} />
        Neutral
      </label>
      <label>
        <input type="radio" id={id} name={id} value="2" onChange={onChange} />
        Unlikely
      </label>
      <label>
        <input type="radio" id={id} name={id} value="1" onChange={onChange} />
        Most Unlikely
      </label>
    </div>
  </div>
);

export default Question;
