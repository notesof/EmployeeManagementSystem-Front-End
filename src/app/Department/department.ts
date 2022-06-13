export class Department {
    departId: number;
    departName:string;
    departHead:String;
    email:String;

    constructor(departId: number,
        departName:string,
        departHead:String,
        email:String){
            this.departId=departId;
            this.departName=departName;
            this.departHead=departHead;
            this.email=email;
        }
    
}