
const fruits = {
    "apple": 4,
    "orange": 5,
    "banana": 9,
    "pineapple":3
}
for (const fruit in fruits) {
  console.log(fruit + ": " + fruits[fruit]);
}
for (const [fruit] of Object.entries(fruits)) {
  console.log(fruit );
}
Object.entries(fruits).forEach(([fruit, quantity]) => {
  console.log(fruit + ": " + quantity);
});
const keys = Object.keys(fruits);
for (let i = 0; i < keys.length; i++) {
  const fruit = keys[i];
  const quantity = fruits[fruit];
  console.log(fruit + ": " + quantity);
}
