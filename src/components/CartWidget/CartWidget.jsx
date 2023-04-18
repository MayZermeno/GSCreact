import cart from './assets/CartW.svg';
import "./CartWidget.css"

const CardWidget = () => {

    return (
        <div>
            <img src={cart} alt='cart-widget' />
           <p>0</p>
        </div>
    )
}

export default CardWidget