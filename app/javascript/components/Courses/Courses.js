import React, {useState, useEffect} from 'react' 
import axios from 'axios' 

const Courses = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    // get courses
    const url = '/api/v1/courses' 
    axios.get(url) 
    .then(resp => {
      console.log(resp)
      setCourses(resp.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [courses.length])
  return(
    <div>

    </div>
  )
}

export default Courses 