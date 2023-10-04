import React, { useState } from 'react';
import Modal from './Modal'; // Asegúrate de tener un componente Modal
import { Link } from "react-router-dom";
import './Marcas.css'; // Importa tus estilos de Marcas.css
import SCarlosLogo from './SCarloslogo.png';
import CongelatoLogo from './Congelato.png';
import datamarcas from './datamarcas.json';
import { motion } from 'framer-motion';

const Marcas = () => {
    const [selectedMarcaId, setSelectedMarca] = useState(null);
    const selectedMarca = datamarcas.find((marca) => marca.id === selectedMarcaId);
   
  
    const handleMarcaClick = (marcaId) => {
      setSelectedMarca(marcaId);

    };
  
    const closeModal = () => {
      setSelectedMarca(null);
    };

  return (
    <div className="marcas" id="marcas">
      <div className="titulo">
        <h2 className="brandtitle">NUESTRAS MARCAS</h2>
      </div>
      <div className="titulo">        
      <h4 className="subtitulo text-sm"> Clic en las imágenes para más información</h4></div>
      <div className="row brand-img">
        <div className="col-sm-12 col-md-6 alineadovertical">
          <div className="contenedor">
            <motion.img    whileHover={{ scale: 1.6 }} // Escala al hacer hover
        whileTap={{ scale: 0.8 }}   // Escala al hacer clic (opcional)
              src={SCarlosLogo}
              className="img-fluid alico mb-2 w-50"
              alt="Alimentos San Carlos"
              style={{cursor:'pointer'}}
              onClick={() => handleMarcaClick("marca1")}
            />
            
          </div>
        </div>
        <div className="col-sm-12 col-md-6 alineadovertical">
          <div className="contenedor">
            <motion.img    whileHover={{ scale: 1.3 }} // Escala al hacer hover
        whileTap={{ scale: 0.8 }}   // Escala al hacer clic (opcional)
              src={CongelatoLogo}
              className="img-fluid congelato w-75 mb-1"
              alt="Congelato"
              style={{cursor:'pointer'}}
              onClick={() => handleMarcaClick("marca2")}
            />
          </div>
        </div>
      </div>
      <div className="contenedor-boton">
        <button className="btn btn-warning p-3">
          <Link to="/Productos">Nuestros Productos</Link>
        </button>
      </div>
      <Modal marca={selectedMarca} onClose={closeModal} />
    </div>
  );
};

export default Marcas;
