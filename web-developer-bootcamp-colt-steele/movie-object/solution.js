
// *** movie array object ***
var movies = [
    {
        title: "In Bruges",
        watched: true,
        rating: 5
    },
    {
        title: "Frozen",
        watched: false,
        rating: 4.5
    },
    {
        title: "Mad Max Fury Road",
        watched: true,
        rating: 5
    },
    {
        title: "Les Miserables",
        watched: false,
        rating: 3.5
    },
];

function printMovies(movies){
    var output = "";
    for (i=0; i<movies.length; i++){
        if (movies[i].watched===true){
            output += "You have watched: ";
        } else {
            output += "You have not seen: ";
        }
        output += "\"" + movies[i].title +"\" - ";
        output += movies[i].rating + " stars'\n'" ;
    }
    console.log(output);
}
printMovies(movies);