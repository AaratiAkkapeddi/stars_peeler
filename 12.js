

let archive_images = [
    "12.jpg.png",
    "57.jpg.png",
    "7.jpg.png",
    "9.jpg.png",
    "COIMBATORE_9A_CROWN STUDIO_2016_00003.png",
    "COIMBATORE_9A_RAMU STUDIO_2015_00002.png",
    "COIMBATORE_9A_SEENU STUDIO_2015_00001.png",
    "ERODE_11A_METRO STUDIO_2015_00001.png",
    "KARAIKUDI_3A_R DASEN STUDIO_2016_00015.png",
    "KARAIKUDI_3A_R DASEN STUDIO_2016_00016.png",
    "KARAIKUDI_3A_R DASEN STUDIO_2016_00020.png",
    "KARAIKUDI_3A_SUNDRAM STUDIO_2015_00007.png",
    "KARAIKUDI_3A_SUNDRAM STUDIO_2015_00009.png",
    "MADURAI_1A_TAMILNADU STUDIO_2015_00020.png",
    "MADURAI_1A_VICTORIA STUDIO_2016_00039.png",
    "MADURAI_1A_VICTORIA STUDIO_2016_00041.png",
    "MADURAI_1D_NEW STUDIO_2015_00002.png",
    "MADURAI_1D_NEW STUDIO_2015_00005.png",
    "MADURAI_1D_NEW STUDIO_2015_00006.png",
    "MADURAI_1D_NEW STUDIO_2015_00013.png",
    "MAYILADUTHURAI_15A_LAKSHMI STUDIO_2016_00001.png",
    "MAYILADUTHURAI_15A_LAKSHMI STUDIO_2016_00002.png",
    "MISCELLANEOUS_M8_2015_00023.png",
    "MISCELLANEOUS_M8_2015_00028.png",
    "MISCELLANEOUS_M8_2015_00049.nef copy.jpg.png",
    "MISCELLANEOUS_M8_2015_00095.png",
    "MISCELLANEOUS_M8_2015_00097 (1).png",
    "MISCELLANEOUS_M8_2015_00097.png",
    "MISCELLANEOUS_M8_2015_00098.png",
    "MISCELLANEOUS_M8_2015_00104.png",
    "MISCELLANEOUS_M8_2015_00124.png",
    "MISCELLANEOUS_M8_2015_00136.png",
    "MISCELLANEOUS_M8_2015_00141.png",
    "MISCELLANEOUS_M8_2015_00145.png",
    "MISCELLANEOUS_M8_2015_00148.png",
    "MISCELLANEOUS_M8_2015_00160.png",
    "MISCELLANEOUS_M8_2015_00162.png",
    "MISCELLANEOUS_M8_2015_00163.nef.jpg.png",
    "MISCELLANEOUS_M8_2015_00163.png",
    "MISCELLANEOUS_M8_2015_00169.png",
    "MISCELLANEOUS_M8_2015_00170.png",
    "MISCELLANEOUS_M8_2015_00172.png",
    "MISCELLANEOUS_M8_2015_00175.png",
    "MISCELLANEOUS_M9_2015_00191.png",
    "POLLACHI_12A_RAJUs ELECTRICI STUDIO_2015_00003.png",
    "PONDICHERRY_17A_LEO PHOTO WORKS STUDIO_2016_00002.png",
    "PONDICHERRY_17A_LEO PHOTO WORKS STUDIO_2016_00003 2.png",
    "PONDICHERRY_17A_STAR PHOTO STUDIO_2016_00001.png",
    "PONNAIAH STUDIO___POLLACHI_12A_PONNAIAH STUDIO_2015_00001.png",
    "Scan 39.png",
    "Scan 46.png",
    "Scan 5.png",
    "Scan 68.png",
    "THANJAVUR_13A_EVEREST STUDIO_2015_00002.png",
    "VELLORE_14A_ANONYOMUS STUDIO_2016_00001.png",
    "image101.jpg.png",
    "image18.jpg.png",
    "image21.jpg.png",
    "image43.jpg.png",
    "image99.jpg.png",
    "phd_student.png",
    "phd_student2.png",
    "ramjirao_brother.png",
    "seenu.png",
    "seenu2.png"
]
let ogtext = "<h1>Close-up portrait of a man.</h1><p>Composite of 68 photographs from Guhan Studio in Chennai, Ramu Studio, Seenu Studio, and Crown Studio in Coimbatore, Metro Studio in Erode, R. Dasen Studio and Sundram Studio in Karaikudi, Tamilnadu Studio, Victoria Studio, and New Studio in Madurai, Lakshmi Studio in Mayiladuthurai, Raju's Electric Studio and Ponnaiah Studio in Pollachi, Leo Photo Works Studio and Star Studio in Pondicherry, Everest Studio in Thanjavur and other unidentified studios. 13 of the images are from the artist's family archive, the rest are from stars.archive.<br><br>“There are multitudes of images in comparison with its sibling cluster of close-up portraits of women. Many of these images seem to be ID photographs for official purposes such as work, school, or travel. A few seem to be manipulated using a technique called vignetting or overpainted with colors.”</p>"
let text = [
    "<h1>Guhan Studio</h1><p>Chennai, Tamil Nadu.<br><br> This is a photograph of my maternal grandfather, Ramji Rao Ramavarapu. This looks like it was taken before he left to work in Geneva, Switzerland for the first time in the early 1970's. So it could be an ID photograph for travel or just for family members to remember him before making the trip. Alternatively, it could also be an ID photo for entering the IIT campus where he was a professor and where my mother grew up.</p>",
    "<h1>Unknown Photo Studio</h1><p>This may have been taken in the neighboring state of Andhra Pradesh. <br><br> This is my maternal grandfather, Ramji Rao Ramavarapu. I believe this photograph was taken before he left to the United States the first time around 1952 (all the way to Oklahoma). Zoé Headley, founder and researcher at stars.archive mentioned that this image was probably 'pink-washed', a photo-manipulation technique used to smooth the skin. </p>",
    "<h1>Unknown Photo Studio</h1><p>This may have been taken in the neighboring state of Andhra Pradesh.<br><br> This is my maternal grandfather's brother Venu Gopala Rao Ramavarapu. I don't know when this was taken, but I do know that my great-uncle spent some time in the United States so perhaps this was an ID photograph for travel. However, he is smiling and so it could also just be a formal portrait. </p>",
    "<h1>Guhan Studio</h1><p>This is a very over-exposed ID photo probably taken before the second time my grandfather left for Geneva, Switzerland to work for about a year in the early 80's.</p>",
    "<h1>Crown Studio</h1><p>Coimbatore, Tamil Nadu.</p>",
    "<h1>Ramu Studio</h1><p>Coimbatore, Tamil Nadu.</p>",
    "<h1>Seenu Studio</h1><p>Coimbatore, Tamil Nadu.</p>",
    "<h1>Metro Studio</h1><p>Erode, Tamil Nadu.</p>",
    "<h1>R. Dasen Studio</h1><p>Karaikudi, Tamil Nadu</p>",
    "<h1>R. Dasen Studio</h1><p>Karaikudi, Tamil Nadu</p>",
    "<h1>R. Dasen Studio</h1><p>Karaikudi, Tamil Nadu</p>",
    "<h1>Sundram Studio</h1><p>Karaikudi, Tamil Nadu</p>",
    "<h1>Sundram Studio</h1><p>Karaikudi, Tamil Nadu</p>",
    "<h1>Tamilnadu Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>Victoria Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>Victoria Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>New Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>New Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>New Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>New Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>Lakshmi Photo Studio</h1><p>Mayiladuthurai, Tamil Nadu</p>",
    "<h1>Lakshmi Photo Studio</h1><p>Mayiladuthurai, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Raju's Electric Studio</h1><p>Pollachi, Tamil Nadu</p>",
    "<h1>Leo Photo Works Studio</h1><p>Pondicherry/Puducherry</p>",
    "<h1>Leo Photo Works Studio</h1><p>Pondicherry/Puducherry</p>",
    "<h1>Star Studio</h1><p>Pondicherry/Puducherry</p>",
    "<h1>Ponnaiah Studio</h1><p>Pollachi, Tamil Nadu</p>",
    "<h1>Guhan Studio</h1><p>Chennai, Tamil Nadu.<br><br> This is my uncle, Sreenivas Ramavarapu. This is probably an ID photo taken for college applications or some other form. </p>",
    "<h1>Unknown Photo Studio</h1><p>Unknown location<br><br>This is my maternal grandfather, Ramji Rao Ramavarapu. It's actually unclear to me whether this photograph was taken in India or in Oklahoma, U.S.A. where he studied briefly. But it is definitely from the early-mid 1950's.</p>",
    "<h1>Guhan Studio</h1><p>Chennai, Tamil Nadu.<br><br> This is my uncle, Sreenivas Ramavarapu. This is probably an ID photo taken for college applications or some other form. You can also see that after the image served its official purpose, my uncle drew a fake mustache on it with a pen.</p>",
    "<h1>Unknown Photo Studio</h1><p>This may have been taken in the neighboring state of Andhra Pradesh.<br><br> This is my maternal grandfather's brother, Gopala Krishna Ramavarapu. I do not know the context of the photo or when it was taken.</p>",
    "<h1>Everest Studio</h1><p>Thanjavur, Tamil Nadu</p>",
    "<h1>Anonymous Studio</h1><p>Vellore, Tamil Nadu</p>",
    "<h1>Unknown Photo Studio</h1><p>This may have been taken in the neighboring state of Andhra Pradesh.<br><br> This is my maternal grandfather's sister's husband, Mr. Panganamala I do not know the context of the photo or when it was taken.</p>",
    "<h1>Unknown Photo Studio</h1><p>Unknown location<br><br> I'm actually unclear whether this photograph was taken in Guhan Studio in Chennai, or in a photobooth in Geneva, Switzerland. But this is a photograph of my grandfather, Ramji Rao Ramavarapu and was taken in the early 1980's.</p>",
    "<h1>Unknown Photo Studio</h1><p>Unknown location<br><br> This is a photograph of my maternal grandfather, Ramji Rao Ramavarapu, probably taken sometime around 1952.</p>",
    "<h1>Guhan Studio</h1><p>Chennai, Tamil Nadu.<br><br> This is a photograph of my uncle, Seetharam Ramavarapu. I believe this photograph was used as an ID image for a college application.</p>",
    "<h1>Guhan Studio</h1><p>Chennai, Tamil Nadu.<br><br> This is a photograph of my great-grandfather, Joga Rao Ramavarapu. I believe this was taken in the early 1970's as an ID image to enter the IIT campus where my mother's family lived.</p>",
    "<h1>Maybe Guhan Studio</h1><p>Chennai, Tamil Nadu.<br><br> This is an extra copy of an ID photo of my uncle Seetharam Ramavarapu's good friend Sharat Chandra from high school. We aren't sure how it ended up in our family album but he mentioned when they all graduated, they traded extra ID photos for remembrance sake. </p>",
    "<h1>Guhan Photo Studio</h1><p>Chennai, Tamil Nadu.<br><br> This is Dr. Narayana Murthy, a student of my grandfather, Ramji Rao Ramavarapu. I think this was taken for an academic journal.</p>",
    "<h1>Unknown Photo Studio</h1><p>This may have been taken in the neighboring state of Andhra Pradesh.<br><br>This is my maternal grandfather's brother, Sundara Rao Ramavarapu. I'm not sure the purpose of the photograph but I see he or someone else signed it.</p>",
    "<h1>Guhan Studio</h1><p>Chennai, Tamil Nadu.<br><br> This is my uncle, Sreenivas Ramavarapu. This is probably an ID photo taken for college applications or some other form. You can also see that after the image served its official purpose, my uncle drew a fake mustache on it with a pen.</p>",
    "<h1>Guhan Studio</h1><p>Chennai, Tamil Nadu.<br><br> This is my uncle, Sreenivas Ramavarapu. This is probably an ID photo taken for college applications or some other form. You can also see that after the image served its official purpose, my uncle drew a fake mustache, glasses and beard on it with a pen.</p>",
]

let loader = document.getElementById("loader")
for(let i = 0; i < archive_images.length; i ++){
    let img = document.createElement("img");
    img.src = "assets/12/"+archive_images[i];
    img.id = "id-"+i;
    let referenceNode = document.querySelector('#wrapper');
    dragElement(img);
    referenceNode.appendChild(img)
    if(i == archive_images.length - 1){
      img.onload = function(){
        loader.classList.remove('on');
      }
    }
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    e.target.classList.add('on')

    document.querySelector("#text").innerHTML = text[parseInt(e.target.id.split("-")[1])];
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    let els = document.querySelectorAll("#history img");
    for(let i = 0; i < els.length; i ++){
      els[i].classList.remove("on")
    }
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement(e) {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
    e.target.classList.remove('on')
    let hist = document.querySelector("#history-icons");
    let newDiv = document.createElement("div");
    if(e.target.src){
      let newEl = document.createElement('img')
      let rest = e.target.src.substring(0, e.target.src.lastIndexOf("/") + 1);
      let last = e.target.src.substring(e.target.src.lastIndexOf("/") + 1, e.target.src.length);
      newEl.src = rest + "small/" + last
      newEl.id = "icon"+e.target.id
      hist.insertBefore(newEl,hist.firstChild)
      newEl.addEventListener("click", function(){
        if(this.classList.contains("on")){
          this.classList.remove("on")
          document.querySelector("#text").innerHTML = ogtext;
        }else{
          let els = document.querySelectorAll("#history img");
          for(let i = 0; i < els.length; i ++){
            els[i].classList.remove("on")
          }
          this.classList.add("on")
          document.querySelector("#text").innerHTML = text[parseInt(this.id.split("-")[1])];
        }
      })
      let label = document.querySelector("#hist-label");
      label.classList.add('on')
    }
    document.querySelector("#text").innerHTML = ogtext;
    e.target.classList.add('moved');
    let imgs = document.querySelectorAll("img");
    let count = 0;
    for(let i = 0; i < imgs.length; i ++){
        if(imgs[i].classList.contains("moved")){
            count = count + 1;
        }
    }
    if(count == imgs.length){
        document.querySelector("#over").classList.add('on')
    }
  }
}

