Webcam.set({
    height:300,
    width:300,
    image_format: "png",
    png_quality: 90
});
Webcam.attach("#camera")

function capture() {
    Webcam.snap(
        function (img) {
            document.getElementById("picture").innerHTML= `<img src=${img} id="captureimage">`
        }
    )
}

console.log("ml5version= "+ml5.version)
var classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wELvLpvN_/",modelloaded)

