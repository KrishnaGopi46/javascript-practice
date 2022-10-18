//.....var.....
var a="gopi";
a="var";
console.log(a);    //a ku second value apply pannalam


console.log(b);
var b="var";
console.log(b);        //first line (print) ku maela value illa so "var" la undefined nu varum 

//......let.....
let c="let";
c="hello";
console.log(c);      //c ku second value apply pannalam

/*console.log(d);
let d=("let");
console.log(d);*/       //first line (print) ku maela value illa so "let" la error varum 

//.....const.....
const e="gopi";
console.log(e);

/*const f="gopi";
f="krish";
console.log(f);*/       //f ku second value apply pannamudiyathu

//.................DADA TYPES..................
//....1.string
let answer1 = "It's alright";       
let answer2 = "He is called 'gopi'";
let answer3 = 'He is called "krish"';
console.log(answer1,answer2,answer3);     //string means only letters (single or double quotes)

//.....2.number
let x1 = 34.00;
let x2 = 50;
let x3 = 3.14;
console.log(x1,x2,x3);     //only numbers (letters kudutha error varum)

//......3.boolean
let x = 5;
let y = 5;
let z = 6;
console.log(x==y);   //only true or false
console.log(x==z);

//....4.undefined
let aa=10.5;
let bb="gopi";
let cc;        //value onnum illana undefined varum
console.log(cc);

//.....5.empty
let dd=10.5;
let ee="gopi";
let ff;
let gg=null;   //value  illana null mattum thaan kudukanum vaera word kudutha error varum
console.log(dd,gg);

