export class educacion {
    id?: Number;
    nombre: String;
    titulo: String;
    img: String;
    carrera: String;
    inicio: String;
    fin: String;
    

    constructor(nombre: String, titulo: String, img: String, carrera: String, inicio: String, fin: String ) {
        this.nombre = nombre;
        this.titulo = titulo;
        this.img = img;
        this.carrera = carrera;
        this.inicio = inicio;
        this.fin = fin;
        
    }
}