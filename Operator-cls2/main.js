//...............................assignment operator..................................
var a=5;
var b=a;
console.log(b);

var c=5;
    c+=2;
console.log(c);  //addition

var d=3;
    d-=3;
console.log(d); //subraction

var e=3;
    e**=3;
console.log(e);  //exponential

//.............................arithematic operator.................................
var num1=10;
    num2=5;
console.log(num1+num2);  //addition

var numa=10;
    numb=4;
console.log(numa-numb);  //subraction

var numc=3;
    numd=8;
console.log(numc/numd);  //division

//--------------------increment------------(pre-++a , post-a++)
var f=3;
console.log(++f);
console.log(++f);
console.log(f);  //pre..++a

var g=8;
console.log(g++);
console.log(g++);
console.log(g);  //post..a++

//--------------------decrement------------(pre...--a , post...a--)
var h=5;
console.log(--h);
console.log(--h);
console.log(h);  //pre..--a

var i=8;
console.log(i--);
console.log(i--);
console.log(i);  //post..a--

//.....................3.comparison operator..............................
var j=6;
    k=5;
console.log(j==k);      //equal
console.log(j===k);     //strict equal
console.log(j!=k);      //not equal
console.log(j!==k);     //not equal value
console.log(j>k);       //greater
console.log(j<k);       //lessthan
console.log(j>=k);      //grreter than or equal
console.log(j<=k);      //less than or equal

let age=17;
let vote= age>=18 ? "eligible":"not eligible";
console.log(vote);          //ternary operator

let ages=18;
let votes= ages>=18 ? "eligible":"not eligible";
console.log(votes);

//........................4.logigal operator..............(&&and,||or,!not)......
let s=5;
    t=6;
    u=8;
    v=4;
    w=9;
console.log((s>t)&&(u>v));   //all  condition are true output true
console.log((s>t)||(u<w));    //one condition true output true

console.log(!(s>t)||(u<w));  //oposite aah varum
