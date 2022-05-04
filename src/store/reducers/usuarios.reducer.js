

const initialState = {

  usuarios: {
    active: null,
    list : [
      'Antonio',
      'Bruno',
      'Carlos',
      'Dorival',
      'Evandro'
    ]
  }

}

const usuariosReducer = ( state = initialState.usuarios, action) => {

  return state

}

export default usuariosReducer
