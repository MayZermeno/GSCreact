import "./ItemListContainer/ItemListContainer.css";
import Counter from "./Contador/Contador"

const ItemDetail = ({ item }) => {
    return (

        <div className="container mt-5">
            <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4  g-3">
                <div className="producto-detalle">
                    <img src={item.imagen} alt={item.titulo} className="img-fluid" />
                    <h3 className="card-title darktext">{item.titulo}</h3>
                    {/* <p className="d-flex darktext justify-content-center"> id: {item.id} </p> */}
                    <p className="d-flex darktext">{item.descripcion}</p>
                    <p className="d-flex darktext">  {item.vigencia}</p>
                    <Counter initial={1} stock={8} onAdd={(quantity) => console.log('cantidad agregada', quantity)
                } />
                </div>
            </div>
        </div>
    )


}
export default ItemDetail