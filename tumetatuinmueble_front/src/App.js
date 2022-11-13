import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro_vendedor  from './components/registro_vendedor/registro_vendedor';
import { Container} from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Container>
       <Registro_vendedor/>
    </Container>
    </div>
  );
}

export default App;
