import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './HooksStyle.css'

export default function Hooks() {
    let [number,setNumber] = useState(0)
  return (
    <div>
       <Container className='contain'>
        <Row>
          <Col>
        <h1>{number}</h1>
        <button className='btn1' onClick={()=>setNumber(number + 1)}>Increase</button>
        <button className='btn2' onClick={()=>setNumber(number - 1)}>Decrement</button>
        <button className='btn3' onClick={()=>setNumber(0)}>Clear</button>
          </Col>
        </Row>
       </Container>
    </div>
  )
}
