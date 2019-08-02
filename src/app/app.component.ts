import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'Oreficool';

  appUser = [
    { nome: 'neno', anno: 666, lavoro: "corre", fobie: "del buio" },
    { nome: 'caccola', anno: 888, lavoro: "tappa orifizi", fobie: "dito" },
    { nome: 'fufu', anno: 1547, lavoro: "fufunista", fobie: "un carretto meno fenotipato" },
    { nome: 'fano', anno: 98711, lavoro: "interprete di design", fobie: "non fare questo lavoro" },
    { nome: 'peto', anno: 157447, lavoro: "chiriurgo", fobie: "fare l'interprete di design" },
    { nome: 'kono', anno: 1879547, lavoro: "sviluppatore di vlc", fobie: "uccidcere tutti quelli che usano vlc" }

  ];

}
