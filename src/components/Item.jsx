import Counter from "../components/Contador/Contador";


const Item = ({ producto }) => {

    return (

        <div className="col-12">
            <div className="card">
                
                <img className="img-fluid" src={process.env.PUBLIC_URL + producto.imagen} alt={producto.titulo} />
                <h3 className="card-title darktext">{producto.titulo}</h3>
                <p className="d-flex darktext justify-content-center">{producto.descripcion}</p>
                <p className="d-flex darktext justify-content-center">  {producto.vigencia}</p>
                <Counter initial={1} stock={8} onAdd={(quantity) => console.log('cantidad agregada', quantity)
                } />
            </div>
        </div>

    )
};

export default Item;
