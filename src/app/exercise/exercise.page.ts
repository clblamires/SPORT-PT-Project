import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../exercises.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {

  exercise: any;

  constructor(public exercisesService: ExercisesService, public route: ActivatedRoute) {
    let id = this.route.snapshot.paramMap.get("id");
    this.exercisesService.getExercise(id).then( data => {
      this.exercise = data;
    })
    
  }

  ngOnInit() {
  }

}
