// TODO: create a component that displays a single bakery item

function BakeryItem({prop1, updateCart}) {
    return (
        <div>
            <h3>{prop1.name}</h3>
            <img src={prop1.image} />
            <p>{prop1.description}</p>
            <p>{prop1.price}</p>
            <button onClick={ () => updateCart(prop1.name, prop1.price)}>Add to Cart</button>
        </div>
    )
}


export default BakeryItem;