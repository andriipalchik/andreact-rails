import React from "react"
import TodoList from "./TodoList"
import Container from "@material-ui/core/Container"

const App = () => {
  return (
    <div className="App">
      <Container maxWidth="md">
        <TodoList />
      </Container>
    </div>
  )
}

export default App
