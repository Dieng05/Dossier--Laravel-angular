export class User {
    [x: string]: any;

    id:number;
    name: string;
    email: string;
    password: string;

    // Constructeur avec arguments
  
    // Constructeur sans arguments avec des valeurs par défaut
    constructor() {
        this.id=0;
        this.name = '';
        this.email = '';
        this.password = '';
    }
}
