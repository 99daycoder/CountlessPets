import { useState, useEffect } from 'react';
import './App.css';
import studyBudz from '../../pictures/countless-pets-logo.png';
import Form from '../Form/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LessonCard from '../LessonCard';
import LessonContainer from '../LessonContainer';
import Navbar from '../NavBar/index.js';
import HowStudyBudzWork from '../HowStudyBudzWork';
import HowToWorkTogether from '../HowToWorkTogether';

function App() {
  //Main data that comes from the db + initial render
  const [initialData, setInitialData] = useState(null);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  //Hook that fetches data for the initail render
  useEffect(() => {
    const url = `https://studybudzapp.herokuapp.com/lessons`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw Error('could not retrieve data, sorry.');
        }
        const LessonData = await response.json();
        setInitialData(LessonData.payload);
        console.log(LessonData.payload);
        setPending(false);
      } catch (error) {
        setPending(false);
        setError(error.message);
        console.log('error', error);
      }
    };

    fetchData();
  }, []); //The submit button state will have to go inside the dep. array

  return (
    <Router>
      <div>
       
        <div className="App">
          <div className="logo-container">
            <img src={studyBudz} alt="logo" />
          </div>
          <Switch>
            <Route exact path="/">
              <div className="main">
                
                <Form />
              </div>
            </Route>
            <Route path="/how-study-budz-work">
              <HowStudyBudzWork />
            </Route>
           
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
