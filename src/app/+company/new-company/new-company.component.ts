import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {
  constructor(private fb: FormBuilder) { }
  Company = this.fb.group({
    company_Name: ['', Validators.required],
    comppany_Address: [''],
    email:['',Validators.required],
    phone:['',Validators.required],
   Employee_Info  : this.fb.group({
    Employee_Name: ['',Validators.required],
 	Designation: [''],
      JoinDate: ['',Validators.required],
      email: ['',Validators.required]
    }),
    Skill_info : this.fb.group({
      skill_name: ['',Validators.required],
      skill_Rating: ['',Validators.required],

    }),
  });


  ngOnInit(): void {
  }

}
