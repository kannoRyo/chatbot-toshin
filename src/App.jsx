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

  const addChat = useCallback((chat)=>{
    setChats(prevChats=>{
      return [...prevChats, chat]
    })
  },[])

  const initAnswer = ()=>{
    const initAnswer = dataset[currentId].answers
    setAnswers(initAnswer)
  }
  
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
  
  useEffect(()=>{
    const scroll = document.getElementById('scrollHeight')
    scroll.scrollTop = scroll.scrollHeight
  })

  const nextDisplayQuestion = (nextId)=>{
    addChat({
      text: dataset[nextId].question,
      type:'question'
    })
    setcurrentId(nextId)
    setAnswers(dataset[nextId].answers)
  }

  const selectAnswer = (selectedAnswer, nextId)=>{
    switch(true){
      case (selectedAnswer === 'init'):
        break;
      case (nextId === 'https://www.toshin.com/exams/'):
        nextDisplayQuestion('practiceExam')
        const a2 = document.createElement('a')
        a2.href =  nextId
        a2.target = '__blank'
        setTimeout(()=>{
          a2.click()
        },2000)
        break;
      case (/^https:*/.test(nextId)):
        const a = document.createElement('a')
        a.href =  nextId
        a.target = '__blank'
        a.click()
        nextDisplayQuestion('init')
        break;
      default:
        addChat({
          text: selectedAnswer,
          type:'answer'
        })
        
        setTimeout(()=>{
          nextDisplayQuestion(nextId)    
        },750)
    }
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
