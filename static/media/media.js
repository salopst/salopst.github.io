//import { xinspect } from './utils.js';
// 2021-10-04
// read a JSON file from over the network and, well, that's it.
// localStorage.setItem('addSong', JSON.stringify(addedSongData))


function getRandomIntInclusive(min, max) { 
  // from mdn doco Math.random
  //The maximum is inclusive and the minimum is inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

function createLoop(obj) {
  for (const key in obj) {
     if (typeof obj[key] == "object") {
        createLoop(obj[key])
     } else {
       // your code here
       console.log();
       
     }
  }
}


function xinspect(o,i){
  if(typeof i=='undefined')i='';
  if(i.length>50)return '[MAX ITERATIONS]';
  var r=[];
  for(var p in o){
      var t=typeof o[p];
      r.push(i+'"'+p+'" ('+t+') => '+(t=='object' ? 'object:'+xinspect(o[p],i+'  ') : o[p]+''));
  }
  return r.join(i+'\n');
}
// example of use:
// console.log((xinspect(document)))


//==== END FETCH API (ES6 WAY)
//const myMedia = fetch('http://127.0.0.1:5500/public/my-media.json').then(media => media.json)}).then(response => response.json())
let myMediaPromise = fetch('http://localhost:3000/my-media-array.json', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}).then(response => response.json())

myMediaPromise
.then(myMediaPromise => {return  myMediaPromise })
.catch(myMediaPromise => {return "ERROR!" })
.finally(myMediaPromise => { return myMediaPromise})
console.log(myMediaPromise);
//==== END FETCH API (ES6 WAY)


//===== AJAX (ES5 WAY)
//const newSongEl = document.getElementById("new-song")
//const newSongBtn = document.getElementById('new-song-btn')
// create event listener
// document.getElementById('new-song-btn').addEventListener('click', getNewSong())
// document.getElementById('all-songs-btn').addEventListener('click', getAllSongs())

function getAllSongs(){
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/my-media-array.json", true);
  xhttp.send();
  xhttp.onload = function() { // from: https://www.w3schools.com/xml/xml_http.asp
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      var jsonResponse  = JSON.parse(xhttp.responseText)
      var textResponse = xhttp.responseText
      // console.log(`The WANK value of xinspect(textResponse) is: ${xinspect(textResponse)}`);
//     console.log(`The WANK value of xinspect(jsonResponse) is: ${xinspect(jsonResponse)}`);
      var myMedia = jsonResponse.media // at this point we have the JSON file memory
      // console.log(`The WANK value of jsonResponse is: ${jsonResponse}`);
      // console.log(`The WANK value of myMedia is: ${myMedia}`); // bunch of arrays "media items"
      // console.log(`The WANK value of myMedia[0] is: ${myMedia[0]}`);// specific
      // console.log(`The WANK value of myMedia[0][0] is: ${myMedia[0].type}`);
      //writeAllSongs(myMedia)
      //getNewSong(myMedia)
      writeAllSongs(myMedia)
    }
  }
}




// an init ??
getAllSongs()


function writeAllSongs(myMedia){
  mySongs = myMedia
  let totalNoSongs = myMedia.length
  let totalNoSongsString = `<h2>Found ${myMedia.length} real things</h2>`

  let allSongsEl = document.getElementById("all-songs")
  let allSongs = totalNoSongsString + '<ul>';
  for (let i = 0; i < mySongs.length; i++) {
    songNo = i+1
    allSongs += `
      <li class="title">
        <a href="${myMedia[i].yturl}"> ${songNo} ${myMedia[i].title}</a>
         by <span class="band">${myMedia[i].band}</span>
      </li>
    `

  }
  document.getElementById("all-songs").innerHTML = allSongs + '</ul>'
}


function getNewSong() { 
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://localhost:3000/my-media-array.json", true);
  xhttp.send();
  xhttp.onload = function() { // from: https://www.w3schools.com/xml/xml_http.asp
    if (this.readyState == 4 && this.status == 200) {
      var jsonResponse  = JSON.parse(xhttp.responseText)
      var mySongs  = jsonResponse.media
      totalNoSongs = mySongs.length
      randomSongNo = getRandomIntInclusive(0, totalNoSongs)

    let newSong = `
      <li class="title">
        <a href="${mySongs[randomSongNo].yturl}"> ${mySongs[randomSongNo].title}</a>
         by <span class="band">${mySongs[randomSongNo].band}</span>
      </li>
      `
      document.getElementById("new-song").innerHTML = newSong
    }
  }
}


//`

/*


    function getRandomSong(myMedia.length){}
      myMedia.length
      randomSongNo = getRandomIntInclusive(0,  myMedia.length)
      randomSong = myMedia[randomSongNo].title
    newSong(randomSong)
    document.getElementById("new-song").innerHTML = randomSong
    
    // wrote out all songs in retieved JSON object
    let allSongs = '';
    for (let i = 0; i < myMedia.length; i++) {
      songNo = i+1
      allSongs += '<li>' +songNo+ ':  ' +myMedia[i].title+ '</li>'
      baz =  allSongs
      //return baz
      console.log(`baz WANK:  is: ${baz}`)
      
    }
    document.getElementById("all-songs").innerHTML = allSongs
    const foo = randomSong
    var bar = "dog poo"
    //return bar
    console.log(`my debug value is: ${bar}`);


*/


