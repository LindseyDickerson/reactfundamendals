//ES6 JS Classes

class User {
    constructor(name){
        this.name = name;
        this.type = "Trial user"
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

//Extends
class TrialUser extends User {
    trialEnding(){
        console.log('Your trial will be ending soon, ' + this.name + '. ' + 'Would you like to join our program?');
    }
}

//Instance of User class
var anonDude = new User("Anonymous");
anonDude.greet();
anonDude.status();

//Instance of TrialUser class
var trialUser = new TrialUser("Paul");
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

//Banned User Challenge
class BannedUser extends User {
    banMessage(){
        console.log('You have been banned, ' + this.name + '. ' + 'You have made too many references about Star Wars.');
    }
}

var bannedUser = new BannedUser("Chris");
bannedUser.greet(); //Welcome back, Chris
bannedUser.banMessage(); //You have been banned, Chris. You have made too many references about Star Wars.