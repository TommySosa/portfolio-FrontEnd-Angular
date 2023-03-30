export class Capacitacion {
    id: number;
    nombre: string;
    periodo: string;
    img: string;

    constructor(nombre: string, periodo: string, img:string) {
        this.nombre = nombre;
        this.periodo = periodo;
        this.img = img;
    }
    
}