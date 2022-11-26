import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import './registro_comprador.css'

export default class reg_comprador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        nombres_comprador: '',
        apellidos_comprador: '',
        telefono_comprador: '',
        email_comprador: '',
        vrf_email_comprador: '',
        contraseña_comprador: '',
        vrf_contraseña_comprador: ''
    };
  }
  registroComprador(){
    // alert(`Nombres: ${this.state.nombres_comprador} `);
    alert(`Boton del registro del comprador `);
  }

  render() {
    return (
      <Container id="regcomprador-container" >
        <Row>
          <Col>
            <Row>
                <h2>Registro Comprador</h2>
            </Row>
            <Row>
                <Col sm="12"
                     xs="12"
                     md={{ span: 4, offset: 4}}
                     lg={{ span: 4, offset: 4}}
                     xl={{ span: 4, offset: 4}}>
              <Form>
                {/* Nombres */}
                <Form.Group>
                  <Form.Label className="Form-Label" >Nombres :</Form.Label>
                  <Form.Control 
                    onChange={(e)=>
                    this.setState({nombres_comprador: e.target.value})}/>
                    
                </Form.Group>
                {/* Apellidos */}
                <Form.Group>
                  <Form.Label className="Form-Label" >Apellidos :</Form.Label>
                  <Form.Control onChange={(e)=>
                    this.setState({apellidos_comprador: e.target.value})} />
                    
                </Form.Group>
                {/* Teléfono */}
                <Form.Group>
                  <Form.Label className="Form-Label" >Teléfono :</Form.Label>
                  <Form.Control onChange={(e)=>
                    this.setState({telefono_comprador: e.target.value})} />
                   
                </Form.Group>
                {/* Correo */}
                <Form.Group>
                  <Form.Label className="Form-Label">Email :</Form.Label>
                  <Form.Control type="email" onChange={(e)=>
                    this.setState({email_comprador: e.target.value})} />
                   
                </Form.Group>
                {/* Verificacion correo */}
                <Form.Group>
                  <Form.Label className="Form-Label">
                    Verificar Email :
                  </Form.Label>
                  <Form.Control type="email" onChange={(e)=>
                    this.setState({vrf_email_comprador: e.target.value})} />
                    
                </Form.Group>
                {/* Contraseña */}
                <Form.Group>
                  <Form.Label className="Form-Label">Contraseña :</Form.Label>
                  <Form.Control type="password" onChange={(e)=>
                    this.setState({contraseña_comprador: e.target.value})} />
                    
                </Form.Group>
                {/* Verificacion contraseña */}
                <Form.Group>
                  <Form.Label className="Form-Label">
                    Verificar Contraseña :
                  </Form.Label>
                  <Form.Control type="password" onChange={(e)=>
                    this.setState({vrf_contraseña_comprador: e.target.value})} />
                    
                </Form.Group>
                {/* Checkbox */}
                <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                  <Form.Check
                    
                    type="checkbox"
                    label="Acepto los terminos y condiciones"
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  
                  onClick={() => {
                    this.registroComprador();
                  }}
                >
                  Registrarse
                </Button>
              </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
