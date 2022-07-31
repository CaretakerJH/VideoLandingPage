const data = {

    /*strings to the location of the types of films */
    collectionType: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/type/<collection>',
    movieType: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/type/<movie>',
    seriesType: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/type/<series>',
    episodeType: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/type/<episode>',

     /*strings to the location of the genres of films */
    actionGenre:'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/genre?genres[]=%3Cgenre%3E&genres[]=action',
    adventureGenre: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/genre?genres[]=<genre>&genres[]=adventure',
    animationGenre: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/genre?genres[]=<genre>&genres[]=animation',

    /*adding some comments*/
    guidTest: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/9e04b68e-4a92-4f73-8f53-71ab93b78dda'
}

export default data;