var pipeline = [
    {
        $match: { 
            "imdb.rating":{$gte:7},
            genres:{$nin:["Crime", "Horror"]}, 
            $or: [{rated:"PG"}, {rated:"G"}], 
            languages: {$all: ["English", "Japanese"]}
        }
    }, 
    {
        $project:{_id:0, title: 1, rated:1}
    }
]

