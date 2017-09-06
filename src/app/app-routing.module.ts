import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { BasicComponent} from './basic/basic.component';
import { CardComponent } from './card/card.component';
import { ExamplesComponent } from './examples/examples.component';
import {FixedSizesComponent} from "./fixed-sizes/fixed-sizes.component";

const routes: Routes = [
  { path: '', redirectTo: '/examples', pathMatch: 'full' },
  { path: 'basic', component: BasicComponent },
  { path: 'card', component: CardComponent },
  { path: 'fixed-sizes', component: FixedSizesComponent },
  { path: '**', component: ExamplesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
