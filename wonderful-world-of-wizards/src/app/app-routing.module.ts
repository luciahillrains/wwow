import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TitleScreenComponent} from './title-screen/title-screen.component';

const routes:Routes = [
	{path: '', redirectTo: '/title', pathMatch: 'full'},
	{path: 'title', component: TitleScreenComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
