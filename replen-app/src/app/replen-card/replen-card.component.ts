import { Component } from '@angular/core';

@Component({
  selector: 'app-replen-card',
  templateUrl: './replen-card.component.html',
  styleUrls: ['./replen-card.component.css']
})
export class ReplenCardComponent {
  styleCode: string;
  colorCode: string;
  xsSizeAmount: number;
  sSizeAmount: number;
  mSizeAmount: number;
  lSizeAmount: number;
  xlSizeAmount: number;
   showAlignedContent: boolean = true;

  constructor() {
      this.xsSizeAmount = 0; // or any other default value you want to assign
      this.sSizeAmount= 0; 
      this.mSizeAmount= 0; 
      this.lSizeAmount= 0; 
      this.xlSizeAmount= 0; 
      this.styleCode = '0';
      this.colorCode = '0';
    }
}
