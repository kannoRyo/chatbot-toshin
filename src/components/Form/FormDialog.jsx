import React,{useState} from 'react';
import {makeStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    subjectsArray,
    examinations,
    grades,
} from './ExamFormPart'

import TextInput from './TextInput'
import CheckForm from './CheckForm'
import Menu from './Menu'

const useStyle = makeStyles({
    displayNone:{
        display:'none'
    }
})

const FormDialog = ({open,isExam,handleClickClose})=> {  
    const url = "https://hooks.slack.com/services/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" //Slack URL
    const classes = useStyle()
    
    const [name,setName] = useState('')
    const [grade,setGrade] = useState('')
    const [phone,setPhone] = useState('')
    const [description,setDescription] = useState()
    const [menuGradeOpen, setMenuGradeOpen] = useState(false);
    const [menuExamOpen, setMenuExamOpen] = useState(false);
    const [examination, setExamination] = useState('')
    
    const [checked,setChecked] = useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
        checkedG: false,
        checkedH: false
    })
    
    let examForm = ''
    let nomalForm = ''
    
    if(isExam){
        nomalForm = classes.displayNone
    }else{
        examForm = classes.displayNone
    }
    
    const getSubjects = ()=>{
        const checkedArray = Object.entries(checked)
        checkedArray.forEach((check,i)=>{
            check.push(subjectsArray[i])
        })
        const filteredCheckedArray = checkedArray.filter(check =>{
            return check[1] === true
        })
        return filteredCheckedArray.map((check)=>{
            return check[2]
        })
    }

    const handleExamMenuToogle= ()=>{
        setMenuExamOpen(!menuExamOpen)
    }

    const handleExamMenuChange = (e)=>{
        setExamination(e.target.value)
        console.log(examination)
    }

    const handleGradeMenuToogle= ()=>{
        setMenuGradeOpen(!menuGradeOpen)
    }

    const handleGradeMenuChange = (e)=>{
        setGrade(e.target.value)
        console.log(grade)
    }
    
    const handleCheckForm = (e)=>{
        console.log(checked)
        setChecked({
            ...checked,
            [e.target.name] : e.target.checked,
        })
    }

    const submitForm = ()=>{
        const subjects = getSubjects()
        const nomalText={
            text: `お問い合わせがありました\n\n`+
                `お名前: ${name}\n`+
                `学年: ${grade}`+
                `電話番号: ${phone}\n`+
                `お問い合わせ内容: ${description}\n`
        }       
        const examText={
            text: `模試のお問い合わせがありました\n\n`+
                `お名前: ${name}\n`+
                `学年: ${grade}`+
                `模試名: ${examination}\n`+
                `受験科目: ${subjects}\n` +
                `伝えておきたいこと : ${description} `
        }       
        
        const payload = (isExam) ? examText : nomalText

        fetch(url,{
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(()=>{
            alert('送信が完了しました。おってご連絡させていただきます')

            setName('')
            setGrade('')
            setPhone('')
            setDescription('')
            setChecked('')
            return handleClickClose()
        })
    }
  return (
    <>
        <Dialog
            open={open}
            onClose={handleClickClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
      {
          (isExam)?(
            <div className={(examForm)? examForm : ''}>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <TextInput 
                        label={"お名前"} multiline={false} rows={1}
                        value={name} onChange={(e)=>setName(e.target.value)}
                        style={{marginBottom:'10px'}}
                    />
                    <Menu
                        menuOpen={menuGradeOpen}
                        handleMenuToogle={handleGradeMenuToogle}
                        value={grade}
                        handleMenuChange={handleGradeMenuChange}
                        style={{width: '100%',margin:'20px 0'}}
                        label="学年"
                        menus={grades}
                    />
                    <Menu
                        menuOpen={menuExamOpen}
                        handleMenuToogle={handleExamMenuToogle}　
                        value={examination}
                        handleMenuChange={handleExamMenuChange}
                        style={{width: '100%',margin:'20px 0'}}
                        label="模試名"　
                        menus={examinations}
                        />
                    <p　style={{fontWeight:'bold'}}>受験科目</p>
                    <CheckForm 
                        checked={checked}
                        handleCheckForm={handleCheckForm}
                    />
                    <p　style={{margin:'10px 0 0',fontWeight:'bold'}}>＊理科、社会を受験する方は以下の項目に科目を入力してください</p>
                    <TextInput 
                        label=' ■伝えておきたいこと'
                        multiline={true} rows={5}
                        value={description} onChange={(e)=>setDescription(e.target.value)}      
                        style={{marginTop:'0'}}
                    />
                </DialogContentText>
                </DialogContent>
            </div>
          ):(
              <div className={(nomalForm)? nomalForm : ''}>
                <DialogContent>
                    <TextInput 
                        label={"お名前"} multiline={false} rows={1}
                        value={name} onChange={(e)=>setName(e.target.value)}
                    />
                <DialogContentText id="alert-dialog-description">
                    <TextInput 
                        label={"ご連絡がつくお電話番号"} multiline={false} rows={1}
                        value={phone} onChange={(e)=>setPhone(e.target.value)}                
                    />
                    <TextInput 
                        label={"お問い合わせ内容"} multiline={true} rows={5}
                        value={description} onChange={(e)=>setDescription(e.target.value)}                
                    />
                </DialogContentText>
                </DialogContent>
             </div>
        )
        }
    <DialogActions>
        <Button onClick={handleClickClose} color="primary">
        キャンセル
        </Button>
        <Button onClick={submitForm} color="primary">
        送信
        </Button>
    </DialogActions>
      </Dialog>
    </>
  );
}

export default  FormDialog