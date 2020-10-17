import React from "react"
import TodoList from "./TodoList"
import Container from "@material-ui/core/Container"

const App = () => {
  return (
    <Container maxWidth="md">
      <TodoList />
    </Container>
  )
}

export default App
