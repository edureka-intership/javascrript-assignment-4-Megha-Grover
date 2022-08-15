var ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
    ]
console.log(ratingData);
// a. Calculate the Average rating for all the restaurants.
// b. List of all restaurants with average rating greater than or equal to 4.

var data = {};
ratingData.forEach(ele => {
   let name = ele.restaurant;
   let ratings =  ele.rating;
   if(!(name in data)){
    data[name] = [];
   }
   data[name].push(ratings);
});
console.log(data);

var avgRatings = {};
let keys = Object.keys(data);
keys.forEach(ele => {
    let name = ele;
    let ratings = data[name];
    let sum=0;
    for(let i=0;i<ratings.length;i++){
        sum+=ratings[i]
    }
    avgRatings[name] = sum/ratings.length;
});
console.log(avgRatings);
var formatted  = [];
keys.forEach(ele => {
    let val = {
        restaurantName: ele,
        avgRatings: avgRatings[ele]
    }
    formatted.push(val)

})
console.log(formatted);
//-------------b-----------------


var filtered = formatted.filter(ele=>ele.avgRatings>=4);
console.log(filtered);
