import React, {useState, useEffect} from 'react' 
import axios from 'axios'

const Section = ({match}) => {
  const [section, setSection] = useState({})

  useEffect(() => {
    // get course
    // console.log(props)
    const section_id = match.params.section_id
    const course_id = match.params.course_id
    // console.log(`Course id is: " ${course_id}`)
    // console.log(`SEction id is: " ${section_id}`)
    const url = `/api/v1/courses/${course_id}/sections/${section_id}`
    console.log(url)
    axios.get(url)
      .then(resp => {
        console.log(resp.data)
        setSection(resp.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  return(
    <div>
      show
    </div>
  )
}

export default Section 