let all12 = document.getElementById("view");
let show = document.getElementsByTagName("img");
let dimg = document.getElementById("dimg");
let close = document.getElementById("close");
let next = document.getElementById("next");
let pre = document.getElementById("pre");
for(let i = 0 ; i<=6 ; i++){
show[i].addEventListener("click" , getAqwe);
}
function getAqwe(event) {
   all12.src = event.target.src;
    dimg.style.display = "block";
}


close.addEventListener("click" , closePhoto);
function closePhoto() {
    dimg.style.display = "none";
}

next.addEventListener("click",nextPhoto);
function nextPhoto() {
    let hamza = ["Cy2f0r5XcAAahFv.jpg","mujib.jpg","nature-3082832_960_720.jpg","pexels-photo-814499.jpeg","travel1.531473.jpg","waterfall.jpg"];
    let num = 0;
    all12.setAttribute("src" , hamza[num]);
    num++;
 
    
}