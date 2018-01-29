function randomChance(quarters){

    while(quarters > 0){
        var spin = Math.trunc(Math.random()*100);
        quarters--;
        console.log("Number is " +spin + ". Number of quarters remaining:" + quarters)
        if (spin === 7){
            var win = Math.floor(Math.random()*100 + 50) + quarters;
            console.log(" You're a Winner!!! You have " + win + " quarters.");
            break;
                       }
                    
}
    if (quarters === 0);{
        console.log("Game over!")
    }
}

randomChance(50);