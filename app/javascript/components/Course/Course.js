import React, {useState, useEffect} from 'react' 
import axios from 'axios' 

const Course = (props) => {
  const [course, setCourse] = useState({})

  useEffect(() => {
    // get course 
    const id = props.match.params.id
    const url =`/api/v1/courses/${id}` 

    axios.get(url)
      .then(resp => {
        console.log(resp)
        setCourse(resp.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  console.log(props)
  return(
    <div>
      show
      {course.title}
    </div>
  )
}

export default Course 