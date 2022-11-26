import React from 'react';
import IMG from '../../images/apartamento.jpg';
import IMG0 from '../../images/casa.jpg';
import IMG1 from '../../images/casa0.jpg';
import IMG2 from '../../images/finca.jpg';
import IMG3 from '../../images/casacam.jpg';
import IMG4 from '../../images/casaquin.jpg';

import '../../components/index/index.css'
import { Container } from 'react-bootstrap';


export default class inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <> 
               <Container className='Cuerpo'> 
                <h1 className="title">Inmuebles</h1>
                <div className="productos">
                    <div className="producto">
                        <a href="#">
                            <div className="producto__img">
                                <img src={IMG} alt="" />
                            </div>
                        </a>
                        <div className="producto__footer">
                            <h1> Title: </h1>
                            <p>Apartamento</p>
                            <h1> Ubicación: </h1>
                            <p>Fontibon</p>
                            <h1> Área: </h1>
                            <p>42 m² </p>
                            <h1> Costo: </h1>
                            <p className="price"> $ 165.000.000 </p>
                            <h1> Habitaciones: </h1>
                            <p>2</p>
                            <h1> Baños: </h1>
                            <p>2</p>
                            {/* <h1> Descripción: </h1>
                            <p  className="descrip">Residencial Portal de la 183,tendrás un área para disfrutar de 42M2, cuartopiso interiorsinascensor,con buena ventilación, sala comedor para disfrutar en familia,cocina integral, zona de lavandería , 3alcobas, 1baño, parqueadero comunal, El edificio cuenta con vigilancia 24 horas.o</p> */}
                           
                        </div>
                        <div className="buttom">
                            <button className="btn0" >
                            Contactar al vendedor 
                            </button>

                            <div >
                                <a href='#' className="btn"> Visualizar el inmueble </a>
                            </div>
                        </div>
                    </div>
                    <div className="producto">
                        <a href="#">
                            <div className="producto__img">
                                <img src={IMG0} alt="" />
                            </div>
                        </a>
                        <div className="producto__footer">
                            <h1> Title: </h1>
                            <p>Apartamento</p>
                            <h1> Ubicación: </h1>
                            <p>Medellin</p>
                            <h1> Área: </h1>
                            <p>415 m² </p>
                            <h1> Costo: </h1>
                            <p className="price"> $1.750.000.000 </p>
                            <h1> Habitaciones: </h1>
                            <p>4</p>
                            <h1> Baños: </h1>
                            <p>6</p>
                            {/* <h1> Descripción: </h1>
                            <p  className="descrip">Residencial Portal de la 183,tendrás un área para disfrutar de 42M2, cuartopiso interiorsinascensor,con buena ventilación, sala comedor para disfrutar en familia,cocina integral, zona de lavandería , 3alcobas, 1baño, parqueadero comunal, El edificio cuenta con vigilancia 24 horas.o</p> */}
                           
                        </div>
                        <div className="buttom">
                            <button className="btn0" >
                            Contactar al vendedor 
                            </button>

                            <div >
                                <a href='#' className="btn"> Visualizar el inmueble </a>
                            </div>
                        </div>
                    </div>
                    <div className="producto">
                        <a href="#">
                            <div className="producto__img">
                                <img src={IMG1} alt="" />
                            </div>
                        </a>
                        <div className="producto__footer">
                            <h1> Title: </h1>
                            <p>casa con lago</p>
                            <h1> Ubicación: </h1>
                            <p>Antioquia</p>
                            <h1> Área: </h1>
                            <p>7500 m²</p>
                            <h1> Costo: </h1>
                            <p className="price">  $ 6.000.000.000 </p>
                            <h1> Habitaciones: </h1>
                            <p>5</p>
                            <h1> Baños: </h1>
                            <p>7</p>
                            {/* <h1> Descripción: </h1>
                            <p  className="descrip">Residencial Portal de la 183,tendrás un área para disfrutar de 42M2, cuartopiso interiorsinascensor,con buena ventilación, sala comedor para disfrutar en familia,cocina integral, zona de lavandería , 3alcobas, 1baño, parqueadero comunal, El edificio cuenta con vigilancia 24 horas.o</p> */}
                           
                        </div>
                        <div className="buttom">
                            <button className="btn0" >
                            Contactar al vendedor 
                            </button>

                            <div >
                                <a href='#' className="btn"> Visualizar el inmueble </a>
                            </div>
                        </div>
                    </div>
                    <div className="producto">
                        <a href="#">
                            <div className="producto__img">
                                <img src={IMG2} alt="" />
                            </div>
                        </a>
                        <div className="producto__footer">
                            <h1> Title: </h1>
                            <p>casa con pisina</p>
                            <h1> Ubicación: </h1>
                            <p>Fontibon</p>
                            <h1> Área: </h1>
                            <p>926 m² </p>
                            <h1> Costo: </h1>
                            <p className="price"> $1.180.000.000 </p>
                            <h1> Habitaciones: </h1>
                            <p>4</p>
                            <h1> Baños: </h1>
                            <p>5</p>
                            {/* <h1> Descripción: </h1>
                            <p  className="descrip">Residencial Portal de la 183,tendrás un área para disfrutar de 42M2, cuartopiso interiorsinascensor,con buena ventilación, sala comedor para disfrutar en familia,cocina integral, zona de lavandería , 3alcobas, 1baño, parqueadero comunal, El edificio cuenta con vigilancia 24 horas.o</p> */}
                           
                        </div>
                        <div className="buttom">
                            <button className="btn0" >
                            Contactar al vendedor 
                            </button>

                            <div >
                                <a href='#' className="btn"> Visualizar el inmueble </a>
                            </div>
                        </div>
                    </div>
                    <div className="producto">
                        <a href="#">
                            <div className="producto__img">
                                <img src={IMG3} alt="" />
                            </div>
                        </a>
                        <div className="producto__footer">
                            <h1> Title: </h1>
                            <p>Casa Campestre</p>
                            <h1> Ubicación: </h1>
                            <p>Envigado</p>
                            <h1> Área: </h1>
                            <p>150 m² </p>
                            <h1> Costo: </h1>
                            <p className="price"> $ 595.000.000 </p>
                            <h1> Habitaciones: </h1>
                            <p>4</p>
                            <h1> Baños: </h1>
                            <p>3</p>
                            {/* <h1> Descripción: </h1>
                            <p  className="descrip">Residencial Portal de la 183,tendrás un área para disfrutar de 42M2, cuartopiso interiorsinascensor,con buena ventilación, sala comedor para disfrutar en familia,cocina integral, zona de lavandería , 3alcobas, 1baño, parqueadero comunal, El edificio cuenta con vigilancia 24 horas.o</p> */}
                           
                        </div>
                        <div className="buttom">
                            <button className="btn0" >
                            Contactar al vendedor 
                            </button>

                            <div >
                                <a href='#' className="btn"> Visualizar el inmueble </a>
                            </div>
                        </div>
                    </div>
                    <div className="producto">
                        <a href="#">
                            <div className="producto__img">
                                <img src={IMG4} alt="" />
                            </div>
                        </a>
                        <div className="producto__footer">
                            <h1> Title: </h1>
                            <p>Casa Campestre</p>
                            <h1> Ubicación: </h1>
                            <p>Cerritos, Pereira, Risaralda</p>
                            <h1> Área: </h1>
                            <p>1592 m² </p>
                            <h1> Costo: </h1>
                            <p className="price"> $ 1.595.000.000 </p>
                            <h1> Habitaciones: </h1>
                            <p>3</p>
                            <h1> Baños: </h1>
                            <p>3</p>
                            {/* <h1> Descripción: </h1>
                            <p  className="descrip">Residencial Portal de la 183,tendrás un área para disfrutar de 42M2, cuartopiso interiorsinascensor,con buena ventilación, sala comedor para disfrutar en familia,cocina integral, zona de lavandería , 3alcobas, 1baño, parqueadero comunal, El edificio cuenta con vigilancia 24 horas.o</p> */}
                           
                        </div>
                        <div className="buttom">
                            <button className="btn0" >
                            Contactar al vendedor 
                            </button>

                            <div >
                                <a href='#' className="btn"> Visualizar el inmueble </a>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
           </Container> 

            </>

        )
    }
}

