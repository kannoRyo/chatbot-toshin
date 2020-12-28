import React,{useState,useEffect,useCallback} from 'react'
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

  const addChat = useCallback((chat)=>{
    setChats(prevChats=>{
      return [...prevChats, chat]
    })
  },[])
  
  const  initChats = ()=>{
    const initQuestion = {
      text: dataset[currentId].question ,
      type: 'question'
    }
    addChat(initQuestion)
  }

  useEffect(()=>{
    initChats()
    initAnswer()
  },[])

  const nextDisplayQuestion = (nextId)=>{
    addChat({
      text: dataset[nextId].question,
      type:'question'
    })
    setcurrentId(nextId)
    setAnswers(dataset[nextId].answers)
  }

  const selectAnswer = (selectedAnswer, nextId)=>{
    addChat({
      text: selectedAnswer,
      type:'answer'
    })

    nextDisplayQuestion(nextId)
  }

  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={chats}/>
        <Answers answers={answers} selectAnswer={selectAnswer}/>
      </div>
    </section>
  );
}

export default App;
