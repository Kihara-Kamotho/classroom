import React from 'react' 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import Course from './Course/Course'
import Courses from './Courses/Courses'
import Lesson from './Lesson/Lesson'
import Lessons from './Lessons/Lessons'
import Section from './Section/Section'
import Sections from './Sections/Sections'

const App = () => {
  return(
   <Router>
     <Switch>
       <Route exact path="/" component={Courses} />
       <Route exact path="/courses/:id" component={Course} />
       <Route exact path="/courses/:id/sections" component={Sections} />
       <Route exact path="/courses/:course_id/sections/:section_id" component={Section} />
       <Route exact path="/courses/:course_id/sections/:section_id/lessons" component={Lessons}/>
       <Route exact path="/courses/:course_id/sections/:section_id/lessons/:id" component={Lesson} />
     </Switch>
   </Router>
  )
}

export default App 