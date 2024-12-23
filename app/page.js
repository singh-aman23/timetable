import classes from "./page.module.css";
import ScheduleEntry from "@/components/list";
export default function Home() {
  return (
    <div>
      <ScheduleEntry
        time="9:30 - 10:20"
        subjectHe="Love in Literature"
        classroomHe="101"
        subjectHer="Creative Writing"
        classroomHer="102"
      />
      <ScheduleEntry
        time="10:30 - 11:20"
        subjectHe="Romantic Poetry"
        classroomHe="201"
        subjectHer="Modern Literature"
        classroomHer="202"
      />
      <ScheduleEntry
        time="11:30 - 12:20"
        subjectHe="Art of Love Letters"
        classroomHe="303"
        subjectHer="Philosophy of Love"
        classroomHer="304"
      />
    </div>
  );
}
