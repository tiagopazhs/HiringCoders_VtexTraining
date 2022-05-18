let isItActive: boolean;

isItActive = false;

function testeActivate(status:boolean) {
    if(status){return `Active user.`
    }
    else{return `UnActive user.`
    }
}

testeActivate(true);