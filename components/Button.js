import styles from "../styles/components.css";

export default function Button({text}){
    return(
        <button className="button">
            <p className="text">{text}</p>
        </button>
    );
}