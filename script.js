/* ================= TMDB API ================= */
const API_KEY = "3323bee0b5f0380bc98245f0f4138ffc";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_URL = "https://image.tmdb.org/t/p/w500";

/* ================= TRAILER CACHE ================= */
const trailerCache = {};

/* ================= TRENDING ================= */
const trendingMovies = [
{ title:"Avengers Endgame", poster:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", trailer:"TcMBFSGVi1c" },
{ title:"Spider-Man No Way Home", poster:"https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", trailer:"JfVOs4VSpmA" },
{ title:"Oppenheimer", poster:"https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", trailer:"bK6ldnjE3Y0" },
{ title:"Avatar The Way of Water", poster:"https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg", trailer:"d9MyW72ELq0" },
{ title:"John Wick 4", poster:"https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg", trailer:"qEVUtrk8_B4" }
];

/* ================= FAVORITES ================= */
const favoritesMovies = [
{ title:"Jai Bhim", year:"2021", rating:"8.7", poster:"https://tse4.mm.bing.net/th/id/OIP.xWifgVGlDykSzSwhh8dyaQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3", trailer:"nnXpbTFrqXA" }
];

/* ================= HOLLYWOOD ================= */
const hollywoodMovies = [
{ title:"War Machine", year:"2026", runtime:"1h 46m", rating:"6.4", poster:"https://th.bing.com/th?id=OIF.xZP%2bXMmtcKBZJjOF%2bvvIpg&w=299&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
{ title:"The Bride!", year:"2026", runtime:"2h 6m", rating:"5.9", poster:"https://www.koimoi.com/wp-content/new-galleries/2026/03/the-bride-box-office-first-monday-update-01-1068x561.jpg" },
{ title:"Hoppers", year:"2026", runtime:"1h 44m", rating:"7.7", poster:"https://image.tmdb.org/t/p/w500/xjtWQ2CL1mpmMNwuU5HeS4Iuwuu.jpg" }
];

/* ================= BOLLYWOOD ================= */
const bollywoodMovies=[
{ title:"The Kashmir Files", year:"2022", runtime:"2h 50m", rating:"8.5", poster:"https://image.tmdb.org/t/p/w500/2VvjJFDBFYkVgr89BjqbUl26QyW.jpg" },
{ title:"Khuda Haafiz", year:"2020", runtime:"2h 14m", rating:"7.1", poster:"https://image.tmdb.org/t/p/w500/4Glh9LgdsmlQxhUUKnCROHWdrsU.jpg" },
{ title:"Jai Bhajrangi", year:"2021", runtime:"2h 36m", rating:"6.5", poster:"https://m.media-amazon.com/images/M/MV5BYzk5MTRhNDEtOTQ5Yy00NDdmLWJlMDctZDk0YjJkNDU3NzkyXkEyXkFqcGc@._V1_.jpg" }
];

/* ================= TOLLYWOOD ================= */
const tollywoodMovies=[
{ title:"RRR", year:"2022", runtime:"3h 7m", rating:"7.8", poster:"https://image.tmdb.org/t/p/w500/u0XUBNQWlOvrh0Gd97ARGpIkL0.jpg" },
{ title:"Oke Oka Jeevitham", year:"2022", runtime:"2h 40m", rating:"7.8", poster:"https://image.tmdb.org/t/p/w500/hzorfVrtVuRoAQbMPzsvQkf3kQM.jpg" },
{ title:"Sita Ramam", year:"2022", runtime:"2h 43m", rating:"8.5", poster:"https://venkatarangan.com/blog/wp-content/uploads/2022/10/sita-ramam.jpg" ,trailer:"DeVGQx2SKvFVTJYB"},
];

/* ================= OLLYWOOD ================= */
const ollywoodMovies=[
{ title:"Daman", year:"2022", runtime:"2h 1m", rating:"8.5", poster:"https://th.bing.com/th/id/OIP.-KWC31o47vXTnN6WZyiltgHaEK?w=293&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3", trailer:"4vC1Rzq9Q0k" },
{ title:"Yesterday's Past", year:"2021", runtime:"1h 23m", rating:"7.7", poster:"https://tse4.mm.bing.net/th/id/OIP.15n9QyKbVoJNGS2lQ5uguAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3", trailer:"2mQ3qQ7s8VQ" },
{ title:"Bou Buttu Bhuta", year:"2025", runtime:"2h 56m", rating:"7.8", poster:"https://image.tmdb.org/t/p/w500/g8wFbBlKcngQnSJFUK2d5JrAWaT.jpg", trailer:"9oQ628z5x6Y" }
];

/* ================= RENDER ================= */
function renderSection(list, gridId){
const grid=document.getElementById(gridId);
if(!grid) return;

grid.innerHTML="";

list.forEach(m=>{
const poster=m.poster || "https://via.placeholder.com/500x750?text=No+Image";

grid.innerHTML+=`
<div class="movie-card">
<img src="${poster}">
<div class="movie-info">
<h3>${m.title}</h3>
${m.year?`<p>📅 ${m.year}</p>`:""}
${m.runtime?`<p>⏱ ${m.runtime}</p>`:""}
${m.rating?`<p>⭐ ${m.rating}</p>`:""}

<button onclick="${m.trailer ? `openTrailer('${m.trailer}')` : `getTrailerByName('${m.title}')`}">🎥 Trailer</button>
<button onclick="addWatchlist('${m.title}')">❤️ Watchlist</button>
<button onclick="getMovieDetails('${m.title}')">📄 Details</button>

</div>
</div>`;
});
}

/* ================= TRAILER ================= */
async function getTrailerByName(name){

if(trailerCache[name]){
openTrailer(trailerCache[name]);
return;
}

try{
const res=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(name)}`);
const data=await res.json();

if(!data.results.length) return alert("Trailer not found");

const id=data.results[0].id;

const videoRes=await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}`);
const videoData=await videoRes.json();

const trailer = videoData.results.find(v=>v.type==="Trailer" && v.site==="YouTube");

if(trailer){
trailerCache[name]=trailer.key;
openTrailer(trailer.key);
}else{
alert("Trailer not available");
}

}catch(e){
console.log(e);
}
}

function openTrailer(id){
const modal=document.getElementById("trailerModal");
const iframe=document.getElementById("trailerVideo");

modal.classList.add("show");
iframe.src=`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
}

/* CLOSE MODAL */
document.getElementById("closeTrailer").onclick=function(){
const modal=document.getElementById("trailerModal");
const iframe=document.getElementById("trailerVideo");

modal.classList.remove("show");
iframe.src="";
};

/* CLOSE ON OUTSIDE CLICK */
window.onclick=function(e){
const modal=document.getElementById("trailerModal");
if(e.target===modal){
modal.classList.remove("show");
document.getElementById("trailerVideo").src="";
}
};
/* ================= MOVIE DETAILS ================= */
async function getMovieDetails(name){

try{
const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(name)}`);
const data = await res.json();

if(!data.results.length) return alert("Details not found");

const movie = data.results[0];

const detailRes = await fetch(`${BASE_URL}/movie/${movie.id}?api_key=${API_KEY}`);
const details = await detailRes.json();

/* SHOW DETAILS MODAL */
showDetailsModal(details);

}catch(e){
console.log(e);
}
}

/* ================= DETAILS MODAL ================= */
function showDetailsModal(movie){

let genres = movie.genres.map(g=>g.name).join(", ");

const modalHTML = `
<div id="detailsModal" class="modal show">
<div class="modal-content" style="max-width:800px;aspect-ratio:auto;padding:20px;overflow:auto;">

<span id="closeDetails" style="position:absolute;top:10px;right:10px;cursor:pointer;background:red;color:#fff;padding:6px 10px;border-radius:50%;">✖</span>

<h2>${movie.title}</h2>

<img src="${IMG_URL + movie.poster_path}" style="width:200px;border-radius:10px;margin:10px 0;">

<p><b>📅 Release:</b> ${movie.release_date}</p>
<p><b>⭐ Rating:</b> ${movie.vote_average}</p>
<p><b>⏱ Runtime:</b> ${movie.runtime} min</p>
<p><b>🎭 Genres:</b> ${genres}</p>
<p><b>🌍 Language:</b> ${movie.original_language.toUpperCase()}</p>

<p style="margin-top:10px;"><b>📝 Overview:</b><br>${movie.overview}</p>

</div>
</div>
`;

document.body.insertAdjacentHTML("beforeend", modalHTML);

/* CLOSE */
document.getElementById("closeDetails").onclick = () =>{
document.getElementById("detailsModal").remove();
};

/* OUTSIDE CLICK */
window.addEventListener("click", function(e){
const modal = document.getElementById("detailsModal");
if(e.target === modal){
modal.remove();
}
});

}

/* ================= WATCHLIST ================= */
function addWatchlist(movie){
let list=JSON.parse(localStorage.getItem("watchlist"))||[];

if(!list.includes(movie)){
list.push(movie);
}

localStorage.setItem("watchlist",JSON.stringify(list));
showWatchlist();
}

function showWatchlist(){
let list=JSON.parse(localStorage.getItem("watchlist"))||[];
let html="";

list.forEach(m=>{
html+=`<div class="movie-card"><p>🎬 ${m}</p></div>`;
});

document.getElementById("watchlistGrid").innerHTML=html;
}

/* SAFE CLEAR BUTTON */
const clearBtn=document.getElementById("clearWatchlistBtn");
if(clearBtn){
clearBtn.addEventListener("click",()=>{
localStorage.removeItem("watchlist");
document.getElementById("watchlistGrid").innerHTML="";
});
}

/* ================= SEARCH ================= */
document.getElementById("searchInput").addEventListener("input", async function(){

let q=this.value.trim();

if(q.length<2){
loadMovies();
return;
}

const res=await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(q)}`);
const data=await res.json();

renderSection(data.results.map(m=>({
title:m.title,
poster:m.poster_path?IMG_URL+m.poster_path:"",
rating:m.vote_average,
year:m.release_date?.split("-")[0]
})),"moviesGrid");

});


/* ================= LOGIN ================= */
function login(){
const username=document.getElementById("username").value;
const password=document.getElementById("password").value;

if(username && password){
localStorage.setItem("user",username);
alert("Login successful ✅");
location.reload();
}else{
alert("Enter details");
}
}

function checkLogin(){
const user=localStorage.getItem("user");

if(!user){
document.getElementById("loginBox").style.display="block";
document.getElementById("mainApp").style.display="none";
}else{
document.getElementById("loginBox").style.display="none";
document.getElementById("mainApp").style.display="block";
}
}

function logout(){
localStorage.removeItem("user");
location.reload();
}

/* ================= LOAD ================= */
async function loadMovies(){
const res=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
const data=await res.json();

renderSection(data.results.map(m=>({
title:m.title,
poster:IMG_URL+m.poster_path,
rating:m.vote_average
})),"moviesGrid");
}
/* DARK MODE TOGGLE */
const toggle = document.createElement("div");
toggle.className = "theme-toggle";
toggle.innerHTML = "🌙";
document.body.appendChild(toggle);

toggle.onclick = () => {
document.body.classList.toggle("light");
};

/* HEART TOGGLE */
document.addEventListener("click", function(e){
if(e.target.classList.contains("heart-btn")){
e.target.classList.toggle("active");
}
});

/* ================= INIT ================= */
checkLogin();
loadMovies();

renderSection(trendingMovies,"trendingGrid");
renderSection(hollywoodMovies,"hollywoodGrid");
renderSection(favoritesMovies,"favoritesGrid");
renderSection(bollywoodMovies,"bollywoodGrid");
renderSection(tollywoodMovies,"tollywoodGrid");
renderSection(ollywoodMovies,"ollywoodGrid");

showWatchlist();