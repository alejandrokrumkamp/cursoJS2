var init = function(){

    $("#searchForm").submit(function(e){
        e.preventDefault();
        var searchInputData = $("#searchInput").val();
        searchArtist(searchInputData,showArtists);
    });

}


function showArtists(data){
    var artists = data.artists.items;
    var artistsFoundUl = $("<ul></ul>").attr("id","artistsFoundUl").text("Results:");
    $("#container").append(artistsFoundUl);
    for(i in artists){
        console.log(artists[i].name);
        var artistFoundLi = $("<li></li>").addClass("artist").text(artists[i].name);
        if(artists[i].images[0] != undefined){
            var artistImageUrl = artists[i].images[0].url;
            $(artistFoundLi).html("<img src='"+artistImageUrl+"' width='100' height='100' >");
            console.log(artistImageUrl);
        }
        $("#artistsFoundUl").append(artistFoundLi);
    }
}
