// // let a = 5
// // let c = 2
// //  d = a/c
// //  console.log(d);



// //  e = parseInt(d)
// //  console.log(e);
// //  let name = "Thanh"
// //  let name2 = `alo ${name}`

// console.log("2020"-"2000");

// Cho người dùng nhậP vào hai số; In ra tổng hiệU tích thương


// var a = Number(prompt("Nhập số 1"));
// var b = Number(prompt("Nhập số 2"));
// c = a + b
// d = a - b
// t = a * b
// f = a / b
// console.log(`Tổng là ${c}`);
// console.log(`Hiệu là ${d}`); 
// console.log(`Tích la ${t}`);
// console.log(`Thương la ${f}`);

// let a = 10
// console.log(a++);
// console.log(a);

//Nhập vào bán kính hình tròn, in ra chu vi và diện tích hình tròn.
// let banKinhHinhTron = Number(prompt ("Nhập bán kính hình tròn"))
// a = banKinhHinhTron*2*Math.PI
// b = banKinhHinhTron**2*Math.PI
// console.log(`Chu vi hình tròn là ${a.toFixed(2)}`);
// console.log(`Diện tích hình tròn là ${b.toFixed(2)}`);

// let number = Number(prompt("Nhập số"))
// x = number
// y1 = 4 * (x**2 + 10*x*Math.sqrt(x)+ 3*x +1)
// console.log(y1);

//Nhập vào số tiền X vnđ (giả sử số tiền là bội số của 10.000vnđ), đổi xem số 
//tiền đó được bao nhiêu tờ 100.000, 50.000, 20.000, 10.000 vnđ.
//Ví dụ: 320.000 vnđ = 3 tờ 100.000 + 0 tờ 50.000 + 1 tờ 20.000 + 0 tờ 10.000 vnđ

// let number = Number(prompt("Nhập số tiền"))
// x = number
// a1 = parseInt(x/100000)
// a2 = parseInt(x%100000)
// b1 = parseInt(a2/50000)
// b2 = parseInt(a2%50000)
// c1 = parseInt(b2/20000)
//  c2 = parseInt(b2%20000)
//  d1 = parseInt(c2/10000)
//  d2 = parseInt(c2%10000)
//  console.log(`${x}vnd = ${a1} tờ 100000 + ${b1} tờ 50000 + ${c1} tờ 20000 + ${d1} tờ 100000`);


//Nhập 1 số có 3 chữ số, tính tổng các chữ số của số đó
//Ví dụ: số 123 có tổng các chữ số là: 1 + 2 + 3 = 6.

// let number2 = Number(prompt("Nhập số tiền"))
// x = number2
// a = parseInt(x/100)
// a2 = parseInt(x%100)
// b = parseInt(a2/10)
// b2 = parseInt(a2%10)
// t = a + b + b2
// console.log(`Tong cac chu so la "${t}`);