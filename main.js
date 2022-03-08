noseX=0;
noseY=0;

function preload() {
    clown_nose=loadImage('https://i.postimg.cc/J4ZkYNv5/Clown-nose-large.png');
}

function setup() {
    canvas=createCanvas(350, 350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350, 350);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet is installed!')
}

function draw() {
    image(video, 0, 0, 350, 350);
    image(clown_nose, noseX-25, noseY-25, 55, 55);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function gotPoses(results) {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x = "+ results[0].pose.nose.x);
    console.log("nose y = "+ results[0].pose.nose.y);
}