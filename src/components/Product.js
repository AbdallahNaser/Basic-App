import './product.css'

function Product(props)
{
    return (
        <div className="card card-content ">
        <img src={props.product.image} alt="/"></img>
        <h1 key={props.product.id} className="card-title">{props.product.title}</h1>
        <h3 key={props.product.id} className="card-description">{props.product.description}</h3>
        <p key={props.product.id} className="card-price">price: {props.product.price}</p>
        <button className="card-title" onClick={()=>console.log("you want to buy",props.product.title)}> buy now !</button>
    </div>
    )
}

export default Product;