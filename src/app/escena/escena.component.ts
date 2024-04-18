import { Component, Input } from '@angular/core';
import { iStep } from '../interfaces/iStep';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent {

  @Input() stepsEscena: iStep[] = []



}
