import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Lessons = (props) => {
  const [lessons, setLessons] = useState([])

  useEffect(() => {
    // get lessons
    const course_id = props.match.params.course_id 
    const section_id = props.match.params.section_id
    console.log(course_id, section_id)
    const url = `/api/v1/courses/${course_id}/sections/${section_id}/lessons`
    console.log(url)

    axios.get(url)
      .then(resp => {
        console.log(resp)
      })
      .catch(error => {
        console.log(error)
      })
  }, [lessons.length])

  console.log(props)
  return(
    <div>
      lessons#index
    </div>
  )
}

export default Lessons