export class Proyectos {
    id: number;
    nombre: string;
    descripcion: string;
    linkUrl: string;
    githubUrl: string
    img: string;

    constructor(nombre: string, descripcion: string,linkUrl: string, githubUrl:string, img:string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.linkUrl = linkUrl;
        this.githubUrl = githubUrl;
        this.img = img;
    }
    
}