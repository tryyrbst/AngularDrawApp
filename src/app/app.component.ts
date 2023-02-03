import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PlayerService } from './player.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  // firstTeam:string[] = [];
  // secondTeam:string[] = [];
  // playerList:string[] = [];

  constructor(private pService:PlayerService,private _snackBar: MatSnackBar){}


  ngOnInit(): void {
    //this.getLists();
  }


  // onAddPlayer(playerForm : NgForm){
  //   var player = playerForm.controls["playerName"].value;
  //   playerForm.resetForm();

  //   if(player.replace(/\s/g,"") != ""){
  //     this.pService.addPlayer(player);
  
  //     //this.playerList = this.pService.getPlayers();
  //   }
  //   else{
  //     this._snackBar.open('Geçerli bir isim girin.','Tamam',{duration:3000});
  //   }
    
  // }

  // onResetClicked(){
  //   this.pService.resetAll();
  //   this.getLists();
  // }

  // onAgainClicked(){
  //   this.pService.retry();
  //   this.getLists();
  // }

  // onDrawClicked(){
  //   var player = this.playerList[Math.floor(Math.random()*this.playerList.length)];
    
  //   if(player != null){
  //     this.pService.draw(player);
  //   }
  // }

  // removePlayer(playerId:number){
  //   console.log(playerId);
  //   console.log(this.playerList);
  //   this.pService.removePlayer(playerId);
  //   this.getLists();
  // }


  // getLists(){
  //   this.playerList = this.pService.getPlayers();
  //   this.firstTeam = this.pService.getFirstTeam();
  //   this.secondTeam = this.pService.getSecondTeam();
  // }
  

}
