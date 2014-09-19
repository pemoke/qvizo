if ( !Categories.find().count() ) {

    //Categories.insert({
    //    _id: "Qvizo",
    //    ancestors: [ ],
    //    parent: null
    //});

    Categories.insert({
        _id: "Art & Literature",
        ancestors: [ ],
        parent: null
    });

    Categories.insert({
        _id: "Food & Drink",
        ancestors: [ ],
        parent: null
    });

    Categories.insert({
        _id: "Government",
        ancestors: [ ],
        parent: null
    });

    Categories.insert({
        _id: "Australia",
        ancestors: [ "Government" ],
        parent: "Government"
    });

    Categories.insert({
        _id: "Immigration",
        ancestors: [ "Government", "Australia" ],
        parent: "Australia"
    });

    Categories.insert({
        _id: "Citizenship",
        ancestors: [ "Government", "Australia", "Immigration" ],
        parent: "Immigration"
    });

    Categories.insert({
        _id: "State",
        ancestors: [ "Government", "Australia" ],
        parent: "Australia"
    });

    Categories.insert({
        _id: "Victoria",
        ancestors: [ "Government", "Australia", "State" ],
        parent: "State"
    });

    Categories.insert({
        _id: "VicRoads",
        ancestors: [ "Government", "Australia", "State", "Victoria" ],
        parent: "Victoria"
    });

}

if ( !Quizzes.find().count() ) {

    Quizzes.insert({
        _id      : "Citizenship",
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
