import logo from './logo.svg';
//import './App.css';
import Login from './components/login';
import Signup from './components/signup';


import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <body>
        <p>Seccion Login</p>
        <Login />
        <p>Seccion Registro</p>
        <Signup />
      </body>
    </div>
  );
}

export default App;
