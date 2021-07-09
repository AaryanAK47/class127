song = "";

function preload()
{
song = loadSound("music.mp3")
}

function setup() { 
    canvas = createcanvas(600,500);
    canvas.center();

    video= createcapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,0,0,600,500);
}

function play()
{
    song.play();
}
