export class StatusReport {
    statusId:number;
    comments:String;
    details:String;
    createDate:String;
    userId:number;

    constructor(statusId:number,
        comments:String,
        details:String,
        createDate:String,
        userId:number){
            this.statusId=statusId;
            this.comments=comments;
            this.details=details;
            this.createDate=createDate;
            this.userId=userId;
        }

}