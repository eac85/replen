import { Component, Input, EventEmitter, Output  } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { DataService } from '../data.service'; // Import the DataService
import { MatDialog } from '@angular/material/dialog';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { slideUpAnimation } from '../animations/slide-up.animation';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent {
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

  constructor( dataService: DataService, private dialog: MatDialog) {
      this.xsSizeAmount = 0; // or any other default value you want to assign
      this.sSizeAmount= 0; 
      this.mSizeAmount= 0; 
      this.lSizeAmount= 0; 
      this.xlSizeAmount= 0; 
      this.styleCode = '0';
      this.colorCode = '0';
      this.dataService = dataService;
    }

  closeCard(data: any) {
    const index = this.dataService.getSubmittedData().indexOf(data);
    if (index !== -1) {
      this.dataService.getSubmittedData().splice(index, 1);
    }
  }

   openModal() {
    this.dialog.open(ModalContentComponent, {
      panelClass: 'custom-dialog-container', // Add a custom class for styling if needed
      position: { bottom: '0' },
      autoFocus: false, // Prevents auto-focusing on the first form field
    });
  }

}
