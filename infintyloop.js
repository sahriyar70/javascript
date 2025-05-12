for (; ;){
    var rand= Math.floor(Math.random()*10+1)
    if(rand==9){
        console.log('wine')
        break
    } else{
        console.log('loss')
    }
}