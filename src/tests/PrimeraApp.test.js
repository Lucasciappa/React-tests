import React from 'react';
import { shallow } from "enzyme"
import "@testing-library/jest-dom"

import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimeraApp />', () => {
    

    // test('debe de mostrar el mensaje "Hola, Soy Goku"', () => {
    
        // const saludo= "Hola, soy Goku";

        // // const wrapper = render(<PrimeraApp saludo={saludo} />);
        //     const { getByText } = render(<PrimeraApp saludo={saludo} />);

    //     expect( getByText( saludo ) ).toBeInTheDocument();

    // })
    
    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo= "Hola, soy Goku";
        const wrapper = shallow( <PrimeraApp saludo={saludo}/> );

        expect(wrapper).toMatchSnapshot();
        
    });

    test('debe de mostrar el subtitulo enviado por props', () => {

        const saludo =  "Hola, soy Goku";
        const subTitulo = "Soy un subititulo";
        const wrapper = shallow( 
            <PrimeraApp 
                saludo={saludo}
                subitulo = {subTitulo}
            />
        );

        const textoParrafo = wrapper.find("p").text() // find igual a 'd.querySelector(p)'

        expect(textoParrafo).toBe(subTitulo)
        
    })
    
    
    
});
