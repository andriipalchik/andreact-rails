import React from "react"
import Tasks from "./Tasks"
import Projects from "./Projects"
import Container from "@material-ui/core/Container"

const App = () => {
  return (
    <Container maxWidth="md">
      <Projects />
      <Tasks />
    </Container>
  )
}

export default App
