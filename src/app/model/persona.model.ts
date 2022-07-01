export class Persona {
    id?: Number;
    nombre: String;
    apellido: String;
    descripcion: String;
    img: String;

    constructor(nombre: String, apellido: String, descripcion: String, img: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.img = img;
    }
}