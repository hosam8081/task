import React from 'react'
import {Col} from 'react-bootstrap'
const Movie = ({backdrop_path, title}) => {
  return (    
      <Col className="mt-2" xs={12} sm={2} md={4}>
        <img src={'https://image.tmdb.org/t/p/w500/' + backdrop_path} className="img-fluid" alt={title}/>
      </Col>
  )
}

export default Movie