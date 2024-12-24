'use client';

import React from 'react';
import styles from './list.module.css';
import scheduleMonday from './monday';
import scheduleTuesday from './tuesday';
import scheduleWednesday from './wednesday';
import scheduleThursday from './thursday';
import scheduleFriday from './friday';

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

const ScheduleList = () => {
 

  return (
    <div>
      {scheduleMonday.map((entry, index) => (
        <ScheduleEntry
          key={index}
          time={entry.time}
          subjectHe={entry.subjectHe}
          classroomHe={entry.classroomHe}
          subjectHer={entry.subjectHer}
          classroomHer={entry.classroomHer}
        />
      ))}
    </div>
  );
};

export default ScheduleList;
