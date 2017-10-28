/*
How many documents in our video.movieDetails collection list just the following two genres: "Comedy" and "Crime" with "Comedy" listed first.

NOTE: There is a dump of the video database included in the handouts for the "Creating Documents" lesson. Use that data set to answer this question.
*/

db.movieDetails.find({ genres: ["Comedy", "Crime"] }).count()
    // 20