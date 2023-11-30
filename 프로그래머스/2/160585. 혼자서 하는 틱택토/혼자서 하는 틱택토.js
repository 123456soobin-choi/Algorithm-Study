function solution(board) {

  function gameOver(arr,s) {
    //가로 체크
    for (let y = 0; y < 3; y++) {
      if (arr[y][0] === s && arr[y][1] === s && arr[y][2] === s) {
        return true;
      }
    }

    // 세로 체크
    for (let x = 0; x < 3; x++) {
      if (arr[0][x] === s && arr[1][x] === s && arr[2][x] === s) {
        return true;
      }
    }

    //대각선 체크
    if (arr[0][0] == s && arr[1][1] == s && arr[2][2] == s) {
      return true;
    }
    if (arr[0][2] == s && arr[1][1] == s && arr[2][0] == s) {
      return true;
    }

    return false;
  }


  // O,X의 개수중에 O<X면 나올수 없음
  board = board.map((element) => {
     return element.split(""); 
  });
  
  let countO = 0;
  let countX = 0;
    
  for (let y = 0; y < 3; y++) {
      for (let x = 0; x < 3; x++) {
          if (board[y][x] === "O") {
              countO ++;
          }
          if (board[y][x] === "X") {
              countX ++;
          }
      } 
  }
  
  //X가 더 많은 경우
  if (countO < countX) {
      return 0;
  }
  
  //두 수가 같을때 O에서 이미 끝냈는지
  if (countO === countX) {
    if (gameOver(board, "O") === true) {
      return 0; 
    } else{
      return 1;
    }
  }

// O랑 X가 1개 차이 나는 경우
if(countO===countX+1){
  if(gameOver(board, "X") === false){
    return 1;
  }
}
  return 0;
}

// 나올 수 없는 상황!
// 1. 선공 O와 후공 X의 개수가 올바르지 않은 경우.
// 2. O와 X 둘 다 승리하는 경우.
// 3. O가 승리했는데 X가 수를 더 놓는 경우.
// 4. X가 승리했는데 O와 X의 수가 같지 않은 경우