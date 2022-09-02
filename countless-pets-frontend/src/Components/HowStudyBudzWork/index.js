import KazeemCard from '../../pictures/Kazeem alatishe- clear.png';
import './HowStudyBudzWork.css';

//Component containing the HowStudyBudzWork component and is found on the Navbar at "how StudyBudz works"
const HowStudyBudzWork = () => {
  return (
    <div className="how-study-budz-work">
      <div className="text-container">
        <h1>How StudyBudz works</h1>
        <p>
          {' '}
          We Promote a culture of respect and honesty amongst our Study Budz. We
          want everyone to feel they are in a confortable zone where learning is
          promoted amongs their peers.
        </p>
        <p>
          At StudyBudz we want to reward contributions, se have set up a badge
          stytem that rewards users for their contributions and efforts
        </p>
        <p>Below is a example of a users personal profile page. </p>
      </div>
      <div className="teacher-card-container">
        <img className="card-pic" src={KazeemCard} alt="badges example" />
        <div className="info-container">
          <h2>Sessions:</h2>

          <p>
            You have completed <strong>23</strong> sessions
          </p>
          <h2>Feedback:</h2>
          <p>
            <strong>Mary:</strong> So helpful, thank you so much!
          </p>
          <p>
            {' '}
            <strong>Bob:</strong> Learned so much. Amazing!
          </p>
          <p>
            {' '}
            <strong>Louise:</strong> Kazeem is so patient and friendly.
          </p>

          <button>Click to see all feedback</button>
          <h2>Missed Sessions:</h2>
          <p>
            {' '}
            You have missed <strong>0</strong> session!{' '}
          </p>
          <h2>Duration:</h2>
          <p>
            {' '}
            You have taught for <strong>2202 minutes </strong> so far!{' '}
          </p>
          <h2>Total sessions:</h2>
          <p>
            {' '}
            You have taught <strong>35</strong> sessions so far!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowStudyBudzWork;
