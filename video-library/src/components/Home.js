import React from 'react'
import { Container } from 'react-bootstrap'
import { HomeScreen } from './HomeScreen/HomeScreen'
import { Sidebar } from './Sidebar/Sidebar'

export const Home = ({sidebars,handleToggleSidebar}) => {
  return (
    <div className="app__container">
        <Sidebar sidebars={sidebars} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app__main">
          <HomeScreen />
        </Container>
      </div>
  )
}
