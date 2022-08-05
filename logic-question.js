function sumMultiples(limit) {
    var sum = 0;

    for(var i = 1; i <= limit; i++) {
        if(i % 3 === 0 ) {
            sum += i;
        }

        if(i % 5 === 0) {
            sum += i;
        }
    }

    console.log(sum)
}

sumMultiples(1000);