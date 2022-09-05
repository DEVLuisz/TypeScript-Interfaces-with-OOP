export function inspect(target, propertKey, descriptor) {
    const metodOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`------ Método ${propertKey}: `);
        console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
        const retorno = metodOriginal.apply(this, args);
        console.log(`------ Retorno: ${JSON.stringify(retorno)}`);
        return retorno;
    };
    return descriptor;
}
;
//# sourceMappingURL=inspect.js.map