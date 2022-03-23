import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string= 'Capital America'; 
  nombre2: string= 'aLeJandRa CasTrO'


  arreglo =[1,2,3,4,5,6,7,8,9,10];
  PI: number=Math.PI;
  porcentaje: number= 0.234; 
  salario: number=1234.5; 
  fecha: Date = new Date();
  activar: boolean= true;

  idioma : string= 'en'; 
  videoUrl: string='https://www.youtube.com/embed/tP8JiVUiyDo'; 

  heroe = {
    nombre: 'mujer maravilla',
    clave: 'lazo',
    edad: 300,
    direccion: {
      calle: 'segunda', 
      casa: 30 
    }
  }

 valorPromesa = new Promise<string>( (resolve) => {

    setTimeout(() => {
      resolve('llego la data');
    }, 4500);
  });



}
