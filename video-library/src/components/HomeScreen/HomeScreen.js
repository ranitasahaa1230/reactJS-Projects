import React from 'react'
import { CategoriesBar } from '../CategoriesBar/CategoriesBar'
import { Video } from '../Video/Video'
import { Container, Col, Row} from "react-bootstrap";

export const HomeScreen = () => {
  return (
    <div>
      <Container>
        <CategoriesBar/>
        <Row>
        {[...new Array(20)].map((el)=>(
        <Col lg={3} md={4}>
          <Video/>
          </Col>
        ))}
        </Row>
      </Container>
    </div>
  )
}
