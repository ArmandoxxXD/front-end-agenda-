import { Component, OnInit } from '@angular/core';
import { NotasService } from 'src/app/services/notas.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private notasService: NotasService) { 
    //CSS del body
    document.body.style.margin="0";
    document.body.style.height="100vh";
    document.body.style.display="block";
    document.body.style.fontFamily="GinesoSoft-ConMed";
    document.body.style.background="linear-gradient(#141e30, #243b55)";
    

  }

  ngOnInit(): void {
  }

}
