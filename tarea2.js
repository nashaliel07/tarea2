let figura= prompt("Elija de que figura sacaremos el area\n 1) triangulo\n 2) rectangulo\n 3) circulo\n 4)cuadrado\n 5)rombo\n 6)cometa\n 7)trapecio\n 8)paralelogramo\n");
    //primero ponemos variavles

    
    
    let base;
    let altura;
    let radio;
    let lado;
    let diagonalMenor;
    let diagonalMayor;
    let baseAlta;
   switch(figura){
    case "1":
        altura = parseInt(prompt("Altura: "))
        base = parseInt(prompt("Base: "))
        var imagen =  `<img src="img/triangulo.bmp"/>`
        document.write( `${imagen} 
         <p>El area de triangulo es ${base*altura/2} cm </p>` )
        
    break
    case "2":
        altura = parseInt(prompt("Altura: "))
        base = parseInt(prompt("Base: "))
        var imagen =  `<img src="img/rectangulo.bmp"/>`
        document.write( `${imagen}
        <p>El area de rectangulo es ${base*altura} cm </p>` )
        break
    case "3":
        radio = parseInt(prompt("Radio: "))
        var imagen =  `<img src="img/circulo.bmp"/>`
        document.write(`${imagen}<p>El area del circulo es ${Math.PI*Math.pow(radio,2)} cm`)
        break
    case "4":
        lado = parseInt(prompt("Lado: "))
        var imagen =  `<img src="img/cuadrado.bmp"/>`
        document.write(`${imagen}<p>El area del cuadrado es ${lado*lado} cm </p>`)
        break
    case "5":
        diagonalMayor = parseInt(prompt("Diagonal Mayor: "))
        diagonalMenor = parseInt(prompt("Diagonal Menor: "))
        var imagen =  `<img src="img/rombo.bmp"/>`
        document.write(`${imagen}<p>El area del rombo es ${diagonalMayor*diagonalMenor/2}cm </p>> `)
        break
    case "6":
        diagonalMayor = parseInt(prompt("Diagonal Mayor: "))
        diagonalMenor = parseInt(prompt("Diagonal Menor: "))
        var imagen =  `<img src="img/cometa.bmp"/>`
        document.write(`${imagen} <p>El area del cometa es ${diagonalMayor*diagonalMenor/2}cm </p>`)
        break
    case "7":
        base = parseInt(prompt("Base baja: "))
        baseAlta = parseInt(prompt("Base alta: "))
        altura = parseInt(prompt("Altura: "))
        var imagen =  `<img src="img/trapecio.bmp"/>`
        document.write(`${imagen}<p>El area del trapecio es ${(baseAlta+base)*altura/2} cm </p>`)
        break
    case "8":
        altura = parseInt(prompt("Altura: "))
        base = parseInt(prompt("Base: "))
        var imagen =  `<img src="img/paralelogramo.bmp"/>`
        document.write( `${imagen}<p>El area de paralelogramo es ${base*altura} cm </p>` )
      break
    default:
        document.write("<h2>Esta opcion no es valida<h2>") 
   }
   let elemento = document.getElementById("imgFormas")
   
