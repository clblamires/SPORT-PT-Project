import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExerciseCategoriesPage } from './exercise-categories.page';

const routes: Routes = [
  {
    path: '',
    component: ExerciseCategoriesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExerciseCategoriesPage]
})
export class ExerciseCategoriesPageModule {}
