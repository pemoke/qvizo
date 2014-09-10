if (Quizzes.find().count() === 0) {
    Quizzes.insert({
        _id : "Music",
        path: null
    });
    Quizzes.insert({
        _id : "Government",
        path: null
    });
    Quizzes.insert({
        _id : "Australia",
        path: [",Government,"]
    });
    Quizzes.insert({
        _id : "Immigration",
        path: [",Government,Australia,"]
    });
    Quizzes.insert({
        _id      : "Citizenship",
        path     : [",Government,Australia,Immigration,"],
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
