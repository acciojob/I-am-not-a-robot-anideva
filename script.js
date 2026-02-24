//your code here
const main= document.querySelector("main");

const heading =document.createElement("h3");
heading.id="h";
heading.textContent="Please click on the identical tiles to verify that you are not a robot.";

const imageContainer= document.createElement("div");
imageContainer.classList.add("flex");

const resetBtn = document.createElement("button");
resetBtn.id ="reset";
resetBtn.textContent ="Reset";
resetBtn.style.display ="none";

const verifyBtn = document.createElement("button");
verifyBtn.is="verify";
verifyBtn.textContent="Verify";

const para= document.createElement("p");
para.id ="para";
const tiles =["img1", "img2", "img3", "img4", "img5" ];
let selected = [];

main.append(heading,imageContainer, resetBtn, verifyBtn, para);

resetBtn.style.display= "none";
verifyBtn.style.display= "none";

// tiles.forEach(cls=> {
//     const img = document.createElement("img");
//     img.classList.add(cls);
//     imageContainer.appendChild(img);
// });

function generateTiles(){
const randomIndex = Math.floor(Math.random() * tiles.length);
const dublicate = tiles[randomIndex];
const finalTiles =[...tiles, dublicate];
finalTiles.sort(() => Math.random() -0.5);


finalTiles.forEach(cls => {
    const img= document.createElement("img");

    img.classList.add(cls); //giver image form css
    img.dataset.id =cls; //needed later for verification

    img.addEventListener("click", handleClick);
     
    imageContainer.appendChild(img);
});
}



function handleClick(e) {
    const img=e.target;
    if (selected.includes(img)) return; 
    if (selected.length === 2) return;

    img.classList.add("selected");
    selected.push(img);

    resetBtn.style.display ="inline-block";

    if(selected.length === 2) {
        verifyBtn.style.display = "inline-block";
    }

}

//add verify logic
verifyBtn.onclick = function () {
    const id1 = selected[0].dataset.id;
    const id2 = selected [1].dataset.id;
 
    if (id1 === id2) {
        para.textContent ="You are a human . Congratulations!";
    }
    else {
        para.textContent="We can't verify you as a human.You selected the non-identical tiles.";
    }
    verifyBtn.style.display ="none";

}

//reset logic
resetBtn.onclick = function() {
    imageContainer.innerHTML="";
    selected =[];
    verifyBtn.style.display ="none";
    resetBtn.style.display="none";
    para.textContent="";

generateTiles();
}