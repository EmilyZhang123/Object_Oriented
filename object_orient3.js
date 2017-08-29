//非构造函数的继承
//object()方法
/*
var Chinese = {
　　　　nation:'中国'
　　};
var Doctor ={
　　　　career:'医生'
　　};
function object(o) {
　　　　function F() {}
　　　　F.prototype = o;
　　　　return new F();
　　}
var Doctor = object(Chinese);
console.log(Doctor.nation);
*/

//浅拷贝
/*
function extendCopy(p) {
　　　　var c = {};
　　　　for (var i in p) {
　　　　　　c[i] = p[i];
　　　　}
　　　　c.uber = p;
　　　　return c;
　　}
var Doctor = extendCopy(Chinese);
Doctor.career = '医生';
console.log(Doctor.nation); //
Chinese.birthPlaces = ['北京','上海','香港'];
var Doctor = extendCopy(Chinese);
Doctor.birthPlaces.push('厦门');
console.log(Doctor.birthPlaces); //北京, 上海, 香港, 厦门
console.log(Chinese.birthPlaces); //北京, 上海, 香港, 厦门
//extendCopy()只是拷贝基本类型的数据，我们把这种拷贝叫做"浅拷贝"。这是早期jQuery实现继承的方式
*/

//深拷贝
var Chinese = {
　　　　nation:'中国'
　　};
var Doctor ={
　　　　career:'医生'
　　};
function deepCopy(p, c) {
　　　　 c = c || {};
　　　　for (var i in p) {
　　　　　　if (typeof p[i] === 'object') {
　　　　　　　　c[i] = (p[i].constructor === Array) ? [] : {};
　　　　　　　　deepCopy(p[i], c[i]);
　　　　　　} else {
　　　　　　　　　c[i] = p[i];
　　　　　　}
　　　　}
　　　　return c;
　　}
var Doctor = deepCopy(Chinese);
Chinese.birthPlaces = ['北京','上海','香港'];
Doctor.birthPlaces.push('厦门');
console.log(Doctor.birthPlaces); //北京, 上海, 香港, 厦门
console.log(Chinese.birthPlaces); //北京, 上海, 香港
