export function logTimeExecution(emSegundos = false) {
    return function (target, propertKey, descriptor) {
        const metodOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const tempo1 = performance.now();
            const retorno = metodOriginal.apply(this, args);
            const tempo2 = performance.now();
            console.log(`Método: ${propertKey.toUpperCase()} - Tempo de Execução: ${(tempo2 - tempo1) / divisor} ${unidade}.`);
            retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=log-time-execution.js.map