import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  
  title = 'Oreficool';

  constructor(){
    console.log("constructor!");
  }

  appUser = [
    { nome: 'neno', anno: 666, lavoro: "corre", fobie: "del buio" },
    { nome: 'caccola', anno: 888, lavoro: "tappa orifizi", fobie: "dito" },
    { nome: 'fufu', anno: 1547, lavoro: "fufunista", fobie: "un carretto meno fenotipato" },
    { nome: 'fano', anno: 98711, lavoro: "interprete di design", fobie: "non fare questo lavoro" },
    { nome: 'peto', anno: 157447, lavoro: "chiriurgo", fobie: "fare l'interprete di design" },
    { nome: 'kono', anno: 1879547, lavoro: "sviluppatore di vlc", fobie: "uccidcere tutti quelli che usano vlc" }
  ];



  appGetUser(event: { nome: string, anno: number, lavoro: string, fobie: string }) {
    this.appUser.push( {
      nome: event.nome,
      anno: event.anno,
      lavoro: event.lavoro,
      fobie: event.fobie
    } )
  }

  appBuryUser(event){
    let hu = true;
    console.log("bury",event);
    this.appUser.splice(event,1);
  }

}
