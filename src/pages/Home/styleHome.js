import styled from 'styled-components'
import semimg from '../../assets/image/semimg.svg'

export const ContainerSys = styled.div`
  border: 0px; /*1px green dashed;*/
  padding: 2px auto;
  margin: 4px auto;
  width: 94%;
  display: flex;
  background-color: transparent;
`

export const ContainerImgSys = styled.div`
  border: 0px; //*2px #7f7fbb solid;*/
  margin: 4px auto;
  padding: 4px auto;
  height: 100px;
  width: 300px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${({ img }) => img || semimg});
`
