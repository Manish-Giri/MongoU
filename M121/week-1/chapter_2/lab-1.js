var favorites = [
    "Sandra Bullock",
    "Tom Hanks",
    "Julia Roberts",
    "Kevin Spacey",
    "George Clooney"];


/*
db.movies.aggregate([
    {
        $match: { 
            "tomatoes.viewer.rating": {$gte: 3},
            "countries": "USA"
        }
    }, 
    {
        $project:{_id:0, title: 1, cast: 1, countries: 1}, 
    },
    {
        $addFields: {
            common: { $setIntersection: [ "$cast",  ["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey", "George Clooney"] ] },
            num_favs: { $size: common }
        }
    },
    { $sort : { num_favs : -1} }
])   


db.movies.aggregate([
    {
        $match: { 
            "tomatoes.viewer.rating": {$gte: 3},
            "countries": "USA",
            cast: { $in: ["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey", "George Clooney"] } 
        }
    }, 
    {
        $project:{_id:0, title: 1, cast: 1, countries: 1}
    },
    {
        $addFields: {
            num_favs: { $setIntersection: [ "$cast",  ["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey", "George Clooney"] ] }
        }
    }
])   



db.movies.aggregate([
    {
        $match: { 
            "tomatoes.viewer.rating": {$gte: 3},
            "countries": "USA",
            cast: { $in: ["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey", "George Clooney"] } 
        }
    }, 
    {
        $project:{_id:0, title: 1,  countries: 1, common: 1, num_favs: 1}, 
    },
    {
        $addFields: {
            fav: { $setIntersection: [ "$cast",  ["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey", "George Clooney"] ] },
        }
    },
    {
        $addFields: {
            num_favs: {$size: "$fav"}
        }
    },
    { $sort : { num_favs : -1, "tomatoes.viewer.rating": -1} },
    { $limit : 30 }
])   


{ qty: { $in: [ 5, 15 ] } }

 $addFields: {
            common: { $setIntersection: [ "$cast",  ["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey", "George Clooney"] ] },
            num_favs: { $size: "$common" }
        }


        


db.movies.aggregate([
        {
            $match: {
                "tomatoes.viewer.rating": {
                    $gte: 3
                },
                "countries": "USA",
                cast: {
                    $in: ["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey", "George Clooney"]
                }

            }
        }, {
            $project: {
                _id: 0,
                title: 1,
                cast: 1,
                countries: 1,
                common: 1,
                num_favs: 1,
                "tomato.viewer.rating": 1
            }
        }, {
            $addFields: {
                fav: {
                    $setIntersection: [
                        "$cast",
                        ["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey", "George Clooney"]
                    ]
                }
            }
        }, {
            $addFields: {
                num_favs: {
                    $size: "$fav"
                }
            }
        }, {
            $sort: {
                num_favs: -1,
                "tomatoes.viewer.rating": -1
            }
        }, {
            $limit: 30
        }
    ])

    */

    db.movies.aggregate([
        {
            $match: {
                "tomatoes.viewer.rating": {
                    $gte: 3
                },
                "countries": "USA",
                cast: {
                    $in: ["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey", "George Clooney"]
                }

            }
        }, {
            $project: {
                _id: 0, title: 1, cast: 1, "tomatoes.viewer.rating": 1
                
            }
        }, {
            $addFields: {
                fav: {
                    $setIntersection: [
                        "$cast",
                        ["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey", "George Clooney"]
                    ]
                }
            }
        }, 
        
        {
            $addFields: {
                num_favs: {
                    $size: "$fav"
                }
            }
        }, {
            $sort: {
                num_favs: -1,
                "tomatoes.viewer.rating": -1
            }
        }, {
            $limit: 25
        }
    ])    

 