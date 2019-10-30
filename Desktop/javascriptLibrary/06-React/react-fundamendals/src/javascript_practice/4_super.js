class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User"
    }
    //Method 1
    greet(){
        console.log('Welcome back, ' + this.name);
    }
    //Method 2
    status(){
        console.log('Current status: ' + this.type);
    }
}

//Instance of the class/new object
var anonDude = new User("Anonymous dude");
anonDude.greet();
anonDude.status();

//Now into the Super function
class BronzeLevelUser extends User {
    //we add the ccinfo property to the user here.
    //If you are going to use 'this' in your constructor, you must have super that points to the parent constructor.
    super(username, password, ccinfo) {
        //The 'this' keyword wouldn't work without super.
        this.type = "Bronze User";
        this.ccinfo = ccinfo;
    }
}

var bronzeGuy = new BronzeLevelUser("Bronze Dude", "bronze7589", "424242424242");
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);