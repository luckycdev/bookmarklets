javascript:/*This is not that great use https://github.com/luckycdev/bookmarklets/blob/main/proxy/unblock-youtube-with-time-invidious.js instead*/function unblockYoutubeWithTime(){var a="https://piped.video/";var b="watch?v=";var c=location.search.split("v=")[1].split("&")[0];var d="&t=";var e=parseInt(document.getElementById("movie_player").getCurrentTime());location.assign(a+b+c+d+e);}if(location.hostname==="www.youtube.com"){unblockYoutubeWithTime();}else{alert("not on youtube");}/*more links at more instances at https://github.com/TeamPiped/Piped/wiki/Instances*/
