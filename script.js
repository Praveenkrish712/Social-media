const post=document.getElementById("post")
const hashtags=document.getElementById("hashtags")
const news=document.getElementById("news")
const liveFeed=document.getElementById("live-feed")
const explore=document.querySelector(".explore")

const postTitle=document.querySelector(".post-title")
const hashtagsTitle=document.querySelector(".hashtags-title")
const newsTitle=document.querySelector(".news-title")
const liveTitle=document.querySelector(".live-feeds")
const exploreTitle=document.querySelector(".explore-container2")

hashtagsTitle.addEventListener("click",function(){
    post.style.display="none";
    news.style.display="none";
    liveFeed.style.display="none";
    hashtags.style.display="block";
    explore.style.display="block";
})

newsTitle.addEventListener("click",function(){
    post.style.display="none";
    hashtags.style.display="none";
    liveFeed.style.display="none";
    news.style.display="block";
    explore.style.display="block";
})

liveTitle.addEventListener("click",function(){
    explore.style.display="none";
    liveFeed.style.display="block";
})

postTitle.addEventListener("click",function(){
    hashtags.style.display="none";
    news.style.display="none";
    liveFeed.style.display="none";
    post.style.display="block";
    explore.style.display="block";
})

exploreTitle.addEventListener("click",function(){
    hashtags.style.display="none";
    news.style.display="none";
    liveFeed.style.display="none";
    post.style.display="block";
    explore.style.display="block";
})