export class Draw{
    public id:number;
    public firstTeam:string[];
    public secondTeam:string[];
    public date:string;
    

    constructor(id:number,firstTeam:string[],secondTeam:string[]){
        this.id = id;
        this.firstTeam = firstTeam;
        this.secondTeam = secondTeam;
        this.date = new Date().toLocaleDateString().concat(" - " + new Date().toLocaleTimeString()); //toLocaleDateString();
    }

}