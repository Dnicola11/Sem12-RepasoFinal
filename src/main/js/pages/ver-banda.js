const React = require('react');
const { Link, useParams } = require('react-router-dom');
const {useState} = require('react');
const client = require('../client');

const VerBandaPage = () => {

    let { id } = useParams();
    const [banda, setBanda] = useState({});
    const [integrantes, setIntegrantes] = useState([]);

    useEffect(()=>{
    client({
        method: 'GET',
        path: '/api/bandas/' + id
    }).done(response=>setBanda(response.entity))
    client({
        method: 'GET',
        path: '/api/bandas/' + id + '/formacion'
    }).done(response=>setIntegrantes(response.entity))
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
                <thead>
                <tr>
                    <th>Musico</th>
                    <td>Instrumento</td>
                </tr>
                </thead>
                <tbody>
                    {integrantes.map(integrante=>{
                        return(
                            <tr key={integrante.ID}>
                                <td>{integrante.MUSICO}</td>
                                <td>{integrante.INSTRUMENTO}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <hr />
            <Link to={'/ver-banda/${id}/nuevo-integrante'}>Nuevo Integrante</Link> | 
            <Link to="/">Volver</Link>
        </>
    )

}

module.exports = VerBandaPage;