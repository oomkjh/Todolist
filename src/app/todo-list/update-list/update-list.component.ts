import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from 'src/app/providers/list.service';

@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.scss'],
})
export class UpdateListComponent implements OnInit {
  id: any;
  editlist: any;
  list: any;
  currentList: any;

  constructor(
    private route: ActivatedRoute,
    private listService: ListService,
    private router: Router
  ) {}

  ngOnInit() {
    const listId = this.route.snapshot.params.id;
    this.id = listId;

    this.listService.getList().subscribe((data) => {
      this.list = data;
      for (let i = 0; i < this.list.length; i++) {
        if (parseInt(this.list[i].id) == this.id) {
          this.editlist = this.list[i];
          break;
        }
      }
    });
  }

  async updateList(list: any) {
    this.currentList = {
      list_id: list.id,
      list_title: list.title,
      list_description: list.description,
    };

    await this.listService
      .updateList(this.currentList, this.id)
      .toPromise()
      .then(() => {
        this.router.navigate(['/']);
      });
  }
}
