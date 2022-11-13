import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './login.css'

export default class login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            correo: '',
            pass: '',
        }

    }

    iniciarSesion(){
        alert(`correo: ${this.state.correo} - password: ${this.state.pass}`);

    }
    render() {
        return (
            <Container id="login-container" >
                <Row>
                    <Col>

                        <Row>
                            <h2 >Login</h2>
                        </Row>
                        <Row>
                            <Col
                            sm="12"
                            xs="12"
                            md={{span:4,offset:4}}
                            lg={{span:4,offset:4}}
                            xl={{span:4,offset:4}}>
                                <Form>
                                    <Form.Group >
                                        <Form.Label >Correo</Form.Label>
                                        <Form.Control type="email" onChange={(e)=>
                                        this.setState({ correo:e.target.value })
                                        }
                                        />
                                        


                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label >Clave</Form.Label>
                                        <Form.Control type="password" 
                                        onChange={(e)=>
                                        this.setState({pass: e.target.value})
                                        }
                                        />
                                        
                                    </Form.Group>

                                    <Button
                                        variant="success"
                                        type="submit"
                                        
                                        onClick={()=>{
                                            this.iniciarSesion();
                                        }}>
                                        Ingresar
                                    </Button>

                                    {/* <Col id="col"> <h4>Olvido contraseña</h4></Col> */}
                                </Form>
                            </Col>
                            
                        </Row>
                    </Col>
                </Row>

            </Container>
        );
    }
}

