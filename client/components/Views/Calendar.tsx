import Layout from "../Layout/Layout";
import { Card } from '../ui/card';
import { Link } from 'react-router-dom';


const Calendar = () => {
  const corridas = [
    { id: 1, imagem: '../../img/sapi.jpeg', kilometragem: '5K', location: 'Sapiranga' },
    { id: 2, imagem: '../../img/sapi.jpeg', kilometragem: '10K', location: 'Sapiranga' },
    { id: 3, imagem: '../../img/sapi.jpeg', kilometragem: '10K', location: 'Sapiranga' },
    { id: 4, imagem: '../../img/sapi.jpeg', kilometragem: '10K', location: 'Sapiranga' },
    { id: 5, imagem: '../../img/sapi.jpeg', kilometragem: '10K', location: 'Sapiranga' },
    { id: 6, imagem: '../../img/sapi.jpeg', kilometragem: '10K', location: 'Sapiranga' },
    { id: 7, imagem: '../../img/sapi.jpeg', kilometragem: '10K', location: 'Sapiranga' },
    { id: 8, imagem: '../../img/sapi.jpeg', kilometragem: '10K', location: 'Sapiranga' },
    { id: 9, imagem: '../../img/sapi.jpeg', kilometragem: '10K', location: 'Sapiranga' },
    { id: 10, imagem: '../../img/sapi.jpeg', kilometragem: '10K', location: 'Sapiranga' },

    // ...
  ];

  return (
    <Layout>
      <h1 className="text-center text-3xl text-slate-300 mt-14">Calendário de corridas</h1>
      <div className="mt-10 ml-24 mr-24">
        <div className="grid grid-cols-4 gap-5">
          {corridas.map(corrida => (
            <Link to="/registration" key={corrida.id}>
              <Card className="p-4 bg-slate-800">
                <img src={corrida.imagem} alt={`Corrida ${corrida.id}`} className="w-full h-64 object-cover rounded" />
                <div className="mt-2 text-center text-slate-300">
                  <h1>{corrida.location}</h1>
                  <p>{corrida.kilometragem}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Calendar;