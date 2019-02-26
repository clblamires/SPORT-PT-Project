import { Exercise } from './../exercise.interface';
import { PlanService } from './../plan.service';
import { Component, OnInit } from '@angular/core';
import { ExercisesService } from '../exercises.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
// import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';



@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {

  exercise: Exercise;
  safeVideoUrl: SafeResourceUrl;
  loader: any;
  onPlan: boolean;
  // exerciseIsOnPlan: boolean;

  constructor(
    public exercisesService: ExercisesService, 
    public route: ActivatedRoute,
    public router: Router,
    public domSanitizer: DomSanitizer,
    public loadingCtrl: LoadingController,
    public planService: PlanService,
    public toastCtrl: ToastController,
    public storage: Storage,
    public navCtrl: NavController,
    // public youtube: YoutubeVideoPlayer
  ) {
    let id = this.route.snapshot.paramMap.get("id");
    // this.presentLoading();
    this.exercisesService.getExercise(id).then( data => {
      this.exercise = data;
      // this.exercise.video_url = this.exercise.video_url.replace("watch?v=", "embed/");
      // this.safeVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.exercise.video_url);
      // this.dismissLoading();
    });
  }

  ionViewWillEnter(){
    this.exerciseIsOnPlan();
  }

  exerciseIsOnPlan(){
    this.planService.isPlanned(this.exercise).then( val => {
      this.onPlan = val;
    })
    // return this.planService.isPlanned(this.exercise); // this.planService.isOnPlan(this.exercise);
  }

  async addExerciseToPlan( id ){
    const toast = await this.toastCtrl.create({
      message: "Added to Treatment Plan",
      duration: 1500,
      animated: true,
      color: "dark",
      position: "bottom",
      showCloseButton: true,
      closeButtonText: 'CLOSE'
      // showCloseButton: true
    });
    this.planService.addExercise(this.exercise).then( () => {
      toast.present();
      this.exerciseIsOnPlan();
    });
    
  }

  async removeExerciseFromPlan( id ){
    const toast = await this.toastCtrl.create({
      message: "Removed from Treatment Plan",
      duration: 1500,
      animated: true,
      color: "dark",
      position: "bottom",
      showCloseButton: true,
      closeButtonText: 'CLOSE'
    });
    this.planService.removeExercise(id).then( () => {
      let currentRoute = this.router.url;
      // console.log("Curent route includes plan: " + currentRoute.includes("plan"));
      if( currentRoute.includes("plan")){
        // this.router.navigate(['/tabs/plan/'], { relativeTo: this.route });
        this.navCtrl.pop(); // only way I could get it to work...
      }
      toast.present();
      this.exerciseIsOnPlan();
    });
  }


  // loader for the video
  async presentLoading(){
    this.loader = await this.loadingCtrl.create();
    this.loader.present();
  }
  async dismissLoading(){
    this.loader.dismiss();
  }

  ngOnInit() {
  }

}
