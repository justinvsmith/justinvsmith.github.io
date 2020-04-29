/* list of features to build:
1. have JS display the world of brick/coin/etc
2. have the pacman move up and down */

$("document").ready(function(){
    var world = [
        [2,2,2,2,2,2,2,2,2,2],
        [2,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,2],
        [2,1,1,1,1,1,1,1,1,2],
        [2,2,2,2,2,2,2,2,2,2]
    ];

//     function displayWorld(){
//         var output = ' ';

//         for(var i=0; i<world.length; i++){
//             output += "<div class='row'>";
//             for(var j=0; j<world[i].length; j++){
//                 if(world[i][j] === 2){
//                 output += "<div.class='brick'></div>";
//                 } else if(world[i][j] === 1){
//                     output += "<div.class='coin'></div>";
//                 } else if(world[i][j] === 0){
//                     output += "<div.class='empty'></div>";
//                 }
//                 output += "</div>"
//             }
//         }
//         console.log(output);
//     }
// });

// function displayWorld(){
    var output = ' ';

    for(var i=0; i<world.length; i++){
        output += "\n<div class='row'>";
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] === 2){
            output += "\n\t<div.class='brick'></div>";
            } else if(world[i][j] === 1){
                output += "\n\t<div.class='coin'></div>";
            } else if(world[i][j] === 0){
                output += "\n\t<div.class='empty'></div>";
            }
        }
        output += "\n</div>";
    }
    console.log(output);
    $("#world").html(output);
// }
});