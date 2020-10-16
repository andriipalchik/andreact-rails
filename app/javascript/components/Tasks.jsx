import React, { useState, useEffect } from "react"
import Grid from "@material-ui/core/Grid"
import TodoItem from "./TodoItem"
import axios from "axios"

const Tasks = () => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    axios
      .get("/api/v1/tasks.json")
      .then((resp) => {
        setTasks(resp.data.data)
      })
      .catch((resp) => console.log(resp))
  }, [tasks.length])

  return (
    <div className="TodoList">
      <Grid container spacing={3}>
        <Grid item xs={12} id="todo_list">
          {tasks.map((item) => (
            <TodoItem key={item.id} id={item.id} attributes={item.attributes} />
          ))}
        </Grid>
      </Grid>
    </div>
  )
}
export default Tasks
