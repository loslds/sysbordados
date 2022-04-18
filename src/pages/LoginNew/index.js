import React from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core'
import { LockOpenOutlined } from '@material-ui/icons'


export const PageLoginNew = () => {

  const paperStyle= {
    padding: 20,
    heigth: '330vh',
    width: 280,
    margin:'20px auto',
    align: 'center'
  }
  const avatarStyle={
    backgroundColor: '#1b5e20'
  }

  const butttonStyle={
    margin: '10px 0px 0px 0px'
  }

  const { push } = useHistory()

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align ='center'>
          <Avatar style={avatarStyle}><LockOpenOutlined /></Avatar>
          <h2>Identificar-se.</h2>
        </Grid>
        <TextField label='ID.' placeholder='Email...' type='email' fullWidth={true} required><span>+</span></TextField>
        <TextField label='Acesso.' placeholder='Senha...' type='password' fullWidth={true} required />
        <TextField label='Repetir Acesso.' placeholder='Senha...' type='password' fullWidth={true} required />
        <TextField label='Nome.' placeholder='Nome...' type='text' fullWidth={true} required />
        <Grid style={butttonStyle}>
        <Button style={butttonStyle} type='submit' color='Primary' fullWidth={true} variant='contained' onClick={ () => {} }>Enviar.</Button>
        <Button style={butttonStyle} type='text' color='default' fullWidth={true} variant="outlined" onClick={() => push('/')}>Voltar.</Button>
        </Grid>
      </Paper>
    </Grid>

  )
}
