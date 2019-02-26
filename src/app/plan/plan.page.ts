import { Exercise } from './../exercise.interface';
import { PlanService } from './../plan.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {

  plannedExercises: any = null;
  totalExercises: number = 0;

  constructor( 
    public planService: PlanService, 
    public alertCtrl: AlertController 
  ) { }

  ngOnInit() {
  }
  
  ionViewWillEnter(){
    // this.plannedExercises = this.planService.getPlannedExercises();
    this.getExercises();
  }

  getExercises(){
    this.planService.getAllPlannedExercises().then( data => {
      this.plannedExercises = data;
      // console.log(this.plannedExercises.length);
      if( this.plannedExercises ){
        this.totalExercises = this.plannedExercises.length;
      }
    });
  }

  removeExercise( exercise ){
    this.planService.removeExercise(exercise).then( () => {
      this.getExercises();
    });
  }

  async clear(){
    const sure = await this.alertCtrl.create({
      header: "Are you sure?",
      message: "This will remove all exercises and stretches from your treatment plan. This action cannot be undone.",
      buttons: [{
        text: "No",
        role: 'cancel'
      },{
        text: "Yes",
        handler: () => {
          this.planService.removeAllExercises();
          this.plannedExercises = [];
        }
      }]
    });
    sure.present();
  }

}
