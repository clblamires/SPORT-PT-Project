import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'exercises',
        children: [
          {
            path: '',
            loadChildren: '../exercises/exercises.module#ExercisesPageModule'
          },
          {
            path: 'exercise/:id',
            loadChildren: '../exercise/exercise.module#ExercisePageModule'
          }
        ]
      },
      {
        path: 'plan',
        children: [
          {
            path: '',
            loadChildren: '../plan/plan.module#PlanPageModule'
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: '../about/about.module#AboutPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/exercises',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
