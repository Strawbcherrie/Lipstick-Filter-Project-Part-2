function preload(){

}

function setup(){
    canvas = createCanvas(400,500);
    canvas.center();
    // these are predifined functions of p5
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();

    poseNet = ml5.poseNet(video, ModelLoaded);
    // poseNet is a variable which stores the poseNet function so that it can be loaded to ml5 to identify or compare the point of the body which is nose here and then the modeLoaded function is called for our reference which will show the text in console.
    poseNet.on('pose', gotPoses);
}

function ModelLoaded(){
    console.log(ModelLoaded);
}

function draw(){
    image(video, 0, 0, 400, 300);
}

function download(){
    save('miwacl.png');
}

function gotPoses(){
    if(results.length > 0){
        // why? above document.getelementbyid = ()
        console.log(results);
        nosex= results[0].pose.nose.x;
        nosey= results[0].pose.nose.y;
        console.log("nose x : " + nosex);
        console.log("nose y : " + nosey);

        // why not nosex variable and results.....
    }
}

