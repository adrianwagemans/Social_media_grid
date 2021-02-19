document.querySelector('.button').addEventListener('click', changeColors);

var b = document.querySelectorAll('.nFollowers, h1, h2');
var fl = document.querySelectorAll('.followers, .likes');

function changeToBrigth() {
  for (var i = 0; i < fl.length; i++) {
    fl[i].classList.toggle('toBrigth');
  }
}
function changeToDark() {
  for (var i = 0; i < b.length; i++) {
    b[i].classList.toggle('toDark');
  }
}

function changeColors() {
  document.querySelector('.main').classList.toggle('white');
  changeToBrigth();
  changeToDark();
  document.querySelector('.ball').classList.toggle('bkWhite');
  document.querySelector('.button').classList.toggle('toGrey');
}
