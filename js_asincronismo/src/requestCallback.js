const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const replaceSpacesWithHyphens = require('./utils/replace');
const API = 'https://emojihub.yurace.pro/api/';

function fetchData(url, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url);
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url);
                return callback(error, null);
            }
        } 
    };
    xhttp.send();
}

//get random emoji
fetchData(`${API}random`, (error, data) => {
    if (error) return console.error(error);
    console.log(data);
    printEmoji(data);
    //get random of same group
    const group = replaceSpacesWithHyphens(data.group);
    console.log(`Group: ${group}`);
    fetchData(`${API}random/group/${group}`, (error, data) => {
        if (error) return console.error(error);
        console.log(data);
        printEmoji(data);
    });
    
});

function printEmoji(data){
    const unicodeHex = data.unicode[0].replace('U+', '');
    const emoji = String.fromCodePoint(parseInt(unicodeHex, 16));
    console.log(`${emoji} - ${data.name}`);
}