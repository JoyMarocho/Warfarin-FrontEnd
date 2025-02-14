import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-lab-form',
  templateUrl: './lab-form.component.html',
  styleUrls: ['./lab-form.component.css']
})
export class LabFormComponent implements OnInit {
  userForm : FormGroup;
  listData : any;

  constructor(private fb:FormBuilder) { 
    this.listData = [];

    this.userForm = this.fb.group({
      inr_range: ['', Validators.required],

    })

  }
  public addItem() : void{
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }

  reset() {
   this.userForm.reset();
  }

  removeItem(element){
    this.listData.forEach((value,index)=>{
     if(value == element)
      this.listData.splice(index, 1);

    })

    
    


  }


  ngOnInit(): void {
  }

}










  