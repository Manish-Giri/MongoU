db.movies.aggregate([
    {
        $project: {
        _id: 0,    
        titleLengths: {$split: ["$title", " "]},
        title: 1
        }
    },
    { 
        $match : { titleLengths : { $size: 1 } }
    } 
])