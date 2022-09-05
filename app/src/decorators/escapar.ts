export function escapar(
  target: any,
  propertKey: string,
  descriptor: PropertyDescriptor 
) {
  const metodOriginal = descriptor.value;
  descriptor.value = function(...args: any[]) { 
    let retorno = metodOriginal.apply(this, args);
    if(typeof retorno === 'string'){
      console.log(`@escape na classe: ${this.constructor.name} - No método: ${propertKey}`);
      retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
    }
    return retorno;
  }
  return descriptor;
}