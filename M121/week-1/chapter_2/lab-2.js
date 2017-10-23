db.movies.aggregate([
    {
        $match: {
            languages: "English",
            "imdb.rating": {$gte: 1},
            released: {"$gte": ISODate("1990-01-01T00:00:00.000Z")},
            "imdb.votes": {"$exists": true}
        }
    },
    {
        $project: {
            _id: 0, title: 1, released: 1, languages: 1, "imdb.rating": 1
            
        }
    },
    {
        $addFields: {
            scaledVotes:   {
                $add: [
                  1,
                  {
                    $multiply: [
                      9,
                      {
                        $divide: [
                          { $subtract: ["$imdb.votes", 5] },
                          { $subtract: [1521105, 5] }
                        ]
                      }
                    ]
                  }
                ]
              }
        }
    },
    {
        $addFields: {
            normalized_rating: { $avg: ["$scaledVotes", "imdb.rating"]}
        }
    },
    {
        $sort: {normalized_rating: 1}
    }
]) 

