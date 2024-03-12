# bookmarklets
moved all my bookmarklets from my gists to here
---
bookmarklets have been disabled for newer chrome versions i think :-(

if your school lets you use <a href="https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm" target="_blank">uBlock Origin</a> then you can still use bookmarklets

## uBlock Origin Guide Step 1
Create a <a href="https://pastebin.com" target="_blank">pastebin</a> of javascript you want, starting each one with `/// Name.js` -- IMPORTANT: make sure you have the space between the /// and the name!<br>
Then copy the raw link
<img src="https://i.luckyc.site/brave_BfGDGKOT66.gif">

## uBlock Origin Guide Step 2
Click on the extension and find the settings button
<img src="https://i.luckyc.site/1dNfcZEQvv.png">

## uBlock Origin Guide Step 3
Scroll down and enable advanced settings, then paste your link in userResourcesLocation
<img src="https://i.luckyc.site/brave_LMdWLhE2Dd.gif">

## uBlock Origin Guide Step 4
Go to the "My filters" tab at the top, and type the url you want the javascript to run on, then ##+js(NAME_OF_SCRIPT.js)<br>
If you want the javascript to run on every page, then put `*` instead of the website name.<br>
examples:<br> `youtube.com##+js(calculator.js)`<br> `*##+js(test.js)`<br>
For every script just make a new line.
<img src="https://i.luckyc.site/brave_TbWQQFJYOm.gif">
<br>
## uBlock Origin Guide Finished
you are now done and good to go on the site and it will run. every time you add a new script you have to make a new pastebin and put it in userResourcesLocation<br>
<img src="https://i.luckyc.site/brave_Dg19AavxoP.gif">
