class Calculador {
    numeroUm
    numeroDois

    somar(){
        console.log(this.numeroUm + this.numeroDois)
    }
    subtrair(){
        console.log(this.numeroUm - this.numeroDois)
    }
    multiplicar(){
        console.log(this.numeroUm * this.numeroDois)
    }
    dividir(){
        console.log(this.numeroUm / this.numeroDois)
    }
}

let calculadora = new Calculador()
calculadora.numeroUm = parseInt(prompt("Insira o primeiro número"))
calculadora.numeroDois = parseInt(prompt("Insira o segundo número"))
console.log(calculadora.numeroUm + " + " + calculadora.numeroDois)
calculadora.somar()

calculadora.numeroUm = parseInt(prompt("Insira o primeiro número"))
calculadora.numeroDois = parseInt(prompt("Insira o segundo número"))
console.log(calculadora.numeroUm + " - " + calculadora.numeroDois)
calculadora.subtrair()

calculadora.numeroUm = parseInt(prompt("Insira o primeiro número"))
calculadora.numeroDois = parseInt(prompt("Insira o segundo número"))
console.log(calculadora.numeroUm + " x " + calculadora.numeroDois)
calculadora.multiplicar()

calculadora.numeroUm = parseInt(prompt("Insira o primeiro número"))
calculadora.numeroDois = parseInt(prompt("Insira o segundo número"))
console.log(calculadora.numeroUm + " / " + calculadora.numeroDois)
calculadora.dividir()