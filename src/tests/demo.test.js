describe('Pruebas en el archivo demo.test.js', () => {
    
    test('deben de ser iguales los strings', () => {
        
        // 1. Inicialicacion
        const msj = "hola mundo";
    
        // 2. estímulo
        const msj2 = `hola mundo`
    
        // 3. Observar el comportamiento
        expect( msj ).toBe(msj2); // ===
        
    })

})


