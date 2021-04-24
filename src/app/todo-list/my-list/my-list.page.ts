import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from 'src/app/providers/list.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mylist',
  templateUrl: './my-list.page.html',
  styleUrls: ['./my-list.page.scss'],
})
export class MyListPageComponent implements OnInit {
  list: any;
  listcheck: any;
  currentList: any;

  constructor(private listService: ListService, private router: Router) {}

  async getList() {
    this.list = await this.listService.getList().toPromise();
  }

  ngOnInit() {
    this.getList();
  }

  add() {
    this.router.navigate(['add-list'], { replaceUrl: true });
  }

  chcekBox(checkList: any) {
    let list: any;
    this.listService.getList().subscribe(async (data) => {
      list = data;
      for (let i = 0; i < list.length; i++) {
        if (parseInt(list[i].id) == checkList.id) {
          this.listcheck = this.list[i];
          this.currentList = {
            list_id: this.listcheck.id,
            list_title: this.listcheck.list_title,
            list_description: this.listcheck.list_description,
            list_status: true,
          };
          await this.listService
            .updateList(this.currentList, this.listcheck.id)
            .toPromise()
            .then(() => {
              this.getList();
            });
          alert('successed!');
        }
      }
    });
  }

  async deleteList(id: any) {
    if (confirm('Do you want to delete list data?')) {
      await this.listService
        .deleteList(id)
        .toPromise()
        .then(() => {
          this.getList();
        });
    }
  }

  editList(listId: any) {
    this.router.navigate(['update-list', listId]);
  }
}
