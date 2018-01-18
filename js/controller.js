$(document).ready(function (e) {
	
	var listPage = [
		{
			pageName: "home",
			pageUrl: "home.html",
			pageID: "nav-home",
		},
		{
			pageName: "album",
			pageUrl: "album.html",
			pageID: "nav-album",
		},
		{
			pageName: "video",
			pageUrl: "video.html",
			pageID: "nav-video",
		},
		{
			pageName: "artist",
			pageUrl: "artist.html",
			pageID: "nav-artist",
		},
		{
			pageName: "topic",
			pageUrl: "topic.html",
			pageID: "nav-topic",
		},
		{
			pageName: "contact",
			pageUrl: "error.html",
			pageID: "nav-contact",
		},
		]

	function getPageInfo(pageID){
		for (let i = 0; i < listPage.length; i++){
			if(pageID == listPage[i].pageID){
				return listPage[i];
			}
		}
		return {};
	}

    $(".nav-box").click(function () {
        location.href = getPageInfo($(this).attr("id")).pageUrl;
    });

    $(".uk-card.uk-card-default.uk-card-body").click(function(){
    	 location.href = "play-page.html";
    });

    //add overlay class
    $(".uk-card.uk-card-default.uk-card-body p").css({"cursor": "pointer"});
    $(".uk-card.uk-card-default.uk-card-body").addClass("item-play-overlay");
    $("#left-column #left-col-row2 .uk-card.uk-card-default.uk-card-body").append('<div class="play-overlay"><img src="images/play.png"/></div>');
    $("#left-column #left-col-row3 .uk-card.uk-card-default.uk-card-body").append('<div class="play-overlay"><img src="images/play.png"/></div>');
    $("#left-column #left-col-row4 .uk-card.uk-card-default.uk-card-body").append('<div class="play-overlay"><img src="images/play.png"/></div>');
    $("#left-column #left-col-row5 .uk-card.uk-card-default.uk-card-body").append('<div class="play-overlay"><img style="margin-top: 23%;" src="images/play.png"/></div>');
});
