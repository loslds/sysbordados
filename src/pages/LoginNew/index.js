import React from 'react'
import { useHistory } from 'react-router-dom'
import { OutlinedInput, InputLabel, InputAdornment, Avatar, Button, FormControl, Grid, Box, Paper, TextField } from '@material-ui/core'
import { LockOutlined, VisibilityOff, Visibility  } from '@material-ui/icons'
import IconButton from "@material-ui/core/IconButton"



export const PageLoginNew = () => {

  const paperStyle= {
    padding: 20,
    heigth: '100%vh',
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

  const InputStyle={
    margin: '10px 0px 0px 0px'
  }

  const { push } = useHistory()

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  })

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

   const handlePasswordChange = (prop) => (event) => {
     setValues({ ...values, [prop]: event.target.value })
   }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align ='center'>
          <Avatar style={avatarStyle}><LockOutlined /></Avatar>

          <h2>Cadastre-se.</h2>
        </Grid>

        <Box sx={{ fontSize: 13, fontWeight: 'small' }}>* Campos Obrigatorios.</Box>

        <Grid style={InputStyle}>
          <TextField label='Nome.' placeholder='Nome...' type='text' variant="outlined" fullWidth={true} required />
        </Grid>

        <Grid style={InputStyle}>
          <TextField label='ID.' placeholder='Email...' type='email' variant="outlined" fullWidth={true} required />
        </Grid>

        <Grid style={InputStyle}>
          <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" fullWidth={true} required>
            <InputLabel htmlFor="camposenha">Acesso.</InputLabel>
            <OutlinedInput
              id="camposenha"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handlePasswordChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Acesso."
            />
          </FormControl>
        </Grid>

        <Grid style={InputStyle}>
          <TextField label='Repetir Acesso.' placeholder='A mesma Senha...' type='password' variant="outlined" fullWidth={true} required />
        </Grid>



        <Grid style={butttonStyle}>
          <Button style={butttonStyle} type='submit' color='Primary' fullWidth={true} variant='contained' onClick={ () => {} }>Enviar.</Button>
          <Button style={butttonStyle} type='text' color='default' fullWidth={true} variant="outlined" onClick={() => push('/')}>Voltar.</Button>
        </Grid>
      </Paper>
    </Grid>

  )
}
<TextField label='Acesso.' placeholder='Senha...' type='password' fullWidth={true} required />
