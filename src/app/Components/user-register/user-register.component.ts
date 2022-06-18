import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {

  usrFormGroup: FormGroup;
  constructor(private fb: FormBuilder) { 
    // this.usrFormGroup=new FormGroup({
    //   fullName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    //   email: new FormControl(''),
    //   mobileNo: new FormControl(''),
    //   address: new FormGroup({
    //     city:new FormControl(''),
    //     street:new FormControl('')
    //   }),
    // });
    this.usrFormGroup=this.fb.group({
      fullName:['',[Validators.required, Validators.minLength(3)]],
      email:[''],
      mobileNo:fb.array([fb.control('')]),
      address:this.fb.group({
        city:[''],
        street:[''],

      }),
      referral:[''],
      referralOther:[''],
      password:[''],
      rePassword:['']
    })
  }

// convert fullName to property
  get fullName(){
    return this.usrFormGroup.get('fullName');
  }
  get mobileNo(){
    return this.usrFormGroup.get('mobileNo') as FormArray;
  }

  get referral(){
    return this.usrFormGroup.get('referral');
  }

updateReferralValidition(){
  if(this.referral?.value=='other')
  {
    this.usrFormGroup.get('referralOther')?.addValidators([Validators.required]);
  }
  else{
    this.usrFormGroup.clearValidators();
  }
  this.usrFormGroup.get('referralOther')?.updateValueAndValidity();

}


  addMobile(){
    this.mobileNo.push(this.fb.control(''));
  }
  ngOnInit(): void {
    // setValue //patchValue
    // this.usrFormGroup.setValue({
    //   fullName:"Test",
    //   email:"test@gmail.com"
    // })

    // this.usrFormGroup.patchValue({
    //   fullName:"Test",
    //   email:"test@gmail.com",
    //   address:{city:"city1",street:"Street1"}
    // })
  }

}
