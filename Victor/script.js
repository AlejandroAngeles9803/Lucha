let total = 0;
class mascara {
    constructor(material, firma, colores, detalles, parteTrasera, color, tela, luchador) {
        this.material = material;
        this.firma = firma;
        this.colores = colores;
        this.detalles = detalles;
        this.parteTrasera = parteTrasera;
        this.color = color;
        this.tela = tela;
        this.luchador = luchador;
    }
    cotizarMascara() {
        
        let cantidad;
        let base = 0;

        switch (this.material) {
            case '1':
                cantidad = base + 150;
                break;
            case '2':
                cantidad = base + 500;
                break;
            case '3':
                cantidad = base + 800;
                break;
            case '4':
                cantidad = base + 1500;
                break;
        }

        switch (this.firma) {
            case '1':
                cantidad = cantidad + 150;
                break;
            case '2':
                cantidad = cantidad + 500;
                break;
            case '3':
                cantidad = cantidad + 800;
                break;
            case '4':
                cantidad = cantidad + 1500;
                break;
        }

        switch (this.colores) {
            case '1':
                cantidad = cantidad + 50;
                break;
            case '2':
                cantidad = cantidad + 50;
                break;
            case '3':
                cantidad = cantidad + 50;
                break;
            case '4':
                cantidad = cantidad + 50;
                break;
        }

        switch (this.detalles) {
            case '1':
                cantidad = cantidad + 200;
                break;
            case '2':
                cantidad = cantidad + 300;
                break;
            case '3':
                cantidad = cantidad + 500;
                break;
            case '4':
                cantidad = cantidad + 700;
                break;
        }

        switch (this.parteTrasera) {
            case '1':
                cantidad = cantidad + 50;
                break;
            case '2':
                cantidad = cantidad + 50;
                break;
            case '3':
                cantidad = cantidad + 50;
                break;
        }

        switch (this.color) {
            case '1':
                cantidad = cantidad + 50;
                break;
            case '2':
                cantidad = cantidad + 50;
                break;
            case '3':
                cantidad = cantidad + 50;
                break;
            case '4':
                cantidad = cantidad + 50;
                break;
            case '5':
                cantidad = cantidad + 50;
                break;
        }

        switch (this.tela) {
            case '1':
                cantidad = cantidad + 100;
                break;
            case '2':
                cantidad = cantidad + 300;
                break;
            case '3':
                cantidad = cantidad + 500;
                break;
        }

        switch (this.luchador) {
            case '1':
                cantidad = cantidad + 100;
                break;
            case '2':
                cantidad = cantidad + 100;
                break;
            case '3':
                cantidad = cantidad + 100;
                break;
            case '4':
                cantidad = cantidad + 100;
            case '5':
                cantidad = cantidad + 100;
            case '6':
                cantidad = cantidad + 100;
            case '7':
                cantidad = cantidad + 100;
            case '8':
                cantidad = cantidad + 100;
            case '9':
                cantidad = cantidad + 100;
            
                break;
        }
        console.log(cantidad)
        cantidad = cantidad + total;
        return cantidad;
    }
}

//parte visual HTML
function Interfaz() { }

//Mensaje en HTml
Interfaz.prototype.mostarMensaje = function (mensaje, tipo) {
    const div = document.createElement("div");

    if (tipo === 'error') {
        div.classList.add('mensaje', 'error');
    } else {
        div.classList.add("mensaje", "correcto");
    }

    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector(".form-group"));

    setTimeout(function () {
        document.querySelector('.mensaje').remove();
    }, 2000);
};

//imprime resultado de cotización
Interfaz.prototype.mostrarResultado = function (mascara, total) {
    const resultado = document.getElementById('resultado');
    let material;
    let firma;
    let colores;
    let detalles;
    let parteTrasera;
    let color;
    let tela;
    let luchador;

    switch (mascara.material) {
        case '1':
            material = 'Esponja';
            break;
        case '2':
            material = 'Aficionado';
            break;
        case '3':
            material = 'Semiprofesional';
        case '4':
            material = 'Profesional';
            break;
    }
    switch (mascara.firma) {
        case '1':
            firma = 'No aplica';
            break;
        case '2':
            firma = 'No aplica';
            break;
        case '3':
            firma = 'Firmada';
            break;
        case '4':
            firma = 'Firmada';
            break;
    }

    switch (mascara.colores) {
        case '1':
            colores = '1 Color';
            break;
        case '2':
            colores = '2 Colores';
            break;
        case '3':
            colores = '3 Colores';
            break;
        case '4':
            colores = '4 Colores';
            break;
    }

    switch (mascara.detalles) {
        case '1':
            detalles = 'No aplica';
            break;
        case '2':
            detalles = 'No aplica';
            break;
        case '3':
            detalles = 'Luchada';
            break;
        case '4':
            detalles = 'Luchada';
            break;
    }

    switch (mascara.parteTrasera) {
        case '1':
            parteTrasera = 'Resorte';
            break;
        case '2':
            parteTrasera = 'Cierre';
            break;
        case '3':
            parteTrasera ='Agujeta';
            break;
    }

    switch (mascara.color) {
        case '1':
            color = 'Azul';
            break;
        case '2':
            color = 'Blanco';
            break;
        case '3':
            color = 'Negro';
            break;
        case '4':
            color = 'Rojo';
        case '5':
            color = 'Dorado';
            break;
    }

    switch (mascara.tela) {
        case '1':
            tela = 'Lisa ';
            break;
        case '2':
            tela = 'Tornasol';
            break;
        case '3':
            tela = 'Diamantada';
            break;
    }

    switch (mascara.luchador) {
        case '1':
            luchador = 'Mistico ';
            break;
        case '2':
            luchador = 'Rey mysterio';
            break;
        case '3':
            luchador = 'L.A Park';
            break;
        case '4':
            luchador = 'DR Wagner';
            break;
        case '5':
            luchador = 'Pentagon JR';
            break;
        case '6':
            luchador = 'Volador JR';
            break;
        case '7':
            luchador = 'Atlantis';
            break;
        case '8':
            luchador ='Bandido';
            break;
        case '9':
            luchador = 'Titan';
            break;
    }
    //crear un div
    const div = document.createElement('div');
    //insertar la información
    div.innerHTML = `
       <p class="header">Tu resumen:</p>
       <p>material: ${material} </p>
       <p>firma: ${firma}</p>
       <p>colores: ${colores}</p>
       <p>detalles: ${detalles}</p>
       <p>parteTrasera: ${parteTrasera}</p>
       <p>color: ${color}</p>
       <p>tela: ${tela}</p>
       <p>luchador: ${luchador}</p>
       <p>Total: $ ${total}</p>   
    `;
    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';

    setTimeout(function () {
        spinner.style.display = 'none';
        resultado.appendChild(div);
    }, 500);

}

//capturar datops del formulario
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();
    //leer la marca seleccionada
    const material = document.getElementById('material');
    const materialSeleccionado = material.options[material.selectedIndex].value;

    //leer año seleccionado
    const firma = document.getElementById("firma");
    const firmaSeleccionado = firma.options[firma.selectedIndex].value;

    const colores = document.getElementById("colores");
    const coloresSeleccionado = colores.options[colores.selectedIndex].value;

    const detalles = document.getElementById("detalles");
    const detallesSeleccionado = detalles.options[detalles.selectedIndex].value;

    const parteTrasera = document.getElementById("parteTrasera");
    const parteTraseraSeleccionado = parteTrasera.options[parteTrasera.selectedIndex].value;


    const color = document.getElementById("color");
    const colorSeleccionado = color.options[color.selectedIndex].value;

    const tela = document.getElementById("tela");
    const telaSeleccionado = tela.options[tela.selectedIndex].value;

    const luchador = document.getElementById("luchador");
    const luchadorSeleccionado = luchador.options[luchador.selectedIndex].value


    //crear instancia de interfaz
    const interfaz = new Interfaz();
    //revisamos que los campos no estén vacíos

if (materialSeleccionado === '' || firmaSeleccionado === '' || coloresSeleccionado === '' || detallesSeleccionado === '' || parteTraseraSeleccionado === '' || colorSeleccionado === '' || telaSeleccionado === '' || luchadorSeleccionado === '') {
        //interfaz imprimiendo error
        interfaz.mostarMensaje('Faltan Datos, revisa e intenta de nuevo', 'error');
    } else {
        //limpiar resultados anteriores
        const resultados = document.querySelector('#resultado div');
        if (resultados != null) {
            resultados.remove();
        }

        const lucha = new mascara(materialSeleccionado, firmaSeleccionado, coloresSeleccionado, detallesSeleccionado,parteTraseraSeleccionado,colorSeleccionado,telaSeleccionado,luchadorSeleccionado);
        //Cotizar el lucha
        const cantidad = lucha.cotizarMascara(lucha);
        //mostrar resultado
        interfaz.mostrarResultado(lucha, cantidad);
        interfaz.mostarMensaje('Cotizando', 'correcto');

    }

});






