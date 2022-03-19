import './styles.css'

const Basket = (props) => {
    const { cartItems } = props;

    console.log({cartItems})
    const itemsPrice = cartItems.reduce((acc, count) => acc + count.price * count.quantity, 0);
    const deliveryPrice = itemsPrice > 500 ? 0 : 20;
    const totalPrice = itemsPrice + deliveryPrice;

    return (
        <aside className="aside">
            <h2 className="title">Cart Items</h2>
            <hr></hr>
            <div>
                {cartItems.length === 0 && <div className="title-name">Cart is Empty, add Items to cart.</div>}
                {cartItems.map((item) => (
                    <div id={item.id} key={itemsPrice.key} className='row'>
                        <div>{item.productName}</div>
                        R {item.productPrice}
                    </div>
                ))}
            </div>
            {cartItems.length !== 0 && (
                <>
                <hr></hr>
                <div className='col'>
                    <div>Price</div>
                    <div>R {itemsPrice.toFixed(2)}</div>
                </div>
                <div className='col'>
                    <div>Delivery</div>
                    <div>R {deliveryPrice.toFixed(2)}</div>
                </div>
                <div className='col'>
                    <div><strong>Total</strong></div>
                    <div><strong>R {totalPrice.toFixed(2)}</strong></div>
                </div>
                </>
            )}
        </aside>
    );
};

export default Basket;