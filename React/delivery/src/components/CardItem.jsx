import './CardItem.css'

export function CardItem ({product}) {
    return (
        <div className="cardProduct">
            <img className="productImage" src={product.sourceImage} alt="Produto" />
            <span className="productTitle">{product.title}</span>
            <div className="productFooter">
                <span className="productValue">$ {product.value}</span><span className="productAdd">+</span>
            </div>
            
        </div>
    )
}