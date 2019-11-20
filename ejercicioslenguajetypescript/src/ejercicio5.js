class SlothMachine { 
    constructor() {
        this.coins = 0;
        console.log("This machine starts with a bonus of " + this.coins + " coins")
    };

    random_boolean = () =>  Math.random() >= 0.5;

    play() {
        this.coins +=3;
        console.log("The accumulated bonus is: " + this.coins);
        if (this.random_boolean() && this.random_boolean() && this.random_boolean()){
            console.log("Congratulations!!!. You won " + this.coins +  " coins!!")
            this.coins=0;
        }
        else{
            console.log("Good luck next time LOSER!!");
        }
    }
};
    const machine1 = new SlothMachine();
    machine1.play(); 
    machine1.play(); 
    machine1.play(); 
    machine1.play(); 
    machine1.play(); 
    machine1.play(); 
    machine1.play(); 
    machine1.play(); 
    machine1.play(); 
    machine1.play(); 
    machine1.play(); 
    machine1.play(); 
    machine1.play(); 
    machine1.play(); 
    machine1.play(); 
    machine1.play(); 
    machine1.play(); 
    machine1.play(); 
    machine1.play(); 
    machine1.play(); 