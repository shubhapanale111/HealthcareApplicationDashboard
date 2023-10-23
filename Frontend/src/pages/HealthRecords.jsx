import React from 'react';
import '../components/sidebar.css'; // Assuming you have some custom styles in this file
import { Container, Card, Col, Row,Nav} from 'react-bootstrap';
import CustomNavbar from '../components/Navbar';

const HealthRecords = () => {
    return (
    <div className="health">
<div>
    <br />
    <CustomNavbar/>
    <div className="sort">
    <div class="group22">
                                    <svg class="icons2" aria-hidden="true" viewBox="0 0 24 24">
                                        <g>
                                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                        </g>
                                    </svg>
                                    <input placeholder="Search" type="search" class="input2" />
                                </div>
    </div>
        <div className='containerr' style={{ marginTop: '10px' }}> {/* Added margin-top to push content below the fixed Navbar */}
            <div className='verticalcard'>
                <Row>
                    <Col md={3}>
                        <Card style={{ border: '1px solid #ccc', boxShadow: '2px 2px 5px #888', height: '100%',padding:'10px',margin:'10px' }}>
                            <Card.Body>
                                <br />
                                <div class="group">
                                    <svg class="icons" aria-hidden="true" viewBox="0 0 24 24">
                                        <g>
                                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                        </g>
                                    </svg>
                                    <input placeholder="Search" type="search" class="input" />
                                </div><br />
                                <h3 style={{ textAlign: 'center', backgroundColor: 'lightgray', padding: '10px', borderRadius: '5px' ,margin:'10px'}}>Shubham</h3>
                    <h3 style={{ textAlign: 'center', backgroundColor: 'blue', padding: '10px', borderRadius: '5px',margin:'10px',color:'white' }}>Shubham</h3>
                    
                    <h3 style={{ textAlign: 'center', backgroundColor: 'lightgray', padding: '10px', borderRadius: '5px',margin:'10px' }}>Shubham</h3>
                    <h3 style={{ textAlign: 'center', backgroundColor: 'lightgray', padding: '10px', borderRadius: '5px',margin:'10px' }}>Shubham</h3>
                    <h3 style={{ textAlign: 'center', backgroundColor: 'lightgray', padding: '10px', borderRadius: '5px' ,margin:'10px'}}>Shubham</h3>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div className='horizontalcard'>
                <Container fluid>
                    <Row >
                        <Col md={7}>
                            <Row>
                                <Col >
                                    <Card style={{ border: '1px solid #ccc', boxShadow: '2px 2px 5px #888', height: '100%',padding:'20px',margin:'10px' }}>
                                        <Card.Body>
                                            <br />
                                            <h3>Have Stomach Pain</h3>
                                            <br />
                                            <p><b>Updated By:</b> Matthew Parker</p>
                                            <br />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do euismod liqa dsgg</p>
                                            <br />
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col >
                                    <Card style={{ border: '1px solid #ccc', boxShadow: '2px 2px 5px #888', height: '100%',padding:'20px',margin:'10px' }}>
                                        <Card.Body>
                                            <br />
                                            <h3>Have Stomach Pain</h3>
                                            <br />
                                            <p><b>Updated By:</b> Matthew Parker</p>
                                            <br />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do euismod liqa dsgg</p>
                                            <br />
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card style={{ border: '1px solid #ccc', boxShadow: '2px 2px 5px #888', height: '100%',padding:'20px',margin:'10px' }}>
                                        <Card.Body>
                                            <br />
                                            <h3>Have Stomach Pain</h3>
                                            <br />
                                            <p><b>Updated By:</b> Matthew Parker</p>
                                            <br />
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do euismod liqa dsgg</p>
                                            <br />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div></div></div>
    );
};

export default HealthRecords;
