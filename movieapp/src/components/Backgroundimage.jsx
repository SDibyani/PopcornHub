
import React from 'react'
import styled from "styled-components"

function Backgroundimage() {
  return (
    <Container>
        <img src="https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225-xl.jpg" alt="" />
    </Container>
  )
}

const Container = styled.div`
  height:100vh;
  width:100wh;
  img{
    height:100vh;
    width:100vw;
  }
    `

export default Backgroundimage