import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SeemorePipe } from 'src/app/common/pipes/seemore.pipe';

@Component({
  selector: 'app-actors',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SeemorePipe
  ],
  templateUrl: './actors.component.html',
  styleUrl: './actors.component.css'
})
export class ActorsComponent {
  @Input() item:any;
}
