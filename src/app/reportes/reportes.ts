import { Component, OnInit } from '@angular/core';
import { NavBar } from '../../componentes/nav-bar/nav-bar';
import {NgForm, FormsModule} from '@angular/forms';
import {ObtenerRegistros} from '../../services/obtener-registros';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-reportes',
  imports: [NavBar, FormsModule, DatePipe],
  templateUrl: './reportes.html',
  styleUrl: './reportes.scss',
})
export class Reportes {


  dataArray: any[] = [];

  constructor(private obtener: ObtenerRegistros){
      

  }

  ngOnInit(){
      console.log('item iniciado');
            this.obtener.obtenerTodos().subscribe({
        next: (response) =>{
          this.dataArray = response.data;
        }
      } );
  }

  orquestadorFunciones(form: NgForm){


    const {identificador_registro, capacidad_acoplaminento, Resultado} = form.value;

    if(identificador_registro && !capacidad_acoplaminento && !Resultado){
      this.getDataById(identificador_registro);
      return;
    }else if(!identificador_registro && capacidad_acoplaminento && !Resultado){
      this.getDataByCapacidad(capacidad_acoplaminento);
      return;
    }else if(!identificador_registro && !capacidad_acoplaminento && Resultado){
      this.getDataByResultado(Resultado);
      return;
    }

  }


  getDataById(id: number){
    this.obtener.obtenerById(id).subscribe({
      next: (respuesta) =>{
        console.log(respuesta.data);
        this.dataArray = respuesta.data;
      }
    })


  }

  getDataByCapacidad(capacidad: number){

    this.obtener.obtenerPorCapacidad(capacidad).subscribe({
      next: (resultado) =>{
        this.dataArray = resultado.data;
      }
    })
  }

  getDataByResultado(resultado: string){

    try{
      this.obtener.obtenerPorResultadoFinal(resultado).subscribe({
        next: (respuesta) =>{
          this.dataArray = respuesta.data;
        }
      })

    }catch(error){
      console.log(error)
    }
  }


  deletRow(id: number){

    try{

    this.obtener.delete(id).subscribe(
      {
        next: (information) =>{
          this.dataArray = information.data;
        }
      }
    )
  }catch(error){
    console.log(error);
  }
  }


}
