import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyListRoutingModule } from './my-list.routing.module';

import { MyListPageComponent } from './my-list/my-list.page';
import { CreateListComponent } from './create-list/create-list.component';
import { UpdateListComponent } from './update-list/update-list.component';

@NgModule({
  imports: [
    HttpClientModule,
    FormsModule,
    RouterModule,
    MyListRoutingModule,
    CommonModule,
  ],
  exports: [],
  declarations: [MyListPageComponent, CreateListComponent, UpdateListComponent],
  providers: [],
})
export class MyListModule {}
