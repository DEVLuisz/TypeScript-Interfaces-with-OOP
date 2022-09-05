export function escapar(target, propertKey, descriptor) {
    const metodOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodOriginal.apply(this, args);
        if (typeof retorno === 'string') {
            console.log(`@escape na classe: ${this.constructor.name} - No método: ${propertKey}`);
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    };
    return descriptor;
}
//# sourceMappingURL=escapar.js.map