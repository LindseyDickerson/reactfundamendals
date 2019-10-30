class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

var userOne = new User("Paul", "O'Connor", 'poconnor@elevenfifty.org');
console.log(userOne.first);//undefined
console.log(userOne.f);//Paul
console.log(userOne.l);//O'Connor
console.log(userOne);//User {f: "Paul", l: "O'Connor", email: "poconnor@elevenfifty.org"}

class Cars {
    constructor(make, model, year) {
        this.ma = make;
        this.mo = model;
        this.ye = year;
    }
}
var carInfo = new Cars("Lexus", "RX350", 2009);
console.log(carInfo.ma); //Lexus
console.log(carInfo.mo); //RX350
console.log(carInfo.ye); //2009
console.log(carInfo); //Cars { ma: 'Lexus', mo: 'RX350', ye: 2009 }
console.log(carInfo.ma, carInfo.mo, carInfo.ye); //Lexus RX350 2009