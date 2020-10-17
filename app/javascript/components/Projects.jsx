import React, { useState, useEffect } from "react"
import UpdatePage from "./UpdatePage"
import AddButton from "./AddButton"
import TodoItem from "./TodoItem"
import Batch from "./Batch"
import Project from "./Project"
import axios from "axios"

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    axios
      .get("/api/v1/projects.json")
      .then((resp) => {
        setProjects(resp.data.data)
      })
      .catch((resp) => console.log(resp))
  }, [projects.length])

  // const tasks = projects.included.map((item) => (
  //   <TodoItem key={item.id} id={item.id} item={item.attributes} />
  // ))

  return (
    <div>
      <UpdatePage />
      {projects.map((item) => (
        <Project
          key={item.id}
          id={item.id}
          name={item.attributes.name}
          item={item}
          deleteItem={deleteItem}
        />
      ))}

      <AddButton />
    </div>
  )
}

export default Projects
