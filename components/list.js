'use client';

import React from 'react';
import styles from './list.module.css';

const ScheduleEntry = ({ time, subjectHe, classroomHe, subjectHer, classroomHer }) => {
  return (
    <div className={styles.container}>
      <div className={styles.time}>{time}</div>
      <div className={styles.subjectsContainer}>
        <div className={styles.subjectBox}>
          <h3 className={styles.label}>HIM &lt;3</h3>
          <h2 className={styles.subject}>{subjectHe}</h2>
          <p className={styles.classroom}>Classroom: {classroomHe}</p>
        </div>
        <div className={styles.subjectBox}>
          <h3 className={styles.label}>HER &lt;3</h3>
          <h2 className={styles.subject}>{subjectHer}</h2>
          <p className={styles.classroom}>Classroom: {classroomHer}</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleEntry;
