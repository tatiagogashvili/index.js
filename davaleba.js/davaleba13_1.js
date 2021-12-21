function reverse(number) {
    let r = 0;
    while(number !== 0){
        r = r * 10 + number % 10;
        number = Math.floor(number/10);
    }


    console.log(r);
}


reverse(523)
