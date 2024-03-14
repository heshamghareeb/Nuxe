import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _AuthService:AuthService, private _Router:Router){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._AuthService.userData.subscribe({
      next:()=>{
        if (this._AuthService.userData.getValue() != null) {
          this._Router.navigate(['/home']);
        }
      }
    });
  }
  error:string = '';
  isLoading:boolean = false;
  loginForm:FormGroup = new FormGroup({
    email:new FormControl(null, [Validators.required, Validators.email]),
    password:new FormControl(null, [Validators.required, Validators.pattern(/^[A-z]/)]),
  });

  submitLoginForm(loginForm:any){
    this.isLoading = true;
    console.log(loginForm.value);
    console.log('loginForm.value');
    this._AuthService.signin(loginForm.value).subscribe({
      next:(response) => {
        this.isLoading = false;
        if (response.message === "success") {
          localStorage.setItem("_token", response.token)
          this._AuthService.saveUserData();

        }else{
          this.isLoading = false;
          this.error = response.message;
        }
      },
      error:(response) => {
        this.isLoading = false;
        let errorMessage = 'Something went wrong!';
    }});

  }
}
