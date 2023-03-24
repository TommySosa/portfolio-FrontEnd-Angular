export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    img: string;
    titulo: string;

    constructor(nombre: string, apellido: string, descripcion:string, img: string, titulo: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.img = img;
        this.titulo = titulo;
    }
}