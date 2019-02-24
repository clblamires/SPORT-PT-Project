import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../exercises.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {

  exercises: any = null;

  constructor(public exercisesService: ExercisesService) {
    this.exercisesService.getExercises().then( data => {
      this.exercises =  data;
    });

    this.exercisesService.getExercises();
  }

  ngOnInit() {
  }

}
