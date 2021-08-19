let reviews : number[] = [4,5,4.5,2,6]

let total : number = 0;
for (let n of reviews) {
  console.log(n);
  total += n;
}

let avg : number = total / reviews.length
console.log("Average values " + avg)