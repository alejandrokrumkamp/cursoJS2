var init = function(){

    $("#searchForm").submit(function(e){
        e.preventDefault();
        var searchInputData = $("#searchInput").val();
        searchArtist(searchInputData,showArtists);
    });

}


function showArtists(data){
    var artists = data.artists.items;
    for(i in artists){
        console.log(artists[i].name);
        if(artists[i].images[0] != undefined){
            var artistImage = artists[i].images[0].url;
            console.log(artistImage);
        }
    }
}
