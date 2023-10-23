import React from 'react';
import { Navbar, Container, Image } from 'react-bootstrap';
import profileImage from '../Images/TD0045_SHubhamPanale.jpg'; // Import your profile image

const CustomNavbar = () => {
    const navbarStyle = {
        height: '50px',
        boxShadow: '0px 2px 2px #888',
        borderBottom: '1px solid #ccc',
        marginLeft: '-20px',
        marginTop: '-20px',
        marginRight: '-50px',
        paddingLeft: '50px',
        paddingTop: '10px',
        display: 'flex',
        alignItems: 'center',
        paddingBottom:'10px'
    };


    const profileImageStyle = {
        borderRadius: '50%', // Makes the image circular
        width: '40px',
        height: '40px',
    marginLeft:'900px'
    };

    const nameStyle = {
        marginLeft: '10px', 
        // Add some spacing between the image and name
    };

    const centerContentStyle = {
        display: 'flex',
        alignItems: 'center',
        flex: 1, 
        // This will make the content in the center take up the remaining space
    };

    return (
        <Navbar bg="light" data-bs-theme="light" style={navbarStyle}>
            <Container fluid>
                <div style={centerContentStyle}>
                    <Navbar.Brand><h2>Health Records</h2></Navbar.Brand>
                    <Image src={profileImage} alt="Profile" style={profileImageStyle} />
                    <span style={nameStyle}>Shubham</span>
                </div>
                
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;
