export class Experiencia {
     id? : number;
     nombreExp : string;
     puesto : string;
     descripcion : string;
     imgExp : string;
     inicio : string;
     fin : string;

     constructor( nombreExp : string,  puesto : string,  descripcion : string,  imgExp : string,  inicio : string,  fin : string) {
        this.nombreExp = nombreExp;
        this.puesto = puesto;
        this.descripcion = descripcion;
        this.imgExp = imgExp;
        this.inicio = inicio;
        this.fin = fin;
    }
}
