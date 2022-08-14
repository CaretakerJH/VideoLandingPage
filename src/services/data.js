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
    jpCollection: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/00ff115a-291c-4279-8dcf-30291e08de4b',
    anishortsCollection: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/031d48aa-a0e0-4ab6-8a22-586e4d9fe3d5',
    roboCollection: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/7971ad4b-0c9c-415d-b442-7d97f7ba70b4',
    camoCollection: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/1af281c5-4cdd-4082-b128-bddb8221d422',
    ironCollection: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/254577e9-58a8-4c19-ac60-8cbb0f169425',
    Bingeollection: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/72b616ba-b480-42d0-ab1e-b9cf85253dac',
    watchCollection: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/c9fba34e-d6e3-4c96-b3db-ae264b77efcb',
    starCollection: 'https://sqjqk3kqk3.execute-api.eu-west-1.amazonaws.com/stage/content/6e764bc7-af18-430f-b48c-3540b2f3a4e1',

    baseURL: 'https://d1chb2avsvwxer.cloudfront.net/'

}

export default data;