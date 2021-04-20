import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from 'src/app/providers/list.service';

@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.scss'],
})
export class CreateListComponent implements OnInit {
  newList: any = {};
  constructor(private listService: ListService, private router: Router) {}

  ngOnInit() {}

  async addList(list: any) {
    this.newList = {
      list_id: list.id,
      list_title: list.title,
      list_description: list.description,
      list_status: false,
    };

    await this.listService.addList(this.newList);
    this.router.navigate(['/']);
  }
}
