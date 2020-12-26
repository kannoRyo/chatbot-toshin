import React,{useState,useEffect} from 'react'
import './assets/styles/style.css'
import {Answers} from './components/index'
import defaultDataset from './dataset'


const App = ()=> {
  const [chats, setChats] = useState([])
  const [answers, setAnswers] = useState([])
  const [currentId, setcurrentId] = useState('init')
  const [dataset, setDetaset] = useState(defaultDataset)
  const [open, setOpen] = useState(false)

  useEffect(()=>{
      const initAnswer = dataset[currentId].answers
      console.log(initAnswer)
      setAnswers(initAnswer)
  },[])

  return (
    <section className="c-section">
      <div className="c-box">
        <Answers answers={answers}/>
      </div>
    </section>
  );
}

export default App;
