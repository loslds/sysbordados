import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../../store/reducers/rootReducer'
import { SideBar } from '../../components/SideBar'
import { Usuarios } from '../../components/Usuarios'


const story = configureStore({
  reducer: rootReducer
})


export const PageAccess = () => {

 return (
    <Provider store= {story}>


     <SideBar />

     <Usuarios />

    </Provider>
  )
}


