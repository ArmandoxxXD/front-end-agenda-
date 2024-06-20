import { Component, OnInit, HostBinding } from '@angular/core';
import { NotasService } from 'src/app/services/notas.service';
import * as $ from "jquery";


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {
  notas: any = [];
  seleccionadas: any = [];
  seleccionadasID: any = [];
  num:any=0;
  indice:any =0;
  ide: any;
  ide2: any;
  maximo: number = 50;
  numero: any = 0;
  array:any=10;
  
  
  
  constructor(private notasService: NotasService) {

    //CSS del body
    document.body.style.margin = "0";
    document.body.style.display = "grid";
    document.body.style.height = "100vh";
    document.body.style.placeItems = "center";
    document.body.style.padding = "1rem";
    document.body.style.fontFamily = "Source Code Pro', monospace";
    document.body.style.background = "linear-gradient(#141e30, #243b55)";
  }

  ngOnInit(): void {
    this.getNotas();
  }

  Completada(id: any) {
    this.notasService.getNota(id).subscribe(
      resp => {
        console.log(resp)
        this.ide = id;
        console.log(this.ide);

        var estado= document.getElementById("btn"+this.ide)?.textContent;

          if (estado === "Seleccionar"){
          this.seleccionadasID.push(this.ide);
          console.log(this.seleccionadasID)
          $('#' + this.ide).css('border-style', 'solid');
          $('#' + this.ide).css('border-width', '2px');
          $('#' + this.ide).css('border-color', 'green');
          console.log(estado);
          this.seleccionadas.push(resp);
          $('#btn' + this.ide).html('Cancelar');
          this.num++;
          $('#slc').html(this.num+'/'+(this.numero+1));
          console.log("array:"+this.array);
        }else if (estado === "Cancelar" ){
          this.Cancelar(id)   
        }
      },
      err => console.error(err)
    );
  }

  Cancelar(id: any){
    var estado= document.getElementById("btn"+id)?.textContent;
      console.log(estado);
    this.notasService.getNota(id).subscribe(
      resp =>{
        $('#' + this.ide).css('border-style', 'none');
        $('#btn' + this.ide).html('Seleccionar');
        this.num--;
        $('#slc').html(this.num+'/'+(this.numero+1));

          this.indice=this.seleccionadasID.indexOf(id);
          console.log(this.indice);
          this.seleccionadasID.splice(this.indice,1);
          console.log(this.seleccionadasID);   
      },
      err => console.error(err)
    ); 
    
  }

  EliminarSeleccionadas() {
    console.log(this.seleccionadasID);
    console.log(this.seleccionadas);
    for(var i=0;i<this.seleccionadasID.length;i++){
      this.notasService.deleteNota(this.seleccionadasID[i]).subscribe(
      resp => {
        console.log(resp);
          this.num=0;
        this.getNotas();
      },
      err => console.error(err)
    )
    }
    
  }


  Eliminar(id: any) {
    console.log(id);
    this.notasService.deleteNota(id).subscribe(
      resp => {
        console.log(resp);
        
          this.num=0;
        this.getNotas();
      },
      err => console.error(err)
    )
  }

  getNotas() {
    this.notasService.getNotas().subscribe(
      resp => {
        this.notas = resp;

        for (let i = 0; i < this.maximo; i++) {
          this.ide2 = this.notas[i].id;
          console.log("ID:"+this.ide2);

          this.numero = (this.ide2 - this.ide2) + i;
          $('#slc').html('0/'+(this.numero+1));
          if (this.numero == 0) {
            document.body.style.height = "100vh";
            console.log("Array:"+this.numero);
          } else {
            document.body.style.height = "100%";
            console.log("Array:"+this.numero);
          }
        }
       
        
      },
      err => console.error(err)
    );
  }

  refresh(id:any): void {
     window.location.replace(`edit/${id}`); 
    }


/*
for (let i = 0; i < this.array; i++) {
        this.ide3 = this.notas[i].id;
        console.log("ID:"+this.ide3);

        this.numero2 = (this.ide3 - this.ide3) + i;

        if (this.numero2 == this.indice) {
          
          this.seleccionadasID.splice(this.numero2,2);
          console.log(this.seleccionadasID)
        } else {
          
        }
      }
*/
}
