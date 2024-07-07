let data = new Date()
let ano = data.getFullYear()
let mes = data.getMonth()
let semana = data.getDay()
let dia = data.getDate()
let anoId = document.querySelector('#ano')
let mesId = document.querySelector('#mes')
let semanaId = document.querySelector('#semana')
let diaId = document.querySelector('#dia')

switch(semana){
    case 0:
        semanaId.innerHTML = 'Domingo'
        break
    case 1:
        semanaId.innerHTML = 'Segunda-Feira'
        break
    case 2:
        semanaId.innerHTML = 'Terça-Feira'
        break
    case 3:
        semanaId.innerHTML = 'Quarta-Feira'
        break
    case 4:
        semanaId.innerHTML = 'Quinta-Feira'
        break
    case 5:
        semanaId.innerHTML = 'Sexta-Feira'
        break
    case 6:
        semanaId.innerHTML = 'Sábado'
        break
    default:
        alert('ERROR, invalid day week')
}

switch(mes){
    case 0:
        mesId.innerHTML = 'Janeiro'
        break
    case 1:
        mesId.innerHTML = 'Fevereiro'
        break
    case 2:
        mesId.innerHTML = 'Março'
        break
    case 3:
        mesId.innerHTML = 'Abril'
        break
    case 4:
        mesId.innerHTML = 'Maio'
        break
    case 5:
        mesId.innerHTML = 'Junho'
        break
    case 6:
        mesId.innerHTML = 'Julho'
        break
    case 7:
        mesId.innerHTML = 'Agosto'
        break
    case 8:
        mesId.innerHTML = 'Setembro'
        break
    case 9:
        mesId.innerHTML = 'Outubro'
        break
    case 10:
        mesId.innerHTML = 'Novembro'
        break
    case 11:
        mesId.innerHTML = 'Dezembro'
        break
    default:
        alert('ERROR, invalid month')
}
anoId.innerHTML = ano
diaId.innerHTML = dia

