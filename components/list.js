"use client";

import React, { useState, useEffect } from "react";
import styles from "./list.module.css";
import scheduleMonday from "./monday";
import scheduleTuesday from "./tuesday";
import scheduleWednesday from "./wednesday";
import scheduleThursday from "./thursday";
import scheduleFriday from "./friday";

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
  const [day, setDay] = useState("");

  useEffect(() => {
    const updateDay = () => {
      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const now = new Date();
      const currentDay = daysOfWeek[now.getDay()];
      setDay(currentDay);
    };

    updateDay();

    const intervalId = setInterval(updateDay, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const renderSchedule = () => {
    let schedule = [];
    switch (day) {
      case "Monday":
        schedule = scheduleMonday;
        break;
      case "Tuesday":
        schedule = scheduleTuesday;
        break;
      case "Wednesday":
        schedule = scheduleWednesday;
        break;
      case "Thursday":
        schedule = scheduleThursday;
        break;
      case "Friday":
        schedule = scheduleFriday;
        break;
      default:
        schedule = []; 
    }

    if (schedule.length === 0) {
      return <p className = {styles.p}>US, FOREVER TOGETHER ❤️ </p>;
    }

    return schedule.map((entry, index) => (
      <ScheduleEntry
        key={index}
        time={entry.time}
        subjectHe={entry.subjectHe}
        classroomHe={entry.classroomHe}
        subjectHer={entry.subjectHer}
        classroomHer={entry.classroomHer}
      />
    ));
  };

  return (
    <div>
      <h1 className={styles.heading}>{day}</h1>
      {renderSchedule()}
    </div>
  );
};

export default ScheduleList;
