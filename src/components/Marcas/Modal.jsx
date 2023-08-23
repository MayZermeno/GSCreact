import React from 'react';
import './Modal.css';
import SCarlosLogo from './SCarloslogo.png';
import CongelatoLogo from './Congelato.png';

const Modal = ({ marca, onClose }) => {
  const marcaInfo = marca; // Usa la marca seleccionada del estado

  const renderMarcaInfo = () => {
    if (marcaInfo) {
      return (
        <div>
          {renderMarcaImagen()}
          <p className='texto-marca'>{marcaInfo.descripcion}</p>
        </div>
      );
    } else {
      return <p>Marca no encontrada</p>;
    }
  };

  const renderMarcaImagen = () => {
  
    let imagenMarca = marca.id === "marca1" ?   SCarlosLogo : CongelatoLogo;

    return <div className='marca-imagen'><img className="img-fluid w-75" src={imagenMarca} alt="Imagen de la Marca" /></div>
  };

  return (
    <div className={`modal ${marca ? 'active' : ''}`}>
      <div className="modal-content">
        {renderMarcaInfo()}
        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;

