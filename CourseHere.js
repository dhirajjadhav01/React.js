import React from 'react'
import {Link} from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './First.css';


function CourseHere() {
  return (
 <>
  <Link to='/off' className="custom-nav-link">Click Here for - Offers🎉</Link>
  {/* <p>All You Need is Waiting Here</p> */}
  <Container className="mt-1 p-5">
        <Row className="g-4 justify-content-center" >
          <Col md={4} sm={6}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/474x/17/cd/99/17cd99e8c09b921e049d5d27756feac2.jpg" />
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                Biggest Offer on Web Dev Course
                FLat 33% of on price amount - 53,000/-
                </Card.Text>
                <Button variant="primary">Check the offer</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/736x/f4/ab/64/f4ab640e9d98c82c2bdd323d65abfd92.jpg" />
              <Card.Body>
                <Card.Title>Digital Marketing</Card.Title>
                <Card.Text>
                Biggest Offer on Digital Course
                FLat 23% of on price amount - 68,000/-
                </Card.Text>
                <Button variant="primary">Check the offer</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} sm={6}>
            <Card style={{ width: '100%' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/474x/73/70/13/73701347bf6585e2f7076b69e29afa8f.jpg" />
              <Card.Body>
                <Card.Title>Ui Ux Designer</Card.Title>
                <Card.Text>
                Biggest Offer on Ui Ux Designer Course
                FLat 40% of on price amount - 73,000/-
                </Card.Text>
                <Button variant="primary">Check the offer</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <img 
            src="https://i.pinimg.com/736x/a9/a5/ed/a9a5edbc392fbbf42ecda45160b40f3b.jpg" 
            alt="Learning Banner"
            style={{ width: '80%', borderRadius: '12px', height:'400px'}}
          />
        </div>
      </Container>
 
 </>
  )
}

export default CourseHere
