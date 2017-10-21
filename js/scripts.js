// target your button and assign an ask function that outputs a random image to your page
 document.getElementById('magicButton').addEventListener("click", function(){
  let randNum = Math.random() * (20 - 1) + 1;
  let newUrl = "url('img/magic8ball_"+parseInt(Math.random()*(20-0)-0)+".png')";
  document.getElementById('magicPics').style.backgroundImage = newUrl;
});
