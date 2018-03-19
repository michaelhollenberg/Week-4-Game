var images = function() {
    const pics = [
        "https://farm5.staticflickr.com/4659/39135371235_50a1499cbc_h.jpg",
        "http://pokerdb.thehendonmob.com/pictures/Michael_Hollenberg_winner__1_.jpg",
        "https://pnimg.net/w/articles/4/53b/e7c1874375.jpg",
        "https://media.cardplayer.com/assets/players/000/091/723/profile/original_DanColmantier1.JPG"
    ]
    return pics;
}
var points = [20, 10, 5, 1];
var scoreCounter = 0;



var randomTarget = Math.floor(Math.random() * 100 + 20);

function setScoresToImages(holder) {
    const currentImages = images();
    for (var i = 0; i < points.length; i += 1) {
        const imagePokerPlayer = $("<img>");
        imagePokerPlayer.addClass("poker-image");
        imagePokerPlayer.attr("src", currentImages[i]);
        imagePokerPlayer.attr("points", points[i]);
        holder.append(imagePokerPlayer);
    
    }
}

function clicks(holder, scoreHolder) {
    holder.on("click", ".poker-image", function() {
        scoreCounter += parseInt(($(this).attr("points")));
        scoreHolder.text(scoreCounter);

        if(scoreCounter === randomTarget) {
            alert("You won");

        } else if (scoreCounter > randomTarget) {
            alert("You lost");
        }
    });

}
$("#target-number").text(randomTarget);
const currentScore = $("#current-score");
setScoresToImages($("#poker-pictures"));

clicks($("#poker-pictures"), currentScore);

