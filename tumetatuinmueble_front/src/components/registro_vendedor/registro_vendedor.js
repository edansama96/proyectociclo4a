import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import './registro_vendedor.css'

export default class reg_vendedor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombres_vendedor: '',
            apellidos_vendedor: '',
            empresa: '',
            telefono: '',
            email_vendedor: '',
            vrf_email_vendedor: '',
            contraseña_vendedor: '',
            vrf_contraseña_vendedor: '',    
        };
    }

    registroVendedor(){
        // alert(`Nombres: ${this.state.nombres_vendedor} `);
        alert(`Boton del registro del comprador `);
    }
    render() { 
        return ( 
            <Container id="regvendedor-container" >
            <Row>
              <Col>
                <Row>
                    <h2>Registro Vendedor</h2>
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
                        this.setState({nombres_vendedor: e.target.value})}/>
                        
                        
                    </Form.Group>
                    {/* Apellidos */}
                    <Form.Group>
                      <Form.Label className="Form-Label" >Apellidos :</Form.Label>
                      <Form.Control onChange={(e)=>
                        this.setState({apellidos_vendedor: e.target.value})} />
                        
                    </Form.Group>
                    {/* Empresa */}
                    <Form.Group>
                      <Form.Label className="Form-Label" >Empresa :</Form.Label>
                      <Form.Control onChange={(e)=>
                        this.setState({empresa: e.target.value})} />
                       
                    </Form.Group>
                    {/* Telefono */}
                    <Form.Group>
                      <Form.Label className="Form-Label" >Teléfono :</Form.Label>
                      <Form.Control onChange={(e)=>
                        this.setState({telefono: e.target.value})} />
                       
                    </Form.Group>
                    {/* Correo */}
                    <Form.Group>
                      <Form.Label className="Form-Label">Email :</Form.Label>
                      <Form.Control type="email" onChange={(e)=>
                        this.setState({email_vendedor: e.target.value})} />
                        
                    </Form.Group>
                    {/* Verificacion correo */}
                    <Form.Group>
                      <Form.Label className="Form-Label">
                        Verificar Email :
                      </Form.Label>
                      <Form.Control type="email" onChange={(e)=>
                        this.setState({vrf_email_vendedor: e.target.value})} />
                        
                    </Form.Group>
                    {/* Contraseña */}
                    <Form.Group>
                      <Form.Label className="Form-Label">Contraseña :</Form.Label>
                      <Form.Control type="password" onChange={(e)=>
                        this.setState({contraseña_vendedor: e.target.value})} />
                        
                    </Form.Group>
                    {/* Verificacion contraseña */}
                    <Form.Group>
                      <Form.Label className="Form-Label">
                        Verificar Contraseña :
                      </Form.Label>
                      <Form.Control type="password" onChange={(e)=>
                        this.setState({vrf_contraseña_vendedor: e.target.value})} />
                        
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
                        this.registroVendedor();
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
