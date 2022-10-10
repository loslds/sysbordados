import React from 'react'

import { ContainerApp, ContainerAppFlex } from '../../styles/styles'
import PropTypes from 'prop-types'
export default function LayoutApp({children}) {
  return (
    <div>
      <ContainerApp>
        <ContainerAppFlex>
          {children}
        </ContainerAppFlex>
      </ContainerApp>
    </div>
  )
}

LayoutApp.propTypes = {
  children: PropTypes.any,
}




// import React from 'react'
// import PropTypes from 'prop-types'
// import { ContainerApp, ContainerAppFlex } from '../../styles/styles'

// export const LayoutApp = ({ children }) => {
//   return (
//     <ContainerApp>
//       <ContainerAppFlex>
//        {children}
//       </ContainerAppFlex>
//     </ContainerApp>
//   )
// }
// LayoutApp.propTypes = {
//   children: PropTypes.any
// }

