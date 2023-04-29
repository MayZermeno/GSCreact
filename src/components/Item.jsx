
const Item = ({ producto }) => {

    return (
      
                    <div className="card h-100">
                        <h3 className="card-title darktext">{producto.titulo}</h3>
                        <img className="img-fluid" src={producto.imagen} alt={producto.titulo} />
                        <p className="d-flex darktext justify-content-center">{producto.descripcion}</p>
                        <p className="d-flex darktext justify-content-center">  {producto.vigencia}</p>
                    </div>
          
    )
};

export default Item;
