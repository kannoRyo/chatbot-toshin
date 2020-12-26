import React,{useState,useEffect} from 'react'
import './assets/styles/style.css'
import {
  Answers,
  Chats,
} from './components/index'
import defaultDataset from './dataset'


const App = ()=> {
  const [chats, setChats] = useState([])
  const [answers, setAnswers] = useState([])
  const [currentId, setcurrentId] = useState('init')
  const [dataset, setDetaset] = useState(defaultDataset)
  const [open, setOpen] = useState(false)

  const initAnswer = ()=>{
    const initAnswer = dataset[currentId].answers
    setAnswers(initAnswer)
  }
  
  const  initChats = ()=>{
    const initQuestion = {
      text: dataset[currentId].question ,
      type: 'question'
    }
    const newChats  = chats.push(initQuestion)
    // setChats(newChats)
    // console.log(chats)
  }

  useEffect(()=>{
    initChats()
    initAnswer()
  },[])

  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={chats}/>
        <Answers answers={answers}/>
      </div>
    </section>
  );
}

export default App;
