import React, { Component } from 'react'
import Quiz from "../img/quiz.svg";
import "./Welcome.css"
import { useContext } from 'react';
import { QuizContext } from '../context/quiz';


const Welcome = () => { 
  const [quizState, dispath] = useContext(QuizContext)
  
    
    return (
      <div id='Welcome'>
        <h2>Bem vindo</h2>
        <p>Clique no botao para iniciar</p>
      <button onClick={()=> dispath({type: "CHANGE_STATE"})}>Iniciar</button>
        <img src={Quiz} alt="Logo inico" />
      </div>
    )
  }

export default Welcome