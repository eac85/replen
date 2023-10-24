import { Component } from '@angular/core';
//import { slideUpAnimation } from './slide-up.animation';
import { trigger, transition, style, animate } from '@angular/animations';
import { DataService } from '../data.service'; // Import the DataService


@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css'],
})
export class ModalContentComponent {
  colors: string[] = ['#F25F3A', '#DDF378', '#597BB4', '#D2BCD2'];
  styleCode: string;
  colorCode: string;
  xsSizeAmount: number;
  sSizeAmount: number;
  mSizeAmount: number;
  lSizeAmount: number;
  xlSizeAmount: number;
  showAlignedContent: boolean = true;
  dataService: DataService;
  count: number = -1;
  columns: any;

  constructor(dataService: DataService) {
      this.xsSizeAmount = 0; // or any other default value you want to assign
      this.sSizeAmount= 0; 
      this.mSizeAmount= 0; 
      this.lSizeAmount= 0; 
      this.xlSizeAmount= 0; 
      this.styleCode = '0';
      this.colorCode = '0';
      this.dataService = dataService;
      this.columns = this.chunkArray(this.dataService.getSubmittedData(), 2);
    }

    submitForm() {
    // Handle form submission logic here
     const newData = {
      styleCode: this.styleCode,
      colorCode: this.colorCode,
      xsSizeAmount: this.xsSizeAmount,
      sSizeAmount: this.sSizeAmount,
      mSizeAmount: this.mSizeAmount,
      lSizeAmount: this.lSizeAmount,
      xlSizeAmount: this.xlSizeAmount,
      color: this.getRandomColor(),
    };
    this.dataService.addSubmittedData(newData); 
    //this.showAlignedContent = true;
     this.columns = this.chunkArray(this.dataService.getSubmittedData(), 2);
    this.clearData();
  }

  closeCard(data: any) {
    const index = this.dataService.getSubmittedData().indexOf(data);
    if (index !== -1) {
      this.dataService.getSubmittedData().splice(index, 1);
    }
  }

  getRandomColor(): string {
    if(this.count >= this.colors.length){
      this.count = -1;
    }
    this.count = this.count + 1;
    return this.colors[this.count];
  }

  clearData() {
     this.xsSizeAmount = 0; // or any other default value you want to assign
      this.sSizeAmount= 0; 
      this.mSizeAmount= 0; 
      this.lSizeAmount= 0; 
      this.xlSizeAmount= 0; 
      this.styleCode = '0';
      this.colorCode = '0';
  }

  chunkArray(array: any[], size: number): any[] {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  }

}



