import React from 'react';
import {Route} from 'react-router-dom'
import roster from '../src/containers/courses/roster'
import selectedCourse from "./containers/courses/selectedCourse";
import lessonsList from "./containers/Lessons/lessonsList";
import selectedLesson from './containers/Lessons/selectedLesson'

function App() {
  return (
    <div className="App">

      <Route
        path="/courses/"
        component={roster}
      />

      <Route
      path="/selected-course/:id"
      component={selectedCourse}
      />

      <Route
      path="/all-lessons/"
      component={lessonsList}
      />

      <Route
      path="/selected-lessons/:id"
      component={selectedLesson}
      />

    </div>
  );
}

export default App;
