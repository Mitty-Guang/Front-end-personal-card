var follows_num = 114514;
document.getElementById("follows_num").innerHTML=follows_num;
var isfollowed = 0;
function follow() {
    follows_num++;
    document.getElementById("follows_num").innerHTML=follows_num;
    document.getElementById("follow_btn").style.display = "none";
    document.getElementById("unfollow_btn").style.display = "block";
    isfollowed = 1;
}
function unfollow() {
    follows_num--;
    document.getElementById("follows_num").innerHTML=follows_num;
    document.getElementById("unfollow_btn").style.display = "none";
    document.getElementById("follow_btn").style.display = "block";
    isfollowed = 0;
}

var likes_num = 1919810
document.getElementById("likes_num").innerHTML=likes_num;
var isliked = 0;
function like() {
    likes_num++;
    document.getElementById("likes_num").innerHTML=likes_num;
    document.getElementById("like_btn").style.display = "none";
    document.getElementById("unlike_btn").style.display = "block";
    isfollowed = 1;
}
function unlike() {
    likes_num--;
    document.getElementById("likes_num").innerHTML=likes_num;
    document.getElementById("unlike_btn").style.display = "none";
    document.getElementById("like_btn").style.display = "block";
    isfollowed = 0;
}