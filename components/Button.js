import styles from "../styles/components.css";

export default function Button({text, children, onClick}){
    return(
        <button className="button" onClick={onClick}>
            {children}
            <p className="text">{text}</p>
        </button>
    );
}