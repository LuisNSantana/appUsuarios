import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit {
  imgUrl = 'https://placeimg.com/640/480/arch/grayscale'
  constructor() { }

  ngOnInit(): void {
  }

}
