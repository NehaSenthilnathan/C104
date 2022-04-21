webcam.attach('camera');
camera=document.getElementById("camera");

webcam.set({

    width:350,
    height:300,
    image_format:png,
    png_quality:90,
});

function take_snapshot(){

    webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id = "selfie_snapshot" src = "'+data_uri+'" />'
    });
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mEC4J8yoO/model.json, modelLoaded');

function modelLoaded(){
    console.log('Model Loaded!');
}

function check(){
    img = document.getElementById("selfie_snapshot");
    classifier.classify(img, gotResult);

}

if (error) {
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
}

