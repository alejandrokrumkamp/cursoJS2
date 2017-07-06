var searchArtist= function(anArtist,callback) {
    console.log("Fetching data...");
    $.ajax({
        type:"POST",
        dataType: "json",
        url: 'https://platzi-music-api.now.sh/search?q='+anArtist+'&type=artist',
        success: function(data) {
            console.log("Fetching data finished.")
            callback(data);
        },
        error: function(data) {
            console.log('Error with code status ' + data.status);
            callback(data);
        }
    })
};