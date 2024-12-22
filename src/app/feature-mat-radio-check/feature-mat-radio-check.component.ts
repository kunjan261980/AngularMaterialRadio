import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSelectService } from '../feature-mat-select/mat-select.service';

@Component({
  selector: 'app-feature-mat-radio-check',
  templateUrl: './feature-mat-radio-check.component.html',
  styleUrls: ['./feature-mat-radio-check.component.css']
})
export class FeatureMatRadioCheckComponent implements OnInit {
  selectedValue: string = 'red';
  fruits: string = 'mango'
  checkBoxes: any[] =[]
  selectedCheckBox: any[] = []
  checkBoxDatas: any[]= []

  form!: FormGroup;

  checkbox1: boolean = false
  checkbox2: boolean = false
  checkbox3: boolean = false

  constructor(private fb: FormBuilder, private data: MatSelectService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      gender: new FormControl('male'), // Initialize FormControl for radio buttons
      vehicles: new FormControl('plane')
    });
    this.data.getClaimTypeCheckboxList().subscribe((data) => {
      console.log(data)
     this.checkBoxes = data
    },(err)=>{})
    this.data.getFakeData().subscribe((__data: any) => {
      this.checkBoxDatas = __data
      for(let x=0 ;x< this.checkBoxDatas.length; x++)
        {
          if(this.checkBoxDatas[x].id <= 5)
          {
           if(this.checkBoxes[x].bindModel !== null)
           {
            this.checkBoxes[x].selected = true
           }
          }
        }
    },(err)=>{})
    

    
  
  }
  onValueChange(event: any)
  {
    console.log('Selected Value Changed:', event);
  }
  onChange(event: any)
  {
    console.log("selected Gender",event.value)
  }
  onChangeHTMLElement(event: any)
  {
    console.log("selected Vehicles",event.target.value)
  }
  reset()
  {
    this.selectedValue = 'green';
    this.fruits = 'mango'
  }
  changeValue(){
    this.selectedValue = 'yellow';
    this.fruits = 'pear'
  }
  resetReactive(){
    this.form.controls['gender'].patchValue('male')
    this.form.controls['vehicles'].patchValue('car')
   
  }
  changeReactiveValue(){
    this.form.controls['gender'].patchValue('other')
    this.form.controls['vehicles'].patchValue('train')
  }
  onCheckChange(updatedValue: boolean, checkboxName: string)
  {
    if (checkboxName === '01' && updatedValue) {
      console.log('Checkbox 1 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }
    if (checkboxName === "02" && updatedValue) {
      console.log('Checkbox 2 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }
    if (checkboxName === "03" && updatedValue) {
      console.log('Checkbox 3 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }
    if (checkboxName === "04" && updatedValue) {
      console.log('Checkbox 4 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }
    if (checkboxName === "05" && updatedValue) {
      console.log('Checkbox 5 is checked!');
      this.selectedCheckBox.push(checkboxName)
    }
    console.log(this.selectedCheckBox.toString())
  }
  resetCheckBox()
  {
    this.selectedCheckBox =[]
    this.checkBoxes.forEach((x: any)=>{
      return {...x, selected: x.selected = false}
    })
    console.log("reset",this.checkBoxes )
  }
  
  
}
