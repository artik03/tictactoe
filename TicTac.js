const items = document.getElementsByClassName('item');
const item1 = document.getElementsByClassName('item1')[0];
const item2 = document.getElementsByClassName('item2')[0];
const item3 = document.getElementsByClassName('item3')[0];
const item4 = document.getElementsByClassName('item4')[0];
const item5 = document.getElementsByClassName('item5')[0];
const item6 = document.getElementsByClassName('item6')[0];
const item7 = document.getElementsByClassName('item7')[0];
const item8 = document.getElementsByClassName('item8')[0];
const item9 = document.getElementsByClassName('item9')[0];
const titlePlayer = document.getElementsByTagName('span')[0];
const resetButton = document.getElementsByTagName('button')[0];
const resultText = document.getElementById('resultText');
const line = document.getElementsByTagName('hr')[0];

let symbol = 'X';
let winner = '';
let moveCount = 0;
let boardState =
[
  [[''],[''],['']],
  [[''],[''],['']],
  [[''],[''],['']]
];

function referee() {
  /*
  [1,2,3]
  [4,5,6]
  [7,8,9]
  [1,4,7]
  [2,5,8]
  [3,6,9]
  [1,5,9]
  [3,5,7]
  */
  if (boardState[0][0] === boardState[0][1] && boardState[0][1] === boardState[0][2]) {
    winner = boardState[0][0];
    line.setAttribute("id", "win1");
    item1.classList.add('animateClass');
    item2.classList.add("animateClass");
    item3.classList.add("animateClass");

    resultText.innerHTML = 'Player ' + winner + ' wins!';
    resultText.style.display = 'block';
  }
  else if (boardState[1][0] === boardState[1][1] && boardState[1][1] === boardState[1][2]) {
    winner = boardState[1][0];
    line.setAttribute("id", "win2");
    item4.classList.add('animateClass');
    item5.classList.add("animateClass");
    item6.classList.add("animateClass");

    resultText.innerHTML = 'Player ' + winner + ' wins!';
    resultText.style.display = 'block';
  }
  else if (boardState[2][0] === boardState[2][1] && boardState[2][1] === boardState[2][2]) {
    winner = boardState[2][0];
    line.setAttribute("id", "win3");
    item7.classList.add('animateClass');
    item8.classList.add("animateClass");
    item9.classList.add("animateClass");

    resultText.innerHTML = 'Player ' + winner + ' wins!';
    resultText.style.display = 'block';
  }
  else if (boardState[0][0] === boardState[1][0] && boardState[1][0] === boardState[2][0]) {
    winner = boardState[0][0];
    line.setAttribute("id", "win4");
    item1.classList.add('animateClass');
    item4.classList.add("animateClass");
    item7.classList.add("animateClass");

    resultText.innerHTML = 'Player ' + winner + ' wins!';
    resultText.style.display = 'block';
  }
  else if (boardState[0][1] === boardState[1][1] && boardState[1][1] === boardState[2][1]) {
    winner = boardState[0][1];
    line.setAttribute("id", "win5");
    item2.classList.add('animateClass');
    item5.classList.add("animateClass");
    item8.classList.add("animateClass");

    resultText.innerHTML = 'Player ' + winner + ' wins!';
    resultText.style.display = 'block';
  }
  else if (boardState[0][2] === boardState[1][2] && boardState[1][2] === boardState[2][2]) {
    winner = boardState[0][2];
    line.setAttribute("id", "win6");
    item3.classList.add('animateClass');
    item6.classList.add("animateClass");
    item9.classList.add("animateClass");

    resultText.innerHTML = 'Player ' + winner + ' wins!';
    resultText.style.display = 'block';
  }
  else if (boardState[0][0] === boardState[1][1] && boardState[1][1] === boardState[2][2]) {
    winner = boardState[0][0];
    line.setAttribute("id", "win7");
    item1.classList.add('animateClass');
    item5.classList.add("animateClass");
    item9.classList.add("animateClass");
    resultText.innerHTML = 'Player ' + winner + ' wins!';
    resultText.style.display = 'block';
  }
  else if (boardState[0][2] === boardState[1][1] && boardState[1][1] === boardState[2][0]) {
    winner = boardState[0][2];
    line.setAttribute("id", "win8");
    item3.classList.add('animateClass');
    item5.classList.add("animateClass");
    item7.classList.add("animateClass");
    resultText.innerHTML = 'Player ' + winner + ' wins!';
    resultText.style.display = 'block';
  }
    else if (moveCount == 9) {
      for (const item of items) {
      item.classList.add('animateClass');
      }
      resultText.innerHTML = 'Draw!';
      resultText.style.display = 'block';
    }
}


item1.addEventListener('click', function onClick1() {
  if (item1.innerHTML === '' && winner === '')
  {
  boardState[0][0] = symbol;
  item1.innerHTML= symbol;
  if (symbol === 'X') {
    item1.style.color = "#DA8815";
    symbol = 'O';
    titlePlayer.innerHTML = symbol;
    titlePlayer.style.color = "#15C9DA";
  } else {
    item1.style.color = "#15C9DA";
    symbol = 'X';
    titlePlayer.innerHTML = symbol;
    titlePlayer.style.color = "#DA8815";
  }
  moveCount++;
  }
});
item2.addEventListener('click', function onClick2() {
  if (item2.innerHTML === '' && winner === '')
  {
  boardState[0][1] = symbol;
  item2.innerHTML= symbol;
  if (symbol === 'X') {
    item2.style.color = "#DA8815";
    symbol = 'O';
    titlePlayer.innerHTML = symbol;
    titlePlayer.style.color = "#15C9DA";
  } else {
    item2.style.color = "#15C9DA";
    symbol = 'X';
    titlePlayer.innerHTML = symbol;
    titlePlayer.style.color = "#DA8815";
  }
  moveCount++;
  }
});
item3.addEventListener('click', function onClick3() {
  if (item3.innerHTML === '' && winner === '')
  {
  boardState[0][2] = symbol;
  item3.innerHTML= symbol;
  if (symbol === 'X') {
    item3.style.color = "#DA8815";
    symbol = 'O';
    titlePlayer.innerHTML = symbol;
    titlePlayer.style.color = "#15C9DA";
  } else {
    item3.style.color = "#15C9DA";
    symbol = 'X';
    titlePlayer.innerHTML = symbol;
    titlePlayer.style.color = "#DA8815";
  }
  moveCount++;
  }
});
item4.addEventListener('click', function onClick4() {
  if (item4.innerHTML === '' && winner === '')
  {
  boardState[1][0] = symbol;
  item4.innerHTML= symbol;
  if (symbol === 'X') {
    item4.style.color = "#DA8815";
    symbol = 'O';
    titlePlayer.innerHTML = symbol;
    titlePlayer.style.color = "#15C9DA";
  } else {
    item4.style.color = "#15C9DA";
    symbol = 'X';
    titlePlayer.innerHTML = symbol;
    titlePlayer.style.color = "#DA8815";
  }
  moveCount++;
  }
});
item5.addEventListener('click', function onClick5() {
  if (item5.innerHTML === '' && winner === '')
  {
  boardState[1][1] = symbol;
  item5.innerHTML= symbol;
  if (symbol === 'X') {
    item5.style.color = "#DA8815";
    symbol = 'O';
    titlePlayer.innerHTML = symbol;
    titlePlayer.style.color = "#15C9DA";
  } else {
    item5.style.color = "#15C9DA";
    symbol = 'X';
    titlePlayer.innerHTML = symbol;
    titlePlayer.style.color = "#DA8815";
  }
  moveCount++;
  }
});
item6.addEventListener('click', function onClick6() {
  if (item6.innerHTML === '' && winner === '')
  {
  boardState[1][2] = symbol;
  item6.innerHTML= symbol;
  if (symbol === 'X') {
    item6.style.color = "#DA8815";
    symbol = 'O';
    titlePlayer.innerHTML = symbol;
    titlePlayer.style.color = "#15C9DA";
  } else {
    item6.style.color = "#15C9DA";
    symbol = 'X';
    titlePlayer.innerHTML = symbol;
    titlePlayer.style.color = "#DA8815";
  }
  moveCount++;
  }
});
item7.addEventListener('click', function onClick7() {
  if (item7.innerHTML === '' && winner === '')
  {
  boardState[2][0] = symbol;
  item7.innerHTML= symbol;
  if (symbol === 'X') {
    item7.style.color = "#DA8815";
    symbol = 'O';
    titlePlayer.innerHTML = symbol;
    titlePlayer.style.color = "#15C9DA";
  } else {
    item7.style.color = "#15C9DA";
    symbol = 'X';
    titlePlayer.innerHTML = symbol;
    titlePlayer.style.color = "#DA8815";
  }
  moveCount++;
  }
});
item8.addEventListener('click', function onClick8() {
  if (item8.innerHTML === '' && winner === '')
  {
  boardState[2][1] = symbol;
  item8.innerHTML= symbol;
  if (symbol === 'X') {
    item8.style.color = "#DA8815";
    symbol = 'O';
    titlePlayer.innerHTML = symbol;
    titlePlayer.style.color = "#15C9DA";
  } else {
    item8.style.color = "#15C9DA";
    symbol = 'X';
    titlePlayer.innerHTML = symbol;
    titlePlayer.style.color = "#DA8815";
  }
  moveCount++;
  }
});
item9.addEventListener('click', function onClick9() {
  if (item9.innerHTML === '' && winner === '')
  {
  boardState[2][2] = symbol;
  item9.innerHTML = symbol;
  if (symbol === 'X') {
    item9.style.color = "#DA8815";
    symbol = 'O';
    titlePlayer.innerHTML = symbol;
    titlePlayer.style.color = "#15C9DA";
  } else {
    item9.style.color = "#15C9DA";
    symbol = 'X';
    titlePlayer.innerHTML = symbol;
    titlePlayer.style.color = "#DA8815";
  }
  moveCount++;
  }
});

for (const item of items) {
  item.addEventListener('click', function onClick() {
    referee();
  });
}

resetButton.addEventListener('click', function onClickReset() {
    for (const item of items) {
      item.style.color = '';
      item.innerHTML = '';
      symbol = 'X';
      titlePlayer.innerHTML = symbol;
      titlePlayer.style.color = '';
      item.classList.remove("animateClass");
    }
    boardState =
    [
      [[''],[''],['']],
      [[''],[''],['']],
      [[''],[''],['']]
    ];
    moveCount = 0;
    winner = '';
    resultText.innerHTML = '';
    resultText.style.display = 'none';
    line.removeAttribute('id');
});
