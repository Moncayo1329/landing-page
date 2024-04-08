import './App.css';
import About from './About'; 
import Buttons from './Buttons';
import Imagen from './WEB.png';

function App() {
  return (
    <div>
      <div className='img'>
        <img src={Imagen} alt="Descripción de la imagen" width="200" height="200" />
      </div>
      <div className="App">
        <About /> 
        <Buttons />
      </div>
    </div>
  );
}

export default App;
