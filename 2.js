

let archive_images = [
"COIMBATORE_9A_CITY CAMERA HOUSE_2015_00001.png",     
"COIMBATORE_9A_CROWN STUDIO_2016_00006.png",  
"COIMBATORE_9A_CROWN STUDIO_2016_00009.png",  
"COIMBATORE_9A_RAJUs STUDIO_2016_00001.png",  
"COIMBATORE_9A_THE CITY PHOTO WORKS STUDIO_2015_00002.png",   
"KARAIKUDI_3A_R DASEN STUDIO_2016_00053.png",     
"KARAIKUDI_3A_SUNDRAM STUDIO_2016_00011.png",     
"MADURAI_1A_TAMILNADU STUDIO_2015_00001.png",     
"MADURAI_1A_TAMILNADU STUDIO_2015_00004.png",     
"MADURAI_1A_TAMILNADU STUDIO_2015_00005.png",     
"MADURAI_1A_TAMILNADU STUDIO_2015_00021.png",     
"MADURAI_1A_TAMILNADU STUDIO_2015_00023.png",     
"MADURAI_1A_TAMILNADU STUDIO_2015_00024.png",     
"MADURAI_1A_VICTORIA STUDIO_2015_00011.png",  
"MADURAI_1A_VICTORIA STUDIO_2015_00031.png",  
"MADURAI_1A_VICTORIA STUDIO_2015_00032.png",  
"MADURAI_1A_VICTORIA STUDIO_2015_00033.png",  
"MADURAI_1A_VICTORIA STUDIO_2016_00040.png",  
"MADURAI_1D_NEW STUDIO_2015_00009.png",   
"MISCELLANEOUS_M8_2015_00055.png",    
"MISCELLANEOUS_M8_2015_00057.png",    
"MISCELLANEOUS_M8_2015_00065.png",    
"MISCELLANEOUS_M8_2015_00067.png",    
"MISCELLANEOUS_M8_2015_00079.png",    
"MISCELLANEOUS_M8_2015_00080.png",    
"MISCELLANEOUS_M8_2015_00089.png",    
"PATTUKKOTTAI_12A_RANI STUDIO_2016_00001.png",    
"PONDICHERRY_17A_LEO PHOTO WORKS STUDIO_2016_00004 2.png",    
"PONDICHERRY_17A_OMNI PHOTO STUDIO_2016_00001.png",   
"THANJAVUR_13A_C P STUDIO_2015_00003.png",    
"THANJAVUR_13A_G P SWAMI STUDIO_2015_00001.png",  
"THANJAVUR_13A_VYAS STUDIO_2016_00001.png",   
"THENI_13A_NAVAJEEVEN STUDIO_2015_00002.png",     
"ULUNDURPET_14A_SHANTHI STUDIO_2016_00001.png",   
"ULUNDURPET_14A_VENUS STUDIO_2016_00001.png",     
"ramavarapu___image34.png",   
"ramavarapu___image35.png"
]
let ogtext = "<h1>Large group photo (class portraits, team portraits, perhaps colleagues, or even large extended families).</h1><p>Composite of 37 photographs from City Camera House, The City Photo Works Studio, Crown Studio, and Raju's Studio in Coimbatore, R. Dasen Studio and Sundram Studio in Karaikudi, Tamilnadu Studio, Victoria Studio, and New Studio in Madurai, C.P. Studio, Vyas Studio and G.P. Swami Studio in Thanjavur, Navajeevan Studio in Theni, Shanthi Studio and Venus Studio in Ulundurpet and other unidentified studios. One of the images is from the artist's family archive, the rest are from stars.archive.<br><br>“In the images in this cluster that are not large extended families, the social relationships between people outside of the family are revealed. They could be class portraits, sports teams, religious congregations, or colleagues. One image is of my uncle's volleyball team. I believe the image is of note in that it depicts people of varying socio-economic backgrounds together.” </p>"
let text = [
    "<h1>City Camera House</h1><p>Coimbatore, Tamil Nadu</p>",
    "<h1>Crown Studio</h1><p>Coimbatore, Tamil Nadu</p>",
    "<h1>Crown Studio</h1><p>Coimbatore, Tamil Nadu</p>",
    "<h1>Raju's Studio</h1><p>Coimbatore, Tamil Nadu</p>",
    "<h1>The City Photo Works Studio</h1><p>Coimbatore, Tamil Nadu</p>",
    "<h1>R. Dasen Studio</h1><p>Karaikudi, Tamil Nadu</p>",
    "<h1>Sundram Studio</h1><p>Karaikudi, Tamil Nadu</p>",
    "<h1>Tamilnadu Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>Tamilnadu Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>Tamilnadu Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>Tamilnadu Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>Tamilnadu Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>Tamilnadu Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>Victoria Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>Victoria Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>Victoria Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>Victoria Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>Victoria Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>New Studio</h1><p>Madurai, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Unknown Studio</h1><p>Unknown location, Tamil Nadu</p>",
    "<h1>Rani Studio</h1><p>Pattukkottai, Tamil Nadu</p>",
    "<h1>Leo Photo Works Studio</h1><p>Pondicherry/Puducherry</p>",
    "<h1>Omni Studio</h1><p>Pondicherry/Puducherry</p>",
    "<h1>C.P. Studio</h1><p>Thanjavur, Tamil Nadu</p>",
    "<h1>G.P. Swami Studio</h1><p>Thanjavur, Tamil Nadu</p>",
    "<h1>Vyas Studio</h1><p>Thanjavur, Tamil Nadu</p>",
    "<h1>Navajeevan Studio</h1><p>Theni, Tamil Nadu</p>",
    "<h1>Shanthi Studio</h1><p>Ulundurpet, Tamil Nadu</p>",
    "<h1>Venus Studio</h1><p>Ulundurpet, Tamil Nadu</p>",
    "<h1>Unknown</h1><p>Chennai, Tamil Nadu<br><br>This was taken with a handheld camera, but not really sure who would've been the photographer. This is a photograph of my uncle, Seetharam Ramavarapu's volleyball team. I know anectdotally that these team members all lived on the IIT campus and come from various socio-economic backgrounds. </p>",
    "<h1>Unknown</h1><p>Chennai, Tamil Nadu<br><br>This was taken with a handheld camera, but not really sure who would've been the photographer. This is a photograph of my uncle, Seetharam Ramavarapu's volleyball team.</p>"
]
let loader = document.getElementById("loader")
for(let i = 0; i < archive_images.length; i ++){
    let img = document.createElement("img");
    img.src = "assets/2/"+archive_images[i];
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

