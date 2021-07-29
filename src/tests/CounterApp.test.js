import React from 'react';
import { shallow } from "enzyme"
import "@testing-library/jest-dom"

import CounterApp from '../CounterApp';

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow( <CounterApp />);

    beforeEach( () => {
        wrapper = shallow( <CounterApp />);

    })

    
    test('debe de mostrar <PrimeraApp /> correctamente', () => {


        expect(wrapper).toMatchSnapshot();
    
    });

    test('debe de mostrar el valor por defecto de 100', () => {
        
        const value = 100;

        const wrapper = shallow(
            <CounterApp 
                value={value} 
            />
        );
        const counterText = wrapper.find("p").text().trim();

        expect(counterText).toBe("100");

    })


    test("debe de incrementar con el boton +1", () => {

        const btn1 = wrapper.find("button").at(0).simulate("click");

        const counterText = wrapper.find("p").text().trim();

        expect(counterText).toBe("1");

    })

    test("debe de decrementar con el boton -1", () => {

        const btn2 = wrapper.find("button").at(2).simulate("click");

        const counterText = wrapper.find("p").text().trim();

        expect(counterText).toBe("-1");


    })

    test("debe resetear al valor por defecto con el boton 'reset'", () => {

        const value = 100;

        const wrapper = shallow(<CounterApp value={value} />);

        wrapper.find("button").at(0).simulate("click"); //+1
        wrapper.find("button").at(0).simulate("click"); //+1
        wrapper.find("button").at(1).simulate("click"); // reset

        const counterText = wrapper.find("p").text().trim();

        expect(counterText).toBe("100");


    })
    

});
