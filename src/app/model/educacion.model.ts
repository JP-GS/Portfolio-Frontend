export class Educacion {
    id?: Number;
    nombre: string;
    titulo: string;
    img: string;
    carrera: string;
    inicio: string;
    fin: string;
    

    constructor(nombre: string, titulo: string, img: string, carrera: string, inicio: string, fin: string ) {
        this.nombre = nombre;
        this.titulo = titulo;
        this.img = img;
        this.carrera = carrera;
        this.inicio = inicio;
        this.fin = fin;
        
    }
}