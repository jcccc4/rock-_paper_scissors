function computerPlay(selection){
    ranInt = Math.floor(Math.random()*3)
    const comSelect= ['rock','paper','scissor']
    
    if(selection.toLowerCase() === 'rock' && comSelect[ranInt] === 'paper'){
        console.log(`${selection.toUpperCase()} vs ${comSelect[ranInt].toUpperCase()}! YOU LOSE!!!`)
        return ['LOSE',selection.toUpperCase(),comSelect[ranInt].toUpperCase()]
    }
    else if(selection.toLowerCase() === 'rock' && comSelect[ranInt] === 'scissor'){
        console.log(`${selection.toUpperCase()} vs ${comSelect[ranInt].toUpperCase()}! YOU WON!!!`)
        return ['WIN',selection.toUpperCase(),comSelect[ranInt].toUpperCase()]
    }
    else if(selection.toLowerCase() === 'paper' && comSelect[ranInt] === 'scissor'){
        console.log(`${selection.toUpperCase()} vs ${comSelect[ranInt].toUpperCase()}! YOU LOSE!!!`)
        return ['LOSE',selection.toUpperCase(),comSelect[ranInt].toUpperCase()]
    }
    else if(selection.toLowerCase() === 'paper' && comSelect[ranInt] === 'rock'){
        console.log(`${selection.toUpperCase()} vs ${comSelect[ranInt].toUpperCase()}! YOU WON!!!`)
        return ['WIN',selection.toUpperCase(),comSelect[ranInt].toUpperCase()]
    }
    else if(selection.toLowerCase() === 'scissor' && comSelect[ranInt] === 'rock'){
        console.log(`${selection.toUpperCase()} vs ${comSelect[ranInt].toUpperCase()}! YOU LOSE!!!`)
        return ['LOSE',selection.toUpperCase(),comSelect[ranInt].toUpperCase()]
    }
    else if(selection.toLowerCase() === 'scissor' && comSelect[ranInt] === 'paper'){
        console.log(`${selection.toUpperCase()} vs ${comSelect[ranInt].toUpperCase()}! YOU WON!!!`)
        return ['WIN',selection.toUpperCase(),comSelect[ranInt].toUpperCase()]
    }
    else{
        console.log(`${selection.toUpperCase()} vs ${comSelect[ranInt].toUpperCase()}! IT IS A TIE!!!`)
        return ['TIE',selection.toUpperCase(),comSelect[ranInt].toUpperCase()]
    }
    
}

const man = document.querySelector(".manScore");
const computer = document.querySelector('.compScore')
const score = document.querySelector(".score-handler")
const stat = document.querySelector(".status")
var manWins = 0;
var comWins = 0;

const choice = document.querySelectorAll('.rps-container')


function clicked(){
    let play = computerPlay(this.id)
    if( play[0] ==="WIN"){
        stat.innerText = `MAN: ${play[1]}  \n COMPUTER: ${play[2]} \n YOU WIN!`
        manWins++
        man.innerText = `Man: ${manWins}`  
    }
    else if( play[0] === "LOSE"){
        stat.innerText = `MAN: ${play[1]}  \n COMPUTER: ${play[2]} \n YOU LOSE!`
        comWins++
        computer.innerText = `Computer: ${comWins}` 
    }else{
        stat.innerText = `MAN: ${play[1]}  \n COMPUTER: ${play[2]} \n IT IS A TIE!`
    }

    if(manWins===5){
        alert('YOU WIN')
        manWins = 0;
        comWins =0;
        man.innerText = `Man: ${0}`
        computer.innerText = `Man: ${0}`
    }else if(comWins===5){
        alert('YOU SUCK!')
        manWins = 0;
        comWins =0;
        man.innerText = `Man: ${0}`
        computer.innerText = `Man: ${0}`
    }

}
choice.forEach(key=>key.addEventListener('click', clicked))
