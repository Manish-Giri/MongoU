/*
Which of the choices below is the title of a movie from the year 2013 that is rated PG-13 and won no awards? Please query the video.movieDetails collection to find the answer.

NOTE: There is a dump of the video database included in the handouts for the "Creating Documents" lesson. Use that data set to answer this question.
*/

db.movieDetails.find({ year: 2013, rated: "PG-13", "awards.wins": 0 }).pretty()

//         "title" : "A Decade of Decadence, Pt. 2: Legacy of Dreams",