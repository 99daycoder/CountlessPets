import LessonCard from '../LessonCard';
import './lesson-container.css';

// This component is responsible for loading the LessonCard component and 
// mapping through any additional LessonCard that is added to the DB through the Form Component
const LessonContainer = ({ lessons }) => {
  return (
    <div>
      <h2 className="card-section-title">Choose a lesson to take part in:</h2>
      <div className="lesson-container">
        {lessons.map((lesson) => (
          <LessonCard lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default LessonContainer;
