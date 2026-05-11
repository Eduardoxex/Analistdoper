import { Component } from '@angular/core';
import {NgForm, FormsModule} from '@angular/forms';
import {ConvertirAPdf} from '../../services/convertir-a-pdf';
import {NavBar} from '../../componentes/nav-bar/nav-bar';
import {CvAnalisis} from '../../services/cv-analisis';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-operaciones',
  imports: [ FormsModule, NavBar, DatePipe],
  templateUrl: './operaciones.html',
  styleUrl: './operaciones.scss',
})
export class Operaciones {


  cv_analizado: boolean = false;
  oja_de_vida: File | any = null;
  name_use: any = localStorage.getItem('token');
  contenido_a_renderizar: any = null;
  cargando: boolean = false;

    constructor(private convertirPdf: ConvertirAPdf,
                private analizarCvService: CvAnalisis
    ){}



  onFileSelected(event: any){
    const file: File = event.target.files[0];
    if(file){
      this.oja_de_vida = file;
      console.log('el archivo ha sido seleccionado exitosamente: ', this.oja_de_vida);

    }else{
      console.log('La operacion no fue exitosa: ', event.target.files[0]);
    }

  }  




  async analizarCv(analizarForm: NgForm){
    this.cargando = true;


    try{

      console.log('el boton fue pulsado');

      const {id_analista, positionDescription} = analizarForm.value;
      //console.log(this.oja_de_vida, nameAnalista, positionDescription);

      const cv_formatoString = await this.convertirPdf.getPdfText(this.oja_de_vida);

      if(cv_formatoString){
         this.analizarCvService.analizarCv( cv_formatoString, id_analista, positionDescription).subscribe(
          {next: (informacion) => {
            this.contenido_a_renderizar  = informacion.data;
            this.cv_analizado = true;
            this.cargando = false;
          }}
         );

      }else{
        console.log('La conversion no ha sido exitosa');
      }
      

    }catch(error){
            this.cargando = false;

      console.log({mensage: 'Ha ocurrido un error: ', err: error});

    }


  }




}
