$(document).ready(function(){

    var pokeImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    for(var i = 1; i <= 50; i++) {
        var img = $('<img />').attr({
            'id': i,
            'src': pokeImg + i + ".png",
            'width': 250
        }).appendTo('.left .row');               
    };
    
    
    $(document).on('click', 'img', function(){
        var rightImg = $(this).attr('src');
        var pokemonId = $(this).attr('id');
        console.log(pokemonId);
        var pokemonName ='';
        var pokemonHeight, pokemonWeight;
        var pokemonTypes = '';
        $.get("https://pokeapi.co/api/v2/pokemon/" + pokemonId, function(res){
            pokemonName = res.name;
            pokemonHeight = "<h4>Height</h4>" + "<p>" + res.height + "</p>";
            pokemonWeight = "<h4>Weight</h4>" + "<p>" + res.weight + "</p>";
            pokemonType = res.types[0].type.name;
            // var li = $('<li />')
            $(".right img").attr('src',rightImg);
            $(".name").html(pokemonName);
            $("#poke-height").html(pokemonHeight);
            $("#poke-weight").html(pokemonWeight);

            pokemonTypes += "<h4>Types</h4>";
            pokemonTypes += "<ul>"; 
            for(var i = 0; i < res.types.length; i++) {
                pokemonTypes += "<li>" + res.types[i].type.name + "</li>";
            }
            pokemonTypes += "</ul>";
            $(".list-types").html(pokemonTypes);

        }, "json");

    });
});