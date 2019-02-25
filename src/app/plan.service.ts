import { Exercise } from './exercise.interface';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = "PlannedExercises";

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor( public storage: Storage) {}

  getAllPlannedExercises(){
    return this.storage.get(STORAGE_KEY);
  }

  isPlanned( exercise: Exercise ){
    return this.getAllPlannedExercises().then( data => {
      let returnValue = false;
      if( data ){
        for( let i = 0; i < data.length; i++ ){
          if( data[i].exercise_id === exercise.exercise_id ){
            returnValue = true;
          }
        }
      } 
      return returnValue;
      
      // return data && data.indexOf(exercise) !== -1;
    })
  }

  addExercise( exercise: Exercise ){
    return this.getAllPlannedExercises().then( data => {
      if( data ){
        data.push( exercise );
        return this.storage.set(STORAGE_KEY, data);
      } else {
        return this.storage.set(STORAGE_KEY, [exercise]);
      }
    });
  }

  removeExercise( exercise: Exercise ){
    return this.getAllPlannedExercises().then( data => {
      if( data ){
        let index = data.indexOf( exercise );
        data.splice( index, 1 );
        return this.storage.set(STORAGE_KEY, data );
      }
    })
  } 

  removeAllExercises(){
    return this.storage.clear();
  }
 
}