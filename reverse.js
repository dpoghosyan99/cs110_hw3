const reverse = function (x){
  const reversed_array = [];
  for (let a = 0; a < x.length; a++){
    reversed_array[a] = x[(x.length - 1) - a];
  }
  console.log (reversed_array);
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
reverse(array);
