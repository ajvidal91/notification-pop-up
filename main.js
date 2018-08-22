var notify = document.querySelector(".notify");
var albums = document.querySelectorAll(".album");
var itemsTotal = document.querySelector(".items-total");
var saveBtn = document.querySelector(".button");

var albumsSelected = [];
var i = 0;

while(i < albums.length) {
  albums[i].onclick = function (e) {
     var albumTitle = this.querySelector(".title").textContent

     if (this.classList.contains("selected") !== true) {
       this.classList.add("selected");
       albumsSelected.push(albumTitle)
      //  console.log("dont't have it");
     }else{
       this.classList.remove("selected");
       albumsSelected = albumsSelected.filter(function(item){
         return item !== albumTitle;
       })
      //  console.log("yes I have it");
     }
     console.log(albumsSelected)
  }
  i++
}

saveBtn.onclick = function() {
  itemsTotal.textContent = albumsSelected.length + " items saved"
  notify.classList.add("active")

setTimeout(function(){
notify.classList.remove("active")
}, 2000)

  console.log("saved");
}



//click album
//show user selected album so we add a class to the album div
//create array and then add album title selected to the array
// find out total of albums selected
// save button is clicked then when clicked show notification with saved items total 
