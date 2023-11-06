import React, { useState } from 'react'
import './FruitStyle.css'
import { Col, Container, Row } from 'react-bootstrap'

export default function FruitCounter() {
    let [count,setCount] = useState(0)
    let [counter,setCounter] = useState(0)
  return (
    <div>
        <Container className='cont'>
            <Row>
                <Col md={6} sm={6} lg={12}>
                <h1>Bob ate {count}Mangoes and {counter}Bananas</h1>
                <img src='https://files.oyebesmartest.com/uploads/preview/-501562050655gifucybavw.png' alt='Mango'/>
                <img src='https://www.pngkey.com/png/detail/9-90625_banana-png-vector-image-banana-png.png' alt='banana'/><br/>
                <button className='btn1' onClick={()=>setCount(count + 1)}>Eat Mango</button>
                <button className='btn2' onClick={()=>setCounter(counter + 1)}>Eat Banana</button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
