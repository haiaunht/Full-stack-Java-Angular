var reviews = [4, 5, 4.5, 2, 6];
var total = 0;
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var n = reviews_1[_i];
    console.log(n);
    total += n;
}
var avg = total / reviews.length;
console.log("Average values " + avg);
