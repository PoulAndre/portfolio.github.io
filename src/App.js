
import './App.css';
import Navigasjon from './components/nav/navigasjon.jsx';
import Container1 from './components/container/container1.jsx';
import Container2 from './components/container/container2.jsx';
import Container3 from './components/container/container3.jsx';

function App() {
  return (
    <div className="">
      <Navigasjon />
      <div className="">

        <Container1 />
        <Container2 />
        <Container3 />

      </div>

      
    </div>
  );
}

export default App;
