var searchArtist= function(anArtist) {
    $.ajax({
        type:"POST",
        dataType: "json",
        url: 'https://platzi-music-api.now.sh/search?q='+anArtist+'&type=artist',
        success: function(data) {
            return data;
        },
        error: function(data) {
            console.log('Error with code status ' + data.status);
            return data;
        }
    })
};