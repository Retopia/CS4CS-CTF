import React from 'react';
import styles from './Question.module.css';

const Question = ({ id, label, onChange }) => (
  <div className={styles.container}>
    <label className={styles.label} htmlFor={id}>{`Question ${id}: ${label}`}</label>
    <div className={styles.radioGroup}>
      <label>
        <input type="radio" id={id} name={id} value="Most Likely" onChange={onChange} />
        Most Likely
      </label>
      <label>
        <input type="radio" id={id} name={id} value="Likely" onChange={onChange} />
        Likely
      </label>
      <label>
        <input type="radio" id={id} name={id} value="Neutral" onChange={onChange} />
        Neutral
      </label>
      <label>
        <input type="radio" id={id} name={id} value="Unlikely" onChange={onChange} />
        Unlikely
      </label>
      <label>
        <input type="radio" id={id} name={id} value="Most Unlikely" onChange={onChange} />
        Most Unlikely
      </label>
    </div>
  </div>
);

export default Question;
