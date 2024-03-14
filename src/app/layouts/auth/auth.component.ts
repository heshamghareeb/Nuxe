import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
// import { FooterComponent } from 'src/app/components/footer/footer.component';

@Component({
    selector: 'app-auth',
    standalone: true,
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css'],
    imports: [CommonModule, RouterModule, NavbarComponent]
})
export class AuthComponent {}
