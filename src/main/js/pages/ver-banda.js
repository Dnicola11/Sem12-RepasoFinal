const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState} = require('react');
const client = require('../client');

const VerBandaPage = () => {

    let { id } = useParams();
    const [banda, setBanda] = useState({});

    useEffect(()=>{
    client({
        method: 'GET',
        path: '/api/bandas/' + id
    }).done(response=>setBanda(response.entity))
    },[])


    return (
        <>
            <h1>Ver Banda</h1>
            <hr/>
            <table border="1">
                <tr>
                    <th>Nombre</th>
                    <td>{banda.nombre}</td>
                </tr>
            </table>
            <hr/>
            <h2>Formacion</h2>
            <table border="1">
                <tr>
                    <th>Nombre</th>
                    <td>{banda.nombre}</td>
                </tr>
            </table>

            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerBandaPage;