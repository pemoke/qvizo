if (!Categories.find().count()) {

    Categories.insert({
        _id : "Art & Literature",
        path: null
    });

    Categories.insert({
        _id : "Shakespeare",
        path: ",Art & Literature,"
    });

    Categories.insert({
        _id : "Food & Drink",
        path: null
    });

    Categories.insert({
        _id : "Government",
        path: null
    });

    Categories.insert({
        _id : "Australia",
        path: ",Government,"
    });

    Categories.insert({
        _id : "Immigration",
        path: ",Government,Australia,"
    });

    Categories.insert({
        _id : "Citizenship",
        path: ",Government,Australia,Immigration,"
    });

    Categories.insert({
        _id : "State",
        path: ",Government,Australia,"
    });

    Categories.insert({
        _id : "Victoria",
        path: ",Government,Australia,State,"
    });

    Categories.insert({
        _id : "VicRoads",
        path: ",Government,Australia,State,Victoria,"
    });

}

if (!Quizzes.find().count()) {

    Quizzes.insert({
        name     : "Australian Citizenship Test I",
        path     : ",Government,Australia,Immigration,Citizenship,",
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

    Quizzes.insert({
        name     : "Australian Citizenship Test II",
        path     : ",Government,Australia,Immigration,Citizenship,",
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

    Quizzes.insert({
        name     : "VicRoads Test",
        path     : ",Government,Australia,State,Victoria,VicRoads,",
        questions: [
            {
                question     : "xxxxxx",
                choices      : [
                    "fdsafdsaf",
                    "gdfgre",
                    "dfrgrww"
                ],
                correctAnswer: 0
            },
        ]
    });

    Quizzes.insert({
        name     : "Food & Drink",
        path     : ",Food & Drink,",
        questions: [
            {
                question     : "food",
                choices      : [
                    "fdsafdsaf",
                    "gdfgre",
                    "dfrgrww"
                ],
                correctAnswer: 0
            }
        ]
    });

}
