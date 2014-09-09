if (Quizzes.find().count() === 0) {
    Quizzes.insert({
        _id      : "Government",
        ancestors: [ ],
        parent   : null
    });
    Quizzes.insert({
        _id      : "Australia",
        ancestors: [ "Government" ],
        parent   : [ "Government" ]
    });
    Quizzes.insert({
        _id      : "Immigration",
        ancestors: [ "Government", "Australia" ],
        parent   : [ "Australia" ]
    });
    Quizzes.insert({
        _id      : "Citizenship",
        ancestors: [ "Government", "Australia", "Immigration" ],
        parent   : [ "Citizenship" ],
        questions: [
            {
                question     : "What do we remember on Anzac Day?",
                choices      : [
                    "The landing of the Australian and New Zealand Army Corps at Gallipoli, Turkey",
                    "The arrival of the first free settlers from Great Britain",
                    "The landing of the First Fleet at Sydney Cove"
                ],
                correctAnswer: 0
            },
            {
                question     : "What are the colours of the Australian Aboriginal Flag?",
                choices      : [
                    "Black, red and yellow",
                    "Green, white and black",
                    "Blue, white and green"
                ],
                correctAnswer: 0
            },
            {
                question     : "Which official symbol of Australia identifies Commonwealth property?",
                choices      : [
                    "The national anthem",
                    "Australia's national flower",
                    "Commonwealth Coat of Arms"
                ],
                correctAnswer: 2
            }
        ]
    });
}

//if (Quizzes.find().count() === 0) {
//    Quizzes.insert({
//        "question": "What do we remember on Anzac Day?",
//        "choices": [
//            "The landing of the Australian and New Zealand Army Corps at Gallipoli, Turkey",
//            "The arrival of the first free settlers from Great Britain",
//            "The landing of the First Fleet at Sydney Cove",
//        ],
//        "correctAnswer": "0"
//    });
//    Quizzes.insert({
//        "question": "What are the colours of the Australian Aboriginal Flag?",
//        "choices": [
//            "Black, red and yellow",
//            "Green, white and black",
//            "Blue, white and green"
//        ],
//        "correctAnswer": "0"
//    });
//    Quizzes.insert({
//        "question": "Which official symbol of Australia identifies Commonwealth property?",
//        "choices": [
//            "The national anthem",
//            "Australia's national flower",
//            "Commonwealth Coat of Arms"
//        ],
//        "correctAnswer": "2"
//    });
//}