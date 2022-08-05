const getMMC = (a,b,c,rest) => {
    if(rest % a === 0 && rest % b === 0 && rest % c === 0) {
        console.log(rest);
        return rest;
    } else {
        rest++;
        return getMMC(a,b,c,rest);
    }
}

getMMC(2,3,10,1);

