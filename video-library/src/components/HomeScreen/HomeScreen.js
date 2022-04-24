import React from 'react'
import { CategoriesBar } from '../CategoriesBar/CategoriesBar'
import { Video } from '../Video/Video'
import { Container, Col, Row} from "react-bootstrap";
// import InfiniteScroll from 'react-infinite-scroll-component';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const HomeScreen = () => {
  return (
    <div>
      <Container>
        <CategoriesBar/>
        <Row>
        {/* <InfiniteScroll
  dataLength={videos.length} 
  next={fetchData}
  hasMore={true}
  loader={<h4>Loading...</h4>}
  classname="row"> */}
        {[...new Array(20)].map((el)=>(
        <Col lg={3} md={4}>
        {/* <LazyLoadImage
      alt={image.alt}
      height={image.height}
      src={image.src} // use normal <img> attributes as props
      width={image.width} /> */}
          <Video/>
          </Col>
        ))}
        {/* </InfiniteScroll> */}
        </Row>
      </Container>
    </div>
  )
}
