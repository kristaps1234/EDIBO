import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { NavigationComponent } from './navigation/navigation.component';
import { CurrencyModule } from ./currency/currency.component'



const routes: Routes = [ 
  { path: '', component: AppComponent, pathMatch: 'full' },
  // { path: 'navigationTest', component: NavigationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
