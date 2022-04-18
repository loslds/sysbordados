import React from 'react'
import { useHistory } from 'react-router-dom'
import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'

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
  const butttonStyle={
    margin: '10px 0px 0px 0px'

  }
  const { push } = useHistory()
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align ='center'>
          <Avatar style={avatarStyle}><LockOutlined /></Avatar>
          <h2>Identifique-se.</h2>
        </Grid>
        <TextField label='ID.' placeholder='Email...' type='email' fullWidth={true} required />
        <TextField label='Acesso.' placeholder='Senha...' type='password' fullWidth={true} required />
        <FormControlLabel
          control = {
            <Checkbox name='checkedB' color='primary' />
          }
          label ='Me lembre.'
        />
        <Button type='submit' color= "Primary" fullWidth={true} variant='contained' onClick={ () => {} }>Enviar.</Button>
        <Grid >
          <Button style={butttonStyle} type='button' color="Success" fullWidth={true} variant='contained' onClick={() => push('/loginnew')}>Cadastrar Senha ?</Button>
          <Button style={butttonStyle} type='button' color="Success" fullWidth={true} variant='contained' onClick={() => push('/loginnew')}>Recadastrar Senha ?</Button>
          <Button style={butttonStyle} type='button' color="Success" fullWidth={true} variant='contained' onClick={() => push('/loginnew')}>Recuperar Senha ?</Button>
        </Grid>
      </Paper>
    </Grid>

  )
}
