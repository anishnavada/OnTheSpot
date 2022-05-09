const title = document.getElementById("title");
const line1 = document.getElementById("l1"); 
const line2 = document.getElementById("l2");
const downArrow = document.getElementById('down-arrow');
const downArrowHover = document.getElementById('down-arrow-hover');
const form = document.getElementById("form");
const formTop = document.getElementById("formTop");
const notification = document.getElementById("notification");

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

async function showText(){
    await delay(1000);
    title.style.opacity="1";
    await delay(2000);
    line1.style.opacity="1";
    await delay(2000);
    line2.style.opacity="1";
    await delay(2000);
    downArrow.style.opacity="1";
    downArrowHover.style.opacity="1";
}

downArrow.addEventListener('mouseover', function handleMouseOver() {
    downArrow.style.display = 'none';
    downArrowHover.style.display = "block"; 
    console.log("HOVER");
});

downArrowHover.addEventListener('mouseout', function handleMouseOver() {
    downArrowHover.style.display = 'none';
    downArrow.style.display = "block"; 
});

downArrowHover.addEventListener('click', function(){
    form.style.display = "block";
    formTop.scrollIntoView({behavior: "smooth", 
                                  block: "start", 
                                  inline: "nearest"});
})

function showModal(){
    notification.style.display = "block";
}
