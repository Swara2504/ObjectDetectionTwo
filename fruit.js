img="";
status="";
function setup()
{
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function preload()
{
    img= loadImage('fruitBasket.jpg');
}
function draw()
{
    image(img,0,0,640,420);
}
function modelLoaded()
{
    status= true;
    objectDetector.detect(img,gotResult);
}
function gotResult(results)
{
    console.log(results);
}
function back()
{
    window.location = "index.html";
}