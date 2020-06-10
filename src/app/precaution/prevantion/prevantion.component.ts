import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prevantion',
  templateUrl: './prevantion.component.html',
  styleUrls: ['./prevantion.component.css']
})
export class PrevantionComponent implements OnInit {
makeTitleCase = "suyog bankar";
  constructor() { }

  ngOnInit(): void {
// debugger
//     let textarr = this.makeTitleCase.split(' ');
//     let capitalText = "";
//     for(let i=0; i<textarr.length; i++){
//       capitalText += textarr[i].charAt(0).toUpperCase() +  textarr[i].slice(1) + ' ';
//     }
//     console.log(capitalText.trim());
    
  }

}
