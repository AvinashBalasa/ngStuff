import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
    template:`<h1 align=center style = "color:blue">Login Here!! </h1>
    <div class="container">
    <form [formGroup] = "loginForm" (ngSubmit)="submitData()"  >
    <div class="form-group" >
    <label>Enter email: </label><input type="text" class="form-control" formControlName="email"/>
    <div *ngIf="loginForm.controls['email'].hasError('required')">
    <span style = "color:red;background-color:lightyellow">Please enter valid email</span>
    </div> <br/> 
    </div>
    <label>Enter Password: </label> <input type="text" class="form-control" formControlName="pwd"/>
    <div *ngIf="loginForm.controls['pwd'].hasError('required')">
    <span style = "color:red;background-color:lightyellow">Please enter valid password</span>
    </div> <br/>

    <button type="submit" [disabled]="!loginForm.valid" class="btn btn-success" routerLink="/airlines/" >Submit</button>
    </form>
    <router-outlet></router-outlet>
    </div>
    `
})

export class LoginComponent{
    loginForm = new FormGroup({
        email: new FormControl('',[Validators.required]), //1st param is default  value and 2nd is validation

        pwd: new FormControl('',[Validators.required])     
        })    

    submitData(){
    console.log(this.loginForm.value)
    }

}