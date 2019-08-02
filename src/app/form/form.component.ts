import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})

export class FormComponent implements OnInit {

  @Output() formUsers = new EventEmitter<{nome: string,anno: number,lavoro: string,fobie: string}>();

  constructor() { }

  ngOnInit() {
  }

  formAddUser(a, b, c, d) {

    this.formUsers.emit({
      nome: a.value,
      anno: b.value,
      lavoro: c.value,
      fobie: d.value
    });

    console.log(this);

  }


}
