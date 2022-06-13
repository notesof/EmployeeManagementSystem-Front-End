export class Employee {
    username: string ;
    password: string ;
   userId: number ;
     firstname: string  ;
     lastname: string  ;
     email: string  ;
dob: Date;

constructor(
     username: string ,
    password: string ,
    userId: number,
     firstname: string  ,
    lastname: string  ,
    email: string  ,
    dob: Date
){
   this.username= username ;
   this.password=password;
   this.userId= userId ;
   this.firstname=firstname ;
   this.lastname= lastname  ;
   this.email=email ;
   this.dob= dob;
}
}