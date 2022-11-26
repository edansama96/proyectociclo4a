import React from 'react';
import axios from 'axios';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import './login.css';
import app from '../app.json';


const {APIHOST}= app;
export default class login extends React.Component {
    constructor(props) {
        // cambiar el nombre de las variables
        // Verificar la captura de la información
        super(props);
        this.state = {
            usuario: '',
            pass: '',
        }

    }
    iniciarSesion () {    //funcion inicio sesión
        //alert(`usuario: ${this.state.usuario} - password: ${this.state.pass}`);
        axios.post(`${APIHOST}/usuarios/login`,{
            usuario: this.state.usuario,  
            pass: this.state.pass,
        }
        )
        .then((response) => {
            console.log(response);
        })
        .catch((err) => {      
         console.log(err);
        });          
    }
    render() {
        return (
            <Container id="login-container" >
                <Row>
                    <Col>

                        <Row>
                            <h2  >Login</h2>
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
                                        <Form.Label >Correo :</Form.Label>
                                        <Form.Control type="String" onChange={(e)=>
                                        this.setState({ usuario:e.target.value })
                                        }
                                        />
                                       


                                    </Form.Group>

                                    <Form.Group >
                                        <Form.Label >Clave :</Form.Label>
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

