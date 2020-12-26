const defaultDataset = {
    'init':{
        'answers':[
            {content:"開校時間が知りたい", nextId: "businessHours"},
            {content:"東進学力POSを開きたい", nextId:"POSのURL"},
            {content:"直近の模試を知りたい", nextId: "practiceExam"},
            {content:"その他(お問い合わせなど)", nextId:"other"},
        ],
        'question': "こんにちは！東進衛生予備校麻生交差点前校です。該当するお問い合わせを選択肢からお選びください"
    }, 
    "businessHours":{
        answers:[
            {content:"本日の開校時間を知りたい", nextId:"displayBussinessHours"},
            {content:"お好きな開校時間を調べる", nextId:"displayBussinessHours"}
        ],
        question:'ご希望の日付をタップしてください'
    },
    "displayBussinessHours":{
        answers:[
            {content:"最初の画面に戻る",nextId:'init'}
        ],
        question:"開校時間は〇〇です"
    },
    "practiceExam":{
        answers:[
            {content:'1年', nextId:"displayPracticeExam"},
            {content:'2年', nextId:"displayPracticeExam"},
            {content:'3年', nextId:"displayPracticeExam"}
        ],
        question:"学年を教えてください"
    },
    "displayPracticeExam":{
        answers:[{content:"最初の画面に戻る",nextId: "init"}],
        question:"直近の模試は〇〇（■/✕）です"
    },
    "other":{
        answers:[
            {content:"公式サイトを見たい", nextID:'サイトのURL'},
            {content:"お問い合わせしたい", nextId:"Form表示"}
        ],
        questio:"ご希望する方を選択してください"
    }

}

export default defaultDataset