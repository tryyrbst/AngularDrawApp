import { Injectable, OnInit } from "@angular/core";
import { last, Subject } from "rxjs";
import { Draw } from "../draw.model";
import { PlayerService } from "../player.service";

@Injectable()
export class DrawService{
    
    key :string = "Draws";
    drawList :any = [];

    mySubject = new Subject<any>();

    constructor(private pService:PlayerService){

    }

    
  storeDraw(draw:Draw) {
    this.drawList = this.getDraws();
    if(this.drawList == null) {
        console.log("list null");
        var drawListInit = [draw];
        localStorage.setItem(this.key,JSON.stringify(drawListInit));
    }
    else{
        console.log("list not null");
        var list = JSON.parse(this.drawList);
        list.push(draw);
        localStorage.setItem(this.key,JSON.stringify(list));
    }
  }

  getDraws(){
    return localStorage.getItem(this.key);
  }

  setDraws(draws:[]){
    localStorage.setItem(this.key,JSON.stringify(draws));
  }

  deleteDrawByIndex(index:number){
    
    var draws:[] = JSON.parse(this.getDraws() || "NULL");
    draws.splice(index,1);

    this.setDraws(draws);
    console.log(draws);
  }  

}

