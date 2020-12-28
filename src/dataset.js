const defaultDataset = {
    'init':{
        'answers':[
            {content:"開校時間が知りたい", nextId: "businessHours"},
            {content:"東進学力POSを開きたい", nextId:"https://www.toshin.com/pos/"},
            {content:"直近の模試を知りたい(ご申し込み)", nextId: "https://www.toshin.com/exams/"},
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
            {content:'ご申し込みする（お問い合わせ）', nextId:"contact"},
            {content:'最初の画面に戻る', nextId:"init"}
        ],
        question:"別タブにてホームページへご案内いたします。ご申し込みの場合はお問い合わせお願いいたします。"
    },
    "other":{
        answers:[
            {content:"校舎公式HPを見たい", nextID:'サイトのURL'},
            {content:"お問い合わせしたい", nextId:"contact"}
        ],
        question:"ご希望する方を選択してください"
    }

}

export default defaultDataset