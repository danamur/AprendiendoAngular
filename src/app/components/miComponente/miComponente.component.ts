import { Component } from '@angular/core'

@Component({
    selector: 'miComponente',
    templateUrl: './miComponente.component.html'
})
export class MiComponente{

    public titulo: String;
    public comentario: String;
    public year: number;

    constructor(){
        this.titulo = "Hola mundo, soy MI COMPONENTE";
        this.comentario = "Este es mi primer componente";
        this.year = 2020;
        console.log("Componente mi-componente cargado !!");
        console.log(this.titulo, this.comentario, this.year);
    }
    
}