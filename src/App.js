import logo from './logo.svg';
import './App.css';
import { Main } from './Components/Main';
import { Layout } from './Components/Layout';




function App() {
  return (
    <div className="App h-screen flex flex-col justify-center bg-gradient-to-r from-cyan-950 to-teal-700 text-white">
      <Layout />
      <Main/>

        
    </div>
  );
}

export default App;
