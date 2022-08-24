export class Educacion {
    id?: number;
    nombreEdu: string;
    titulo: string;
    carrera: string;
    imgEdu: string;    
    inicio: string;
    fin: string;    

    constructor(nombreEdu: string, titulo: string, carrera: string, imgEdu: string, inicio: string, fin: string ) {
        this.nombreEdu = nombreEdu;
        this.titulo = titulo;        
        this.carrera = carrera;
        this.imgEdu = imgEdu;
        this.inicio = inicio;
        this.fin = fin;        
    }
}