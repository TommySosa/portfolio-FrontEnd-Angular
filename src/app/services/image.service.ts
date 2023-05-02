import { Injectable, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL, getMetadata } from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class ImageService implements OnInit{
  url: string = "";

  urlImg: string = "";
  nombre:string = "";
  constructor(private storage: Storage) { }

  ngOnInit(): void {
    this.clearURL();
  }
  public uploadImage($event: any, name: string ): void {
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imagen/`+ name)
    uploadBytes(imgRef, file)
    .then(response => {
      console.log("La imagen se ha cargado correctamente.");
      this.getImages(name);
    })
    .catch(error => console.log(error))
    this.clearURL();
  }
  getImages(nombre:string) {
    const imagesRef = ref(this.storage, 'imagen')
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        const metadata = await getMetadata(item);
        if (metadata.name === nombre) {
          this.url = await getDownloadURL(item); 
          console.log("La URL es: " + this.url);
        }
      }
    })
    .catch(error => console.log(error))
  }
  
  
  
  clearURL(){
    this.url = "";
    this.urlImg = "";
  }
}

