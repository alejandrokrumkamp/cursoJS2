var init = function(){

    $("#searchForm").submit(function(e){
        e.preventDefault();
        var searchInputData = $("#searchInput").val();
        searchArtist(searchInputData,showArtists);
    });

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
        if(artists[i].images[0] != undefined){
            var artistImageUrl = artists[i].images[0].url;
            $(artistFoundLi).html("<p>"+artists[i].name+"</p><img src='"+artistImageUrl+"' width='100' height='100' >");
        }
        $("#artistsFoundUl").append(artistFoundLi);
    }
}
