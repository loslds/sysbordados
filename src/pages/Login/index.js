import React from 'react'
import { Avatar, Grid, Paper } from '@material-ui/core'
import { LockOutlined} from '@material-ui/icons'


export const PageLogin = () => {

  const paperStyle= {
    padding: 20,
    heigth: '330vh',
    width: 280,
    margin:'20px auto',
    align: 'center'
  }
  const avatarStyle={
    backgroundColor: '#fb0606'
  }
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align ='center'>
          <Avatar style={avatarStyle}><LockOutlined /></Avatar>
          <h2>Identifique-se.</h2>
        </Grid>
      </Paper>
    </Grid>

  )
}
