const React = require('react');
const {useState} = require('react');
const { Link } = require('react-router-dom');
const client = require('../client');


const NuevoInstrumentoPage = () => {

    const [nombre, setNombre] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/instrumentos',
            entity: {nombre: nombre, categoria: categoria, descripcion: descripcion},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
            window.location = '/';
        })
    }

    return (
        <>
        <h1>Nuevo Instrumento</h1>
        <form onSubmit={handleSubmit}>
            <label>Nombre</label> <br />
            <input type="text" id='nombre' name='nombre' onChange={eNombre=>setNombre(eNombre.target.value)} /> <br />
            <label>Categoria</label> <br />
            <input type="text" id='categoria' name='categoria' onChange={eCategoria=>setCategoria(eCategoria.target.value)} /> <br />
            <label>Descripcion</label> <br />
            <input type="text" id='descripcion' name='descripcion' onChange={eDescripcion=>setDescripcion(eDescripcion.target.value)} /> <br />
            <input type="submit" value="Nuevo Instrumento" />
        </form>
        <Link to="/">Volver</Link>
        </>
    )
}

module.exports = NuevoInstrumentoPage;