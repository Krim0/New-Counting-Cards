function count() {
  let count = 0;
  let output = "";

  function countcard(card){
      switch(card){
          case 0:
              break;
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
              count++;
              break;
          case 7:
          case 8:
          case 9:
              count += 0;
              break;
          case 10:
          case 1:
          case 11:
          case 12:
          case 13:
              count--;
              break;
      }
      return (card > 0)? output = count + " Bet":
      output = count + " Hold";

  }
  let card1 = parseInt(document.getElementById("card1").value);
  let card2 = parseInt(document.getElementById("card2").value);
  let card3 = parseInt(document.getElementById("card3").value);
  let card4 = parseInt(document.getElementById("card4").value);
  let card5 = parseInt(document.getElementById("card5").value);
  countcard(card1); countcard(card2); countcard(card3); countcard(card4); countcard(card5);
  document.getElementById("count").innerHTML = output;
}


