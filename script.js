// Navbar blur saat scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if(window.scrollY > 50){
        nav.style.background = "rgba(0,0,0,.75)";
    }else{
        nav.style.background = "rgba(0,0,0,.35)";
    }
});

// Floating glow mengikuti mouse
const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "300px";
glow.style.height = "300px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background = "radial-gradient(circle, rgba(0,255,102,.18), transparent 70%)";
glow.style.transform = "translate(-50%,-50%)";
glow.style.zIndex = "-1";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

    glow.style.left = e.clientX+"px";
    glow.style.top = e.clientY+"px";

});
function copyContract() {
    const text = document.getElementById("contractAddress");

    navigator.clipboard.writeText(text.value);

    alert("Contract copied!");
}
