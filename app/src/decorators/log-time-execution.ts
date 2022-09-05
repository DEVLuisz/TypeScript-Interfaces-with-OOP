export function logTimeExecution(emSegundos: boolean = false){
  return function(
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor 
  ) {
    const metodOriginal = descriptor.value;
    descriptor.value = function(...args: any[]) {
      let divisor = 1;
      let unidade = 'milisegundos';
      if(emSegundos){
        divisor = 1000;
        unidade = 'segundos';
      }
      const tempo1 = performance.now();
      ///Chama o método Original
      const retorno = metodOriginal.apply(this, args);
      const tempo2 = performance.now();
      console.log(`Método: ${propertKey.toUpperCase()} - Tempo de Execução: ${(tempo2 - tempo1) / divisor} ${unidade}.`);
      retorno;
    };
    return descriptor; 
  }
}