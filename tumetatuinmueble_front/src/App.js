// import logo from './logo.svg';
 import './App.css';
// import './components/index/index.css';
import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//  import Registro_vendedor  from './components/registro_vendedor/registro_vendedor';
// import Login from './components/login/login';
 import Menu from './components/navbar/navbar';
// import { Container} from 'react-bootstrap';
// import AppRouter from './components/router/router';
//  import Inicio from './components/index/index'
import AppRouter from './components/router/router';




function App() {
  return (
    <div className="App">
          <Menu/>  
       <AppRouter/> 
    </div>
  );
}

export default App;
