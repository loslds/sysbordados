import React from 'react'
import { useHistory } from 'react-router-dom'
import { OutlinedInput, InputLabel, InputAdornment, Avatar, Button, Checkbox, FormControl, FormControlLabel, Grid, Box, Paper, TextField } from '@material-ui/core'
import { LockOutlined, VisibilityOff, Visibility  } from '@material-ui/icons'
import IconButton from "@material-ui/core/IconButton"


export const PageLogin = () => {

  const paperStyle= {
    padding: 20,
    heigth: '100%vh',
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
          <h2>Identifique-se.</h2>
        </Grid>

        <Box sx={{ fontSize: 13, fontWeight: 'small' }}>* Campos Obrigatorios.</Box>

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
              label="Password."
            />
          </FormControl>
        </Grid>

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
