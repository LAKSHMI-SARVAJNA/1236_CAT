let onbulb = document.getElementById("onbulb")
let imagecat = document.getElementById("imagecat")
let switchon = document.getElementById("switchon")
let onbu= document.getElementById("onbu")
let offbu = document.getElementById("offbu")
function onbutton()
{
    onbulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    imagecat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png"
    switchon.textContent="Switch On"
    switchon.style.color = "green";
    
}
function offbutton()
{
    onbulb.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    imagecat.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"
    switchon.textContent="Switch Off"
    switchon.style.color = "red";
    
}


