var daysUntilBday = 60;

while (daysUntilBday <= 60){

    if (daysUntilBday >= 30){
        console.log(daysUntilBday + " days until my birthday. Soo far away.")
        daysUntilBday -=1;
    }

    if (daysUntilBday < 30 && daysUntilBday >= 5){
        console.log(daysUntilBday + " days until my birthday. Getting close now.")
        daysUntilBday -= 1;
    }
    if (daysUntilBday < 5 && daysUntilBday >= 1){
        console.log(daysUntilBday + " days until my birthday. Ohboyohboyohboyohboy")
        daysUntilBday -= 1;
    }
    if (daysUntilBday === 0){
        console.log( "It's my birthday. Huzzah!")
        break;
    }
}