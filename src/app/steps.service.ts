import { Injectable } from '@angular/core';
import { iStep } from './interfaces/iStep';

@Injectable({
  providedIn: 'root'
})
export class StepsService {

  public steps: iStep[] = [
    {
      title: 'Dedica muchas horas',
      description: 'Al menos 30 horas a la semana. Si no tienes suficiente, tendrás que dedicarle más horas. Al principio parece imposible, pero notarás una mejoría rápidamente.',
      img: '',
      bgcolor: ''
    },
    {
      title: 'Programa proyectos propios:',
      description: 'Más vale 10 horas trabajando en proyectos propios, que 10 horas mirando tutoriales. La motivación y la implicación en el proyecto ayudará a acelerar tu aprendizaje.',
      img: '',
      bgcolor: ''
    },
    {
      title: 'Procura descansar:',
      description: 'Descansar bien y desconectar son vitales. De esta forma reducirás el estrés y la ansiedad. Mejorarás tu concentración y afianzarás tu aprendizaje.',
      img: '',
      bgcolor: ''
    }
  ]

  getSteps() {
    return this.steps
  }

  constructor() { }
}
