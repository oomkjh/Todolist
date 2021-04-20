import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateListComponent } from './create-list/create-list.component';
import { MyListPageComponent } from './my-list/my-list.page';
import { UpdateListComponent } from './update-list/update-list.component';

const routes: Routes = [
  { path: '', component: MyListPageComponent },
  { path: 'add-list', component: CreateListComponent },
  { path: 'update-list/:id', component: UpdateListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyListRoutingModule {}
