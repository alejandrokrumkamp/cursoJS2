var init = function(){
    //TODO add im feeling lucky button
    $("#searchForm").submit(function(e){
        e.preventDefault();
        var searchInputData = $("#searchInput").val();
        searchArtist(searchInputData,showArtists);
    });
}

function artistIsFavourite(artistId){
    return false;
}

function showArtists(data){
    var artists = data.artists.items;
    if($("#artistsFoundUl") != undefined){
        $("#artistsFoundUl").empty();
    }
    var artistsFoundUl = $("<ul></ul>").attr("id","artistsFoundUl");
    $("#container").append(artistsFoundUl);
    for(i in artists){
        var artistFoundLi = $("<li></li>").addClass("artist").text(artists[i].name);
        var contentOfArtistFound ="<p>"+artists[i].name;

        if(artistIsFavourite(artists[i].id))
            contentOfArtistFound += "<i class='material-icons' id='fav-"+artists[i].id+"'>stars</i></p>";
        else
            contentOfArtistFound += "<i class='material-icons' id='fav-"+artists[i].id+"'>star</i></p>";

        $("#fav-"+artists[i].id).click(function(e){
            e.preventDefault();
            if(artistIsFavourite(artists[i].id))
                alert("A");//$("fav-"+artists[i].id).text('star');
            else
                alert("B");//$("fav-"+artists[i].id).text('stars');
        });

        if(artists[i].images[0] != undefined){
            var artistImageUrl = artists[i].images[0].url;
            contentOfArtistFound +="<img src='"+artistImageUrl+"' width='100' height='100' >";
        }
        $(artistFoundLi).html(contentOfArtistFound);
        $("#artistsFoundUl").append(artistFoundLi);
    }
}