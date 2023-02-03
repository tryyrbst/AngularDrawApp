import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Draw } from '../draw.model';
import { PlayerService } from '../player.service';
import { DrawService } from '../saved-draws/draw.service';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  firstTeam:string[] = [];
  secondTeam:string[] = [];
  playerList:string[] = [];

  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[5]);


  constructor(private pService:PlayerService,private dService:DrawService,private _snackBar: MatSnackBar){}


  ngOnInit(): void {
    this.getLists();
  }


  onAddPlayer(playerForm : NgForm){

    if(!playerForm.valid){
      return;
    }

    var player = playerForm.controls["playerName"].value;
    playerForm.resetForm();

    if(player.replace(/\s/g,"") != ""){
      this.pService.addPlayer(player);
      
      //this.playerList = this.pService.getPlayers();
    }
    else{
      this._snackBar.open('Enter a valid name.','OK',{duration:3000});
    }
    
  }

  onResetClicked(){
    this.pService.resetAll();
    this.getLists();
  }

  onAgainClicked(){
    this.pService.retry();
    this.getLists();
  }

  onDrawClicked(){
    var player = this.playerList[Math.floor(Math.random()*this.playerList.length)];
    
    if(player != null){
      this.pService.draw(player);
    }
  }

  removePlayer(playerId:number){
    console.log(playerId);
    console.log(this.playerList);
    this.pService.removePlayer(playerId);
    this.getLists();
  }


  getLists(){
    this.playerList = this.pService.getPlayers();
    this.firstTeam = this.pService.getFirstTeam();
    this.secondTeam = this.pService.getSecondTeam();
  }
  
  onFabClicked(){
 
    var draw = new Draw(0,this.firstTeam,this.secondTeam);
    
    this.dService.storeDraw(draw);
    console.log(JSON.parse(this.dService.getDraws() || "NULL"));
    this._snackBar.open('Draw has been saved.','OK',{duration:3000});
   
  }

}
