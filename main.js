



Webcam.set({ 
    width:350,
    height: 400,
    image_format: "jpeg",
    jpeg_quality: 90 
});

    camera = document.getElementById("camera");

    Webcam.attach('#camera'); 


function take_snapShot () {
    Webcam.snap(function (data_uri) {
document.getElementById("resut_webcam").innerHTML = "<img id='img1' src ='" + data_uri + "' >";
    });

   
};

console.log("ml5version : " , ml5.version);
 
classiffer = ml5.classiffer("https://teachablemachine.withgoogle.com/models/dG57RMc2H/ ",modelLoaded)

   
