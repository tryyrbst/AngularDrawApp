import { Component, OnInit } from '@angular/core';
import { Draw } from '../draw.model';
import { DrawService } from './draw.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-saved-draws',
  templateUrl: './saved-draws.component.html',
  styleUrls: ['./saved-draws.component.css']
})
export class SavedDrawsComponent implements OnInit {

  drawList:any = [];

  constructor(private dService:DrawService,private _snackBar: MatSnackBar,private router:Router,private pService:PlayerService) { }

  ngOnInit(): void {
    this.drawList = JSON.parse(this.dService.getDraws() || "NULL");
  }

  onDeleteDrawClick(index:number){
      console.log(index);
      this.dService.deleteDrawByIndex(index);
      this.drawList = JSON.parse(this.dService.getDraws() || "NULL");

      this._snackBar.open('Kayıt silindi.','Tamam',{duration:3000});
  }

  onReloadClick(playerList:[]){
    
    this.pService.resetAll();
    playerList.forEach(element => {
      this.pService.addPlayer(element);
    });
    this.router.navigate(['']);
    
    
  }

}
