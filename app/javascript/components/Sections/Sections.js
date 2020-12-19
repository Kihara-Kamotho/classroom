import React, {useState, useEffect} from 'react' 
import axios from 'axios' 

const Sections = (props) => {
  const [sections, setSections] = useState([])

  useEffect(() => {
    // get sections 
    const course_id = props.match.params.id

    const url = `/api/v1/courses/${course_id}/sections` 
    console.log(url)

    axios.get(url) 
      .then(resp => {
        console.log(resp)
        setSections(resp.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  console.log(props)
  return(
    <div>
      index
    </div>
  )
}

export default Sections 