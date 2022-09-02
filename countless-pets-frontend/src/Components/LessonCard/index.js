import { useState } from 'react';
import './lesson-card.css';

// This component is used to display the lesson on the LessonContainer Component. 
// It will catch the data from the db after the user submits the form.
const LessonCard = ({ lesson }) => {
  const [attendance, setAttendance] = useState('');

  function sendAttendanceList() {
    setAttendance('');
    alert(
      'Your name has been added to the attendance list. Please make sure to attend!'
    );
  }

  return (
    <div className="single-lesson">
      <div className="card-hero">
        <h2>{lesson.topic}</h2>
        <hr />
      </div>
      <div className="card-stuff">
        <p>
          <strong>Name: </strong> {lesson.name}
        </p>
        <p>
          <strong>Lesson description: </strong>
          {lesson.description}
        </p>
        <p>
          <strong>Session date and time: </strong>
          {lesson.datetime}
        </p>
        <p>
          <strong>Session length: </strong>
          {lesson.duration} minutes
        </p>
        <p>
          <strong>Meeting link: </strong>
          {lesson.zoom}
        </p>
      </div>
      <div className="attending-box">
        <input
          type="text"
          placeholder="Write your name"
          value={attendance}
          onChange={(e) => setAttendance(e.target.value)}
        />
        <button onClick={sendAttendanceList}>Confirm attendance</button>
      </div>
    </div>
  );
};

export default LessonCard;
