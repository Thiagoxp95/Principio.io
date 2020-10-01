import React from 'react'
import logo from '../Images/principioLogo.png'
import '../Styles/Style.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Languages from '../Images/languages.png'


function Header() {
        return (


        <Container fluid className="menu">
            {/*----------------------------BEGIN OF ROW ONE-----------------------------------------------*/}
            <Row>
                <Col className="d-block d-sm-block">
                    <div className='logoDiv'>
                    <a href="/"> 
                        <img src={logo} alt="Logo" className="logo"></img>
                    </a>
                    </div>
                    
                </Col>

                <Col>

                {/* CREDENTIALS CONTAINER  */}
                <div className="d-none d-sm-none d-md-block">
                <div className="credentialsContainer">
                        <Button variant="outline-light" className="signupButton">Sign up</Button>{' '}
                        <Button variant="outline-light" className="signinButton" size="md">Sign in</Button>{' '}
                </div>
                </div>
                </Col>

            </Row>
            </Container>
           
        )
    
}

export default Header
