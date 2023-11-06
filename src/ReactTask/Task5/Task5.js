import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Col, Container, Row } from 'react-bootstrap';
import './Task5Style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faExclamation } from '@fortawesome/free-solid-svg-icons';

export default function Task5() {
  return (
    <div className='Msg'>
        <Container>
            <Row>
                <Col md={12} sm={12} lg={12}>
                    <h1>Notification</h1>
                </Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <Col md={12} sm={12} lg={12}>
                <button type="button" class="btn btn-primary btn-lg text-start" id='b1'><FontAwesomeIcon icon={faCircleCheck} style={{color: "#fafcff",}} />   Information Message</button><br></br>
                <button type="button" class="btn btn-success btn-lg text-start" id='b2'><FontAwesomeIcon icon={faCircleCheck} style={{color: "#fafcff",}} />   Success Message</button><br></br>
                <button type="button" class="btn btn-warning btn-lg text-start" id='b3'><FontAwesomeIcon icon={faBell} style={{color: "#f4f6fb",}} />   Warning Message</button><br></br>
                <button type="button" class="btn btn-danger btn-lg text-start" id='b4'><FontAwesomeIcon icon={faExclamation} style={{color: "#ffffff",}} />    Warning Message</button>

                </Col>
            </Row>
        </Container>
    </div>
  )
}
