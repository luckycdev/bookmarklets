# bookmarklets
moved all my bookmarklets from my gists to here so i can edit them on gitpod on browser
---
bookmarklets have been disabled for newer chrome versions i think :-(

if your school lets you use <a href="https://chromewebstore.google.com/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm" target="_blank">uBlock Origin</a> then you can still use bookmarklets

## Step 1
Create a pastebin of javascript you want, starting each one with `///Name.js`<br>
Then copy the raw link
<img src="https://i.luckyc.site/brave_sT4AffXQBJ.gif">

## Step 2
Click on the extension and find the settings button
<img src="https://i.luckyc.site/1dNfcZEQvv.png">

## Step 3
Scroll down and enable advanced settings, then paste your link in userResourcesLocation
<img src="https://i.luckyc.site/brave_jnN6oxBEde.gif">

## Step 4
Go to the "My filters" tab at the top, and type the url you want the javascript to run on, then ##+js(NAME_OF_SCRIPT.js)<br>
If you want the javascript to run on every page, then put `*` instead of the website name.<br>
examples:<br> `youtube.com##+js(calculator.js)`<br> `*##+js(test.js)`<br>
For every script just make a new line.
<img src="https://i.luckyc.site/brave_NphhqZzCWy.gif">
<br>
## Finished
you are now done and good to go on the site and it will run. every time you add a new script you have to make a new pastebin and put it in userResourcesLocation
