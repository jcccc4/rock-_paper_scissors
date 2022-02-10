function computerPlay(selection){
    ranInt = Math.floor(Math.random()*3)
    const comSelect= ['rock','paper','scissor']
    
    if(selection.toLowerCase() === 'rock' && comSelect[ranInt] === 'paper'){
        return `${selection.toUpperCase()} vs ${comSelect[ranInt].toUpperCase()}! YOU LOSE!!!`
    }
    else if(selection.toLowerCase() === 'rock' && comSelect[ranInt] === 'scissor'){
        return `${selection.toUpperCase()} vs ${comSelect[ranInt].toUpperCase()}! YOU WON!!!`
    }
    else if(selection.toLowerCase() === 'paper' && comSelect[ranInt] === 'rock'){
        return `${selection.toUpperCase()} vs ${comSelect[ranInt].toUpperCase()}! YOU WON!!!`
    }
    else if(selection.toLowerCase() === 'paper' && comSelect[ranInt] === 'scissor'){
        return `${selection.toUpperCase()} vs ${comSelect[ranInt].toUpperCase()}! YOU LOSE!!!`
    }
    else if(selection.toLowerCase() === 'scissor' && comSelect[ranInt] === 'paper'){
        return `${selection.toUpperCase()} vs ${comSelect[ranInt].toUpperCase()}! YOU WON!!!`
    }
    else if(selection.toLowerCase() === 'scissor' && comSelect[ranInt] === 'rock'){
        return `${selection.toUpperCase()} vs ${comSelect[ranInt].toUpperCase()}! YOU LOSE!!!`
    }
    else{
        return `${selection.toUpperCase()} vs ${comSelect[ranInt].toUpperCase()}! IT IS A TIE!!!`
    }
    
}
console.log(computerPlay('rock'))
console.log(computerPlay('paper'))
console.log(computerPlay('scissor'))
console.log(computerPlay('rock'))
console.log(computerPlay('paper'))
console.log(computerPlay('scissor'))
console.log(computerPlay('rock'))
console.log(computerPlay('paper'))
console.log(computerPlay('scissor'))

