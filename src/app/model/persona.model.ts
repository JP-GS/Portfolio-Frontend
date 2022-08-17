export class Persona {
    id?: Number;
    nombrePers: string;
    apellido: string;
    descripcion: string;
    img: string;

    constructor(nombrePers: string, apellido: string, descripcion: string, img: string) {
        this.nombrePers = nombrePers;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.img = img;
    }
}