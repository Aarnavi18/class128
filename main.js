 song1="";
 song2="";
leftWristx="0";
leftWristy="0";
rightWristx="0";
rightWristx="0";
function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('posenet is initialised');
}
function draw()
{
image(video,0,0,600,500);
fill("#ff0000");
stroke("#ff0000")
if(scoreRightWrist>0.2)
circle(rightWristx,rightWristy,20)
if(rightWristy>0 && rightWristy<=100)
{document.getElementById("speed").innerHTML="speed=0.5x";
song.rate(0.5);
elseif(rightWristy>100 && rightWristy<=200)
{
    document.getElementById("speed").innerHTML="speed=1x";
    song.rate(1);
}
elseif(rightWristy>200 && rightWristy<=300)
{
    document.getElementById("speed").innerHTML="speed=1.5x";
    song.rate(1.5);
}
elseif(rightWristy>300 && rightWristy<=400)
{
    document.getElementById("speed").innerHTML="speed=2x";
    song.rate(2);
}
elseif(rightWristy>400)
{
    document.getElementById("speed").innerHTML="speed=2.5x";
    song.rate(2.5);
}
if(scoreLeftWrist > 0.2)
 { circle(leftWristX,leftWristY,20);
     InNumberleftWristY = Number(leftWristY); 
     remove_decimals = floor(InNumberleftWristY); 
     volume = remove_decimals/500; document.getElementById("volume").innerHTML = "Volume = " + volume; 
     song.setVolume(volume);
     }
}
}
function preload()
{
    song1=loadSound("music.mp3");
    song2=loadSound("music2.mp3");
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score; 
        scoreLeftWrist = results[0].pose.keypoints[9].score;
         console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
        leftWristx=results[0].pose.leftWrist.x;
        leftWristy=results[0].pose.leftWrist.y;
        console.log("leftWristx=" +leftwristx+"leftWristy=" +leftWristy);
        rightWristx=results[0].pose.rightWrist.x;
        rightWristy=results[0].pose.rightWrist.y;
        console.log("rightWristx=" +rightwristx+"rightWristy=" +rightWristy);
    }

}
