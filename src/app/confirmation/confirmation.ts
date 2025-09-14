import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-confirmation',
  standalone: false,
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.css',
  animations: [
    trigger('fadeInScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.8)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class Confirmation implements OnInit {
  detectedProduct: string | null = null;
  type: string | null = null;
  quantity: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.detectedProduct = localStorage.getItem('detectedProduct');
    this.type = localStorage.getItem('type');
    this.quantity = localStorage.getItem('quantity');

    setTimeout(() => {
      localStorage.clear();
      this.router.navigate(['/camera']);
    }, 3000);
  }
}