import React, { useState, useEffect } from "react"
import TodoItem from "./TodoItem"
import Project from "./Project"
import axios from "axios"

const Batch = ({ id, name, item }) => {
  const [projects, setProjects] = useState("")
  const [tasks, setTasks] = useState(false)

  useEffect(() => {
    axios
      .get("/api/v1/projects.json")
      .then((resp) => {
        setProjects(resp.data.data)
      })
      .catch((resp) => console.log(resp))
  }, [projects.length])

  return (
    <>
      <Project key={item.id} id={item.id} name={item.attributes.name} />
      <TodoItem
        key={item.relationships.id}
        id={item.relationships.id}
        attributes={item.included.attributes}
      />
    </>
  )
}

export default Batch
