
import {Component, OnInit} from '@angular/core';

    //Todo compoente precisa de um decorator//informa as carcteristicas deste componente//
    @Component({
        //app-nav-bar' aponta para o componente dentro do Html - qual o nome da tag que quero usar lá.
        selector: 'app-nav-bar',

        //Informo o template apontando para ./nav-bar.component.html
        templateUrl:'./nav-bar.component.html',

        //Informo o template apontando para ./nav-bar.component.html
        styleUrls:['./nav-bar.component.scss'],

    })


export class NavBarComponent implements OnInit{
     construtor(){ 
    }
     //OnInit vai ser chamado toda vez q o componente for inicializado
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
}