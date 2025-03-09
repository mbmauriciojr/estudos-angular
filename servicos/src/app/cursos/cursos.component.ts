import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {

  cursos: string[] = [];
  cursosService: CursosService;

  constructor() {
    this.cursosService = new CursosService();
   }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }
}
