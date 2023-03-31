let tempOriginal = 25;
let tempConvertida;
let unidadOriginal = 'C';
let unidadConvertida = 'F';

switch (unidadOriginal) {
  case 'C':
    tempConvertida = (tempOriginal * 9/5) + 32;
    unidadConvertida = 'F';
    break;
  case 'F':
    tempConvertida = (tempOriginal - 32) * 5/9;
    unidadConvertida = 'C';
    break;
  default:
    console.log('Unidad de medida no válida');
}

console.log(tempOriginal + unidadOriginal + ' equivale a ' + tempConvertida + unidadConvertida);
