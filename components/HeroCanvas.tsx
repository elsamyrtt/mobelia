export default function HeroCanvas(): React.JSX.Element {
    return (
        <canvas
            id="hero-canvas"
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
        >
            {/*Aqui es donde vamos a poner el modelo 3d de una silla o sofa mas adelante despues de hacer unos benchmarks*/}
        </canvas>
    );
}