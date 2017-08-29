//封装

//一、 生成实例对象的原始模式
/*(这样的写法有两个缺点，一是如果多生成几个实例，写起来就非常麻烦；
二是实例与原型之间，没有任何办法，可以看出有什么联系。)
*/
/*
var Cat = {
　　　　name : '',
　　　　color : ''
　　} ;
// 创建一个空对象

var cat1 = {};
// 按照原型对象的属性赋值
　　　　cat1.name = "大毛";
　　　　cat1.color = "黄色";
var cat2 = {};
　　　　cat2.name = "二毛";
　　　　cat2.color = "黑色";
*/

//二、 原始模式的改进
//(cat1和cat2之间没有内在的联系，不能反映出它们是同一个原型对象的实例。)
/*
function Cat(name,color) {
　　　　return {
　　　　　　name:name,
　　　　　　color:color
　　　　};
　　}
var cat1 = Cat("大毛","黄色");
var cat2 = Cat("二毛","黑色");
*/

//三、 构造函数模式(Constructor)
/*所谓"构造函数"，其实就是一个普通函数，但是内部使用了this变量。
对构造函数使用new运算符，就能生成实例，并且this变量会绑定在实例对象上。*/
/*
function Cat(name,color){
　　　　this.name=name;
　　　　this.color=color;
　　}
var cat1 = new Cat("大毛","黄色");
var cat2 = new Cat("二毛","黑色");
console.log(cat1.name); // 大毛
console.log(cat1.color); // 黄色
//Javascript还提供了一个instanceof运算符，验证原型对象与实例对象之间的关系。
console.log(cat1 instanceof Cat);
console.log(cat2 instanceof Cat);
*/

// 四、 Prototype模式
/*Javascript规定，每一个构造函数都有一个prototype属性，指向另一个对象。
这个对象的所有属性和方法，都会被构造函数的实例继承。
这意味着，我们可以把那些不变的属性和方法，直接定义在prototype对象上。*/

function Cat(name,color){
　　　　this.name = name;
　　　　this.color = color;
　　}
　　Cat.prototype.type = "猫科动物";
　　Cat.prototype.eat = function(){console.log("吃老鼠");};

var cat1 = new Cat("大毛","黄色");
var cat2 = new Cat("二毛","黑色");
console.log(cat1.type); // 猫科动物
cat1.eat(); // 吃老鼠
console.log(cat1.eat == cat2.eat); //true

//五、 Prototype模式的验证方法
//isPrototypeOf()
console.log(Cat.prototype.isPrototypeOf(cat1)); //true
console.log(Cat.prototype.isPrototypeOf(cat2)); //true
//hasOwnProperty()
console.log(cat1.hasOwnProperty("name"));// true
console.log(cat1.hasOwnProperty("type"));//false
//in运算符
//in运算符可以用来判断，某个实例是否含有某个属性，不管是不是本地属性。
console.log("name" in cat1); // true
console.log("type" in cat1); // true
//in运算符还可以用来遍历某个对象的所有属性。
for(var prop in cat1) {
  console.log("cat1["+prop+"]="+cat1[prop]);
}
