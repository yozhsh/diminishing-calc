$('#error').hide()
function calcPenalty(playerValue){
    if (playerValue <= 30 && playerValue >= 0){
        return 0
    }
    else if (playerValue > 30 && playerValue <= 39) {
        return 10
    }
    else if (playerValue > 39 && playerValue <= 47) {
        return 20
    }
    else if (playerValue > 47 && playerValue <= 54) {
        return 30
    }
    else if (playerValue > 54 && playerValue <= 66) {
        return 40
    }
    else if (playerValue > 66 && playerValue <= 126) {
        return 50
    }
    else {
        return null
    }
}



$("#input-value").keyup(function(e){
    if(e.keyCode == 13){
        e.preventDefault();
        let result = calcPenalty(e.target.value)
        if (result === null) {
            $('#error').show()
            $('#result-value').text('')
        } else {
            $('#error').hide()
            $('#result-value').text(`${result}%`)
        }

    }
})
