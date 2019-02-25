import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../exercises.service';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {

  exercises: any = null;
  searchQuery: string = '';

  constructor(public exercisesService: ExercisesService) {
    this.exercisesService.getExercises().then( data => {
      this.exercises =  data;
    });
  }

  getFilteredExercises( event ){
    this.exercisesService.getExercises().then( data => {
      let queryString = event.target.value;
      if( queryString.trim() == '' ) {
        this.exercises = data;
        return;
      };
      if ( queryString !== undefined ){
        this.exercisesService.getFilteredExercises( queryString ).then( filteredData => {
          this.exercises = filteredData;
        })
      }
    })
  }

  resetList( event ){
    this.exercisesService.getExercises().then( data => {
      this.exercises =  data;
    });
  }

  ngOnInit() {
  }

}
