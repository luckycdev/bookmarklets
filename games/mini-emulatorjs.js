javascript:((function(){var a,b,c;c="https://jsemu.vercel.app/",b=document.createElement("iframe"),b.setAttribute("src",c),b.setAttribute("id","jsemu"),b.setAttribute("style","width: 30%; height: 30%; right:0px; bottom:0px; border:none; position:fixed;z-index:2147483647; overflow:hidden;"),b.setAttribute("mozallowfullscreen","true"),b.setAttribute("allow","autoplay,autoplay; fullscreen *; geolocation; microphone; camera; midi; monetization; xr-spatial-tracking; gamepad; gyroscope; accelerometer; xr"),b.setAttribute("frameborder","0"),b.setAttribute("msallowfullscreen","true"),b.setAttribute("scrolling","yes"),b.setAttribute("allowfullscreen","true"),b.setAttribute("webkitallowfullscreen","true"),b.setAttribute("allowtransparency","true"),a=document.getElementsByTagName("body")[0],a.appendChild(b)})).call(this);var btn=document.createElement("button");document.body.appendChild(btn);btn.innerHTML="Close";btn.setAttribute("style","position:absolute;right:0px;bottom:200px;");btn.onclick=function(){document.getElementById("jsemu").parentNode.removeChild(document.getElementById("jsemu"));btn.setAttribute("id","btn1");document.getElementById("btn1").parentNode.removeChild(document.getElementById("btn1"));};document.onkeydown=function(evt){evt=evt||window.event;var closekey=false;if("key" in evt){closekey=(evt.key === "Escape"||evt.key==="Esc");} else { closekey=(evt.keycode === 27);} if(closekey) {document.getElementById("jsemu").parentNode.removeChild(document.getElementById("jsemu"));btn.setAttribute("id","btn1");document.getElementById("btn1").parentNode.removeChild(document.getElementById("btn1"));}};
