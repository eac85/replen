import { Component, Input, EventEmitter, Output  } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { DataService } from '../data.service'; // Import the DataService


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent {
  colors: string[] = ['#D0605B', '#D7894C', '#E9D37E', '#4A7A6F', '#6EBAAF', '#ABC8CB', '#6E5AD4', '#4B60D3', '#4E7FCB'];
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

  constructor( dataService: DataService) {
      this.xsSizeAmount = 0; // or any other default value you want to assign
      this.sSizeAmount= 0; 
      this.mSizeAmount= 0; 
      this.lSizeAmount= 0; 
      this.xlSizeAmount= 0; 
      this.styleCode = '0';
      this.colorCode = '0';
      this.dataService = dataService;
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
      color: this.getRandomColor()
    };

    this.dataService.addSubmittedData(newData); 
    this.showAlignedContent = true;
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

}
