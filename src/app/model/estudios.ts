export class Estudios {
    id: number;
    nombreE: string;
    descripcionE: string;
    img: string;

    constructor(nombreE: string, descripcionE: string, img:string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.img = img;
    }
    
}
