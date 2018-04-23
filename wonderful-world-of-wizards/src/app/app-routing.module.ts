import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TitleScreenComponent} from './title-screen/title-screen.component';
import {NewAccountScreenComponent} from './new-account-screen/new-account-screen.component';

const routes:Routes = [
	{path: '', redirectTo: '/title', pathMatch: 'full'},
	{path: 'title', component: TitleScreenComponent},
	{path: 'newaccount', component: NewAccountScreenComponent}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
