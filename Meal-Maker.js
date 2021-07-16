const menu = {
  _courses: {
    appetizers:[],
    mains:[],
    desserts:[],
  },
  get appetizers() { 
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers){
    this._courses.appetizers = appetizers;
  },
  set mains(mains){
    this._courses.mains = mains;
  },
  set desserts(desserts){
    this._courses.desserts = desserts;
   },

  get courses () {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName,dishName,dishPrice) {
    const dish = {
      name:dishName,
      price:dishPrice,
    };
     return this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses [courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, and the total price is ${totalPrice} `;
  }  
};

menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'Fries', 3.20);
menu.addDishToCourse('appetizers', 'Vegetables', 4.00);

menu.addDishToCourse('main', 'Chicken', 4.25);
menu.addDishToCourse('main', 'Fish', 5.24);
menu.addDishToCourse('main', 'Steak', 6.25);

menu.addDishToCourse('dessert', 'Milk', 2.25);
menu.addDishToCourse('dessert', 'Cake', 3.25);
menu.addDishToCourse('dessert', 'Ice cream', 1.25);

let meal = menu.generateRandomMeal();
console.log(meal);



