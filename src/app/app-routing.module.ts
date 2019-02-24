import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'exercises', loadChildren: './exercises/exercises.module#ExercisesPageModule' },
  { path: 'exercise', loadChildren: './exercise/exercise.module#ExercisePageModule' },
  { path: 'plan', loadChildren: './plan/plan.module#PlanPageModule' },
  { path: 'exercise-categories', loadChildren: './exercise-categories/exercise-categories.module#ExerciseCategoriesPageModule' },
  { path: 'about', loadChildren: './about/about.module#AboutPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
