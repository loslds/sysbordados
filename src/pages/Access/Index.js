import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../../store/store'
import SideBar from '../../components/SideBar'
import Usuarios from '../../components/Usuarios'


export const PageAccess = () => {

 return (
    <Provider store= {store}>
     <SideBar />
     <Usuarios />
    </Provider>
  )
}


