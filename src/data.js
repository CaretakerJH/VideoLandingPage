const data = {

    /*strings to the location of the types of films */
    collectionType: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/type/<collection>',
    movieType: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/type/<movie>',
    seriesType: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/type/<series>',
    episodeType: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/type/<episode>',

     /*strings to the location of the genres of films */
    actionGenre:'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/genre?genres[]=%3Cgenre%3E&genres[]=action',
    adventureGenre: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/genre?genres[]=<genre>&genres[]=<genre>',
    animationGenre: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/genre?genres[]=<genre>&genres[]=<genre>'

    /*adding some comments*/
}

export default data;