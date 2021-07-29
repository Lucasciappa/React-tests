import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes";


describe( "Pruebas en funciones de Héroes", () => {

    test("Debe de retornar un Héroe por id", () => {
    
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( h => h.id === id );

        expect(heroe).toEqual(heroeData)

    });

    test("Debe de retornar undefined si el Héroe no existe", () => {
    
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined)

    });


    test("Debe de retornar un arreglo con los Héroes de DC", () => {
    
        const owner = "DC";
        const heroes = getHeroesByOwner(owner);

        const heroeData = heroes.filter( (heroe) => heroe.owner === owner );
        console.log(heroeData);

        expect(heroes).toEqual(heroeData)

    });

    test("Debe de retornar un arreglo con los Héroes de Marvel", () => {
    
        const owner = "Marvel";
        const heroes = getHeroesByOwner(owner);


        expect(heroes.length).toBe(2)

    });
    
})
