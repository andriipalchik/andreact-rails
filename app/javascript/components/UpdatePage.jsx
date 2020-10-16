import React from "react"
import Button from "@material-ui/core/Button"
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck"

const UpdatePage = () => {
  return (
    <Button
      value="end"
      color="primary"
      variant="contained"
      href="http://localhost:3000/pages/index"
      style={{ margin: 8 }}
      startIcon={<PlaylistAddCheckIcon />}
    >
      Update Page
    </Button>
  )
}

export default UpdatePage
