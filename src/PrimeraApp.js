import React, { Fragment } from 'react';
import PropTypes from "prop-types";


const PrimeraApp = ({ saludo, subtitulo }) => {

    return (
        <Fragment>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
            <p>{subtitulo}</p>
        </Fragment>
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: "soy un subititulo"
}

export default PrimeraApp;