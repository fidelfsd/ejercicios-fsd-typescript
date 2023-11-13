class Calculadora {
    
   sumar(a: number, b: number): number {
      return a + b;
   }

   restar(a: number, b: number): number {
      return a - b;
   }

   multiplicar(a: number, b: number): number {
      return a * b;
   }

   dividir(a: number, b: number): number {
      if (b === 0) {
         throw new Error("No se puede dividir por cero");
      }
      return a / b;
   }
}

// crear una instancia de la clase Calculadora
const miCalculadora = new Calculadora();

// llamar los metodos
console.log("Suma:  " + miCalculadora.sumar(5, 3));
console.log("Resta:  " + miCalculadora.restar(8, 2));
console.log("Multiplicar:  " + miCalculadora.multiplicar(4, 6));
console.log("Dividir:  " + miCalculadora.dividir(10, 2));
