import React, {useState, useEffect} from 'react' 
import axios from 'axios'

const Lesson = (props) => {
  const [lesson, setLesson] = useState({})

  useEffect(() => {
    // get lesson 
    const course_id = props.match.params.course_id
    const section_id = props.match.params.section_id 
    const id = props.match.params.id

    const url = `/api/v1/courses/${course_id}/sections/${section_id}/lessons/${id}`
    console.log(url)

    axios.get(url) 
      .then(resp => {
        console.log(resp)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return(
    <div>
      lesson#show
    </div>
  )
}

export default Lesson