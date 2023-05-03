

import Welcome from './components/welcome';
import Question from './components/question'
import './App.css';
import { useContext } from 'react';


function App() {
  return (
    <div className="App">
      <h1>Quiz sobre Programacão</h1>
      <Welcome/>
    </div>
  )
}

export default App
