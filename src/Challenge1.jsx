import React from "react";
import styles from "./Challenge1.module.css";

const base64Lines = [
  "aW1wb3J0IHN0cmluZwoKZGVmIHZpZ2VuZXJlX2RlY3J5cHQoa2V5LCBjaXBoZXJ0ZXh0KToKICAgICIi",
  "IkRlY3J5cHQgdGhlIHN0cmluZyBhbmQgcmV0dXJuIHRoZSBwbGFpbnRleHQiIiIKICAgIHJlc3Vsd",
  "CA9ICIiCgogICAgaWYgY2lwaGVydGV4dFtpXS5pc2FscGhhKCk6CiAgICAgICAgc2hpZnQgPSBzdH",
  "JpbmcuYXNjaWlfbG93ZXJjYXNlLmluZGV4KGtleVtpICUgbGVuKGtleSldLmxvd2VyKCkpCiAgICAg",
  "ICAgcmVzdWx0ICs9IHN0cmluZy5hc2NpaV9sb3dlcmNhc2VbKHN0cmluZy5hc2NpaV9sb3dlcmNhc",
  "2UuaW5kZXgoY2lwaGVydGV4dFtpXS5sb3dlcigpKSAtIHNoaWZ0KSAlIDI2XQogICAgZWxzZToKIC",
  "AgICAgICByZXN1bHQgKz0gY2lwaGVydGV4dFtpXQoKICAgIHBhc3MKCmRlZiBtYWluKCk6CiAgICBt",
  "ZXNzYWdlID0gJ3ozZDFsY19qeTFqX3Fzd3ExbmonCiAgICBrZXl3b3JkID0gJ1laV1gnCgogICAgZG",
  "VjcnlwdGVkX21lc3NhZ2UgPSB2aWdlbmVyZV9kZWNyeXB0KGtleXdvcmQsIG1lc3NhZ2UpCgogICAgc",
  "HJpbnQoJ0RlY3J5cHRlZDogRmxhZ3snICsgZGVjcnlwdGVkX21lc3NhZ2UgKyAnfScpCgptYWluKCk",
  "=",
];

const Challenge1 = () => {
  return (
    <div className={styles.container}>
      <h1>Challenge 1: Unlock the Crate</h1>
      <p>
        The Orcas manage to find a locked digital crate... <br />
      </p>
      <p>25 26 23 24</p>
      {base64Lines.map((line, index) => (
        <p className={styles.line} style={{ animationDelay: `${index * 1.8}s` }} key={index}>{line}</p>
      ))}
    </div>
  );
};

export default Challenge1;
