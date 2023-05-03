

import Welcome from './components/welcome';
import Question from './components/question'
import { QuizContext } from './context/Quiz';
import './App.css';
import { useContext } from 'react';




function App() {
  const [quizState, dispath] = useContext(QuizContext)

  return (
    <div className="App">
      <h1>Quiz sobre Programacão</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
    </div>
  )
}

export default App
