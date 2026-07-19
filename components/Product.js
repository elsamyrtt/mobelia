import styles from "../styles/components.css"

export default function Product({title,price,description,image}){
    
    return(

        <article className="Product">

            <img src={image}/>
            <h3>{title}</h3>
            <span>{price}</span>
            <p>{description}</p>

        </article>

    );
}