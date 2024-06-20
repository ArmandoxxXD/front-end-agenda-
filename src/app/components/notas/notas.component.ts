import { Component, OnInit, HostBinding } from '@angular/core';
import { Nota } from 'src/app/models/Notas';
import { NotasService } from 'src/app/services/notas.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  nota: Nota = {
    id: 0,
    titulo: '',
    materia: '',
    descripcion: '',
    fechCreacion: new Date(),
    fechLimite: ''
  };
edit: boolean =false;

  constructor(private notasService: NotasService, private router: Router, private activatedRoute: ActivatedRoute) {
    //CSS del body

    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.height = "100vh";
    document.body.style.width = "98%";
    document.body.style.fontFamily = "sans-serif";
    document.body.style.marginLeft = "10px";
    document.body.style.background = "linear-gradient(#141e30, #243b55)";
    //document.body.style.backgroundSize = "cover";
    //document.body.style.alignItems="right";
  }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if ( params['id']) {
      this.notasService.getNota(params['id']).subscribe(
        resp => {
          console.log(resp);
          this.nota = resp;
          this.edit=true;
          $('#lista').html('/Lista');
        },
        err => console.error(err)
      );
    }
  }

  GuardarNota() {
    delete this.nota.fechCreacion;
    delete this.nota.id;

    this.notasService.saveNota(this.nota)
      .subscribe(
        resp => {
          console.log(resp);
          this.router.navigate(['/lista'])
        },
        err => console.error(err)
      )
  }

  ActualizarNota() {
    delete this.nota.fechCreacion;
    let number: number = Number(this.nota.id);
    this.notasService.updateNota(number,this.nota).subscribe(
      resp =>{
        console.log(resp);
        this.router.navigate(['/lista']);
        },
        err => console.error(err)
        );
  }

  
}
