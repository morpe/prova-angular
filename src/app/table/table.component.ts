import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})

export class TableComponent implements OnInit {

  @Input('table_user_input') tableUsers: [{ nome: string, anno: number, lavoro: string, fobie: string }];
  @Output() humanToKill = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  tableKillUser(id){
    this.humanToKill.emit(id);
    console.log("kill",id,this);
  }

}
