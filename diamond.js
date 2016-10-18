const raw = function (spaces, stars){
  let space = "";
  let star = "";
  for (let a = 1; a <= spaces; a++){
    space += " ";
  }
  for (let a = 1; a <= stars; a++){
    star += "*";
  }
  return space + star;
}
const diamond = function (x){
  if (x % 2 === 0){
    x++;
  }
  for (let a = (x - 1) / 2, c = 1; a >= 0; a--, c += 2){
    console.log(raw (a, c));
  }
  for (let a = 1, c = x - 2; c > 0; a++, c -= 2){
    console.log(raw (a, c));
  }
}
diamond(7);