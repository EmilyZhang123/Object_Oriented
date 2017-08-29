//构造函数的继承
/*
*/

//一、 构造函数绑定
//使用call或apply方法，将父对象的构造函数绑定在子对象上.
/*
Animal(){
　　　　this.species = "动物";
　　}
function Cat(name,color){
　　　　Animal.apply(this, arguments);
　　　　this.name = name;
　　　　this.color = color;
　　}
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species); // 动物
*/

//二、 prototype模式
/*
/*Animal(){
　　　　this.species = "动物";
　　}
将Cat的prototype对象指向一个Animal的实例。
它相当于完全删除了prototype 对象原先的值，然后赋予一个新值
每一个实例也有一个constructor属性，默认调用prototype对象的constructor属性,指向它的构造函数。
如果没有"Cat.prototype = new Animal();"这一行，
Cat.prototype.constructor是指向Cat的；加了这一行以后，Cat.prototype.constructor指向Animal。
Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species); // 动物
*/

//三、 直接继承prototype
/*
function Animal(){ }
Animal.prototype.species = "动物";
//这一句实际上把Animal.prototype对象的constructor属性也改掉了！
//console.log(Animal.prototype.constructor); // Cat
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat;
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species); // 动物
*/

//四、 利用空对象作为中介
/*
function extend(Child, Parent) {

　　　　var F = function(){};
　　　　F.prototype = Parent.prototype;
　　　　Child.prototype = new F();
　　　　Child.prototype.constructor = Child;
//为子对象设一个uber属性，这个属性直接指向父对象的prototype属性。
//（uber是一个德语词，意思是"向上"、"上一层"。）这等于在子对象上打开一条通道，可以直接调用父对象的方法。
//这一行放在这里，只是为了实现继承的完备性，纯属备用性质。
　　　　Child.uber = Parent.prototype;
　　}
extend(Cat,Animal);
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species); // 动物
*/

//五、 拷贝继承
function Animal(){}
Animal.prototype.species = "动物";

function extend2(Child, Parent) {
　　　　var p = Parent.prototype;
　　　　var c = Child.prototype;
　　　　for (var i in p) {
　　　　　　c[i] = p[i];
　　　　　　}
　　　　c.uber = p;
　　}
extend2(Cat, Animal);
var cat1 = new Cat("大毛","黄色");
console.log(cat1.species); // 动物
