import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})



export class TableComponent implements OnInit {

  @Input('table_user_input') tableUsers: [{ nome: string, anno: number, lavoro: string, fobie: string }];

  constructor() { }

  ngOnInit() {
  }

}
