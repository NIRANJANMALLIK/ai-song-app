Peterpan_song="";
Harrypotter_theme_song="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Peterpan_song = loadSound("music2.mp3");
    Harrypotter_theme_song = loadSound("music.mp3");
}

function draw(){
    image(video,0,0,600,530);
}