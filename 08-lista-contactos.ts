/**
Kata: Lista de contactos
Objetivo:
Los estudiantes podrán usar interfaces en TypeScript para representar objetos con propiedades comunes.
Instrucciones:
    1. Crea un nuevo archivo TypeScript.
    2. Crea una interfaz que represente un contacto.
    3. La interfaz debe tener las siguientes propiedades: nombre, apellido y número de teléfono.
    4. Crea una clase de TypeScript que implemente la interfaz.
    5. Crea una instancia de la clase y asigna valores a las propiedades.
    6. Imprime los valores de las propiedades.
 */

// interface que define la estructura de un contacto
interface Contacto {
   nombre: string;
   apellido: string;
   numeroTelefono: string;
}

// clase que implementa la interface
class ContactoClase implements Contacto {
   nombre: string;
   apellido: string;
   numeroTelefono: string;

   constructor(nombre: string, apellido: string, numeroTelefono: string) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.numeroTelefono = numeroTelefono;
   }
}

// crear una instancia de la clase ContactoClase
const contactoClase = new ContactoClase("Bob", "Brown", "123456");

console.log(contactoClase.nombre);
console.log(contactoClase.apellido);
console.log(contactoClase.numeroTelefono);
