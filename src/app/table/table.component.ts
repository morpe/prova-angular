import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  humans = [
    {nome:'fufu',anno:1547,lavoro:"fufunista",fobie:"un carretto meno fenotipato"},
    {nome:'fano',anno:98711,lavoro:"interprete di design",fobie:"non fare questo lavoro"},
    {nome:'peto',anno:157447,lavoro:"chiriurgo",fobie:"fare l'interprete di design"},
    {nome:'kono',anno:1879547,lavoro:"sviluppatore di vlc",fobie:"uccidcere tutti quelli che usano vlc"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
