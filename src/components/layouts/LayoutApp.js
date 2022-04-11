import React from 'react'
import PropTypes from 'prop-types'
import { ContainerApp, ContainerAppFlex } from '../../styles/styles'

export const LayoutApp = ({ children }) => {
  return (
    <ContainerApp>
      <ContainerAppFlex>
       {children}
      </ContainerAppFlex>
    </ContainerApp>
  )
}
LayoutApp.propTypes = {
  children: PropTypes.any
}

