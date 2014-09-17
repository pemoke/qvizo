if ( !Categories.find().count() ) {

    Categories.insert({
        _id: "Qvizo",
        children: [
            "Art & Literature",
            "Food & Drink",
            "Government"
        ]
    })

    Categories.insert({
        _id: "Government",
        children: [
            "Australia"
        ]
    });

    Categories.insert({
        _id: "Australia",
        children: [
            "Immigration",
            "State"
        ]
    });

    Categories.insert({
        _id: "Immigration",
        children: [
            "Citizenship"
        ]
    });

    Categories.insert({
        _id: "State",
        children: [
            "Victoria"
        ]
    });

    Categories.insert({
        _id: "Victoria",
        children: [
            "VicRoads"
        ]
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
