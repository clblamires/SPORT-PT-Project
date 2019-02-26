import { Component, OnInit, ViewChild } from '@angular/core';
import { ExercisesService } from '../exercises.service';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { IonSearchbar } from '@ionic/angular';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.page.html',
  styleUrls: ['./exercises.page.scss'],
})
export class ExercisesPage implements OnInit {

  exercises: any = null;
  searchQuery: string = '';

  @ViewChild('searchbar') searchbar: IonSearchbar;

  constructor(public exercisesService: ExercisesService, public keyboard: Keyboard) {
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
    this.keyboard.hide();
  }

  ionViewWillEnter(){
    if( this.searchQuery.length > 0 ){
      this.searchbar.setFocus();
    } else {
      this.keyboard.hide();
    }
  }

  ngOnInit() {
  }

}
