javascript:/*You will probably have to reload a couple times for it to work, this is not that great. If you want a better youtube to piped bookmarklet, check out https://github.com/luckycdev/bookmarklets/blob/main/proxy/unblock-youtube-piped.js*/function unblockYoutubeWithTime(){var a="https://piped.video/";var b="watch?v=";var c=location.search.split("v=")[1].split("&")[0];var d="&t=";var e=parseInt(document.getElementById("movie_player").getCurrentTime());location.replace(a+b+c+d+e);}if(location.hostname==="www.youtube.com"){unblockYoutubeWithTime();}else{alert("not on youtube");}