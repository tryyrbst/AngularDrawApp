import { Injectable, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class PlayerService{

    private players:string[] = [];
    private firstTeam:string[] = [];
    private secondTeam:string[] = [];

    constructor(){
        
    }

    addPlayer(player:string){
        this.players.push(player);
    }

    addToFirst(player:string){
        this.firstTeam.push(player);
        
    }

    addToSecond(player:string){
        this.secondTeam.push(player);
    }

    getPlayers(){
        return this.players;
    }

    getFirstTeam(){
        return this.firstTeam;
    }

    getSecondTeam(){
        return this.secondTeam;
    }

    draw(player:string){
        var firstLength = this.firstTeam.length;
        var secondLength = this.secondTeam.length;
    
        const index = this.players.indexOf(player);
        if (index > -1) {
          this.players.splice(index, 1); // 2nd parameter means remove one item only
        }
    
        if(firstLength > secondLength){
          this.secondTeam.push(player);
        }
        else if(firstLength < secondLength){
          this.firstTeam.push(player);
        }
        else{
          if(Math.random()%2 == 0) this.secondTeam.push(player);
          else this.firstTeam.push(player);
        }
    }


    resetAll(){
        this.players = [];
        this.firstTeam = [];
        this.secondTeam = [];
    }

    retry(){
        this.players = this.players.concat(this.firstTeam.concat(this.secondTeam));
        this.firstTeam = [];
        this.secondTeam = [];
    }

    removePlayer(playerId:number){
        var newArray:string[]=[];
        for(var i = 0 ; i < this.players.length ; i ++ ){
            if(playerId != i){
                newArray.push(this.players[i]);
            }
        }

        this.players = newArray;
    }
}