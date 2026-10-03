class Product {
    //Stock = 0 se necesita fabricacion
    //Implementar otros modelos conjuntos como tipos de madera y tela
    constructor(name, type_wood, type_fabric, stock, painted, upholstered, price) {
        this.name = name;
        this.type_wood = type_wood;
        this.type_fabric = type_fabric;
        this.stock = stock;
        this.painted = painted;
        this.upholstered = upholstered;
        this.price = price;
    }

}