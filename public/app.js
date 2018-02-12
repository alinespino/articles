

// JSON DATA // 
$.getJSON("/articles", function (data) {
    console.log(data)
    // For each one
    for (var i = 0; i < data.length; i++) {
        // Display in div // 

        $("#articles").append("<h1 data-id='" + data[i]._id + "'>" + data[i].title + "<data-link='" + data[i].link + "'>" + "<br>" + "</h1>");

    }
});

// Whenever someone clicks h1 open new window // 

$(document).on("click", "h1", function () {

    var thisLink = $(this).attr("data-link");
    window.open("https://www.huffingtonpost.com/" + data[i].link, "_blank")

});
   

