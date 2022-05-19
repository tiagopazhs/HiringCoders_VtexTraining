function principal():void {
    console.log('executing')
    
}

principal()


function withOutReturn(): never{
trow new Error(' ola ')
}

const a = withOutReturn