import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SavedDrawsComponent } from './saved-draws/saved-draws.component';

const routes: Routes = [
  { path: '', component: MainPageComponent  },
  { path: 'saved-draws',component:SavedDrawsComponent},
  { path: 'not-found',component:NotFoundComponent},
  { path: '**',redirectTo:'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { 
 }
