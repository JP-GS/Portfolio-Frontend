export class Proyecto {
    id? : number;
     nombreP : string;
     imgP : string;
     descripcionP : string;
     urlP: string;

     constructor( nombreP : string,  imgP : string,  descripcionP : string,  urlP : string) {
        this.nombreP = nombreP;
        this.imgP = imgP;
        this.descripcionP = descripcionP;
        this.urlP = urlP;
    }
}
