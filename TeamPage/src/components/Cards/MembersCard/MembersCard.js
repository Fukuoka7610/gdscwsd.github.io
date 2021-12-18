import './MembersCard.css'

import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from '../placeholder-300×225.jpeg'
import { Link } from 'react-router-dom'
import React from 'react'
import Row from 'react-bootstrap/Row'

export const MembersCard = () => {
    return (
        <div>
            <h1 className='title'>Members</h1>
            <h2 className='sub-title'>TeamName Lead</h2>
            <Container className='leader justify-content-center'>
                <Link to='members'>
                    <Card className='card-frame col-md-auto'>
                        <Card.Img id='card-img' variant="top" src={ Image } />
                        <Card.Body>
                            <Card.Title id='title'>FirstName LastName</Card.Title>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </Container>

            <Container className='members justify-content-center'> {/* 'MembersCard'16枚分を1つのオブジェクトとしてグループ化 */}
                <Row xs={1} md={4} className="g-4">{
                    Array.from({ length: 16 }).map((_, idx) => (
                        <Col>
                            <Link to='members'>
                                <Card className='card-frame'>
                                    <Card.Img id='card-img' variant="top" src={ Image } />
                                    <Card.Body>
                                    <Card.Title id='title'>FirstName LastName</Card.Title>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default MembersCard