let score = 100;
let inc = document.getElementById("increase"); // .querySelector("#increase")
let balance = document.getElementById("score");
let lines = document.getElementsByClassName("line");
const carousel = document.getElementsByClassName("line");
let st = document.getElementById("start");
let pts = [
	{points: 2, combo: 50, src: 'banana.png'},
	{points: 2, combo: 70, src: 'bell.png'},
	{points: 3, combo: 90, src: 'cherries.png'},
	{points: 3, combo: 110, src: 'joker.png'},
	{points: 4, combo: 130, src: 'money-bag.png'},
	{points: 4, combo: 150, src: 'orange.png'},
	{points: 5, combo: 170, src: 'poker.png'},
	{points: 6, combo: 250, src: 'start-up.png'}
];

function eve() {
	score = score + 100;
	balance.innerText = score;
}

function decrease(){
	if (score < 20 || score ==0 ){
		alert('Not enough!');
	}
	else{
			score = score - 20;
			balance.innerText = score;
			var audio = new Audio('sound.mp3');
			audio.play();
			for (var t = 0; t < 5; t++){
				flowdown(t);
				}
	setTimeout(sumup, 3000);}
			}


function flowdown(nm){
	let k = Math.floor((Math.random() * 10)+3);
	let timerId = setInterval(() => move(lines[nm]), 250);
	setTimeout(() => { clearInterval(timerId) }, k*250);
}


function getKeyByValue(object, value) { 
    return Object.keys(object).find(key => object[key] === value); 
} 

function sumup(){
	var nb =[];
	let occur = {};
	occur['banana.png'] = 0;
	occur['bell.png'] = 0;
	occur['cherries.png'] = 0;
	occur['money-bag.png'] = 0;
	occur['joker.png'] = 0;
	occur['orange.png'] = 0;
	occur['start-up.png'] = 0;
	occur['joker.png'] = 0;
	for (var l=0;l<5;l++)
	occur[lines[l].children[2].firstChild.src.replace("file:///home/dasha/Desktop/Dev/JS/","")]+=1;//specifically for my file sys, change for yours
	console.log(occur);
	var ind=0;
	for (var x in occur) {
		if (occur[x]!=0 && occur[x]!=1) {
			nb[ind] = new Array(2);
			nb[ind][0] = x;
			nb[ind][1] = occur[x];
			ind++;
		}
	}
	var aux=0;
	console.log(nb);
	for (var ctr=0; ctr<nb.length; ctr++) {
		if (nb[ctr][1] == 5){
			for (var elem =0;elem<8;elem++){
				if (pts[elem].src == nb[ctr][0]){
					aux=pts[elem].combo;
				}
			}
		}
		else if (nb[ctr][1]==4){
			for (var elem =0;elem<8;elem++){
				if (pts[elem].src == nb[ctr][0]){
					aux=pts[elem].points * pts[elem].points *4;
				}
		}
	}
		else if (nb[ctr][1]==3 || nb[ctr][1]==2){
			for (var elem =0;elem<8;elem++){
				if (pts[elem].src == nb[ctr][0]){
					aux+=nb[ctr][1]*pts[elem].points;
				}
		}

	}
	else if (nb[ctr][1]==3 && nb[(ctr+1)%nb.length][1]==2){
			for (var elem =0;elem<8;elem++){
				if (pts[elem].src == nb[ctr][0]){
					var fst = pts[elem].points;
				}
				if (pts[elem].src == nb[(ctr+1)%nb.length][0]){
					var scd = pts[elem].points;
				}
			}
			aux=(fst+1)*nb[ctr][1]+nb[(ctr+1)%nb.length][1]*scd;
		}
		
	}
	console.log(aux);
	score+=aux;
	balance.innerText = score;
}

let imgAr = ["cherries.png", "banana.png", "bell.png", "money-bag.png","joker.png", "orange.png", "start-up.png","joker.png"]

document.querySelector(".main").addEventListener("load", random_image());

function random_image(){
	let x;
	let arr = document.getElementsByClassName('active-wrap');
	for (x of arr) {
		var num = Math.floor((Math.random() * 8));
		x.firstChild.src = imgAr[num];
	}
	arr = document.getElementsByClassName('inactive-top-wrap');
	for (x of arr) {
		var num = Math.floor((Math.random() * 8));
		x.firstChild.src = imgAr[num];
	}
	arr = document.getElementsByClassName('inactive-bottom-wrap');
	for (x of arr) {
		var num = Math.floor((Math.random() * 8));
		x.firstChild.src = imgAr[num];
	}
	arr = document.getElementsByClassName('hidden-wrap');
	for (x of arr) {
		let num = Math.floor((Math.random() * 8));
		x.firstChild.src = imgAr[num];
	}
}

function move(line) {
	let kids = line.children;
	for(var i = 3; i > 0; i--){
		kids[i].firstChild.src = kids[i-1].firstChild.src;
	}
	let rnd = Math.floor((Math.random() * 8));
	kids[0].firstChild.src = imgAr[rnd];
}
