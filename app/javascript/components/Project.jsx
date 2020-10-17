import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import EventAvailableRoundedIcon from "@material-ui/icons/EventAvailableRounded"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import DeleteIcon from "@material-ui/icons/Delete"
import EditIcon from "@material-ui/icons/Edit"
import Grid from "@material-ui/core/Grid"
import axios from "axios"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 30,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Project = (props) => {
  function handleDelete() {
    props.deleteProject(props.item)
  }
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              href={`/api/v1/tasks/new`}
            >
              <EventAvailableRoundedIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {props.name}
            </Typography>
            <Grid
              item
              xs={1}
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <IconButton
                variant="contained"
                color="inherit"
                value="end"
                size="small"
                href={`/api/v1/projects/${props.id}/edit`}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                variant="contained"
                color="inherit"
                value="start"
                size="small"
                onClick={handleDelete}
              >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  )
}

export default Project
