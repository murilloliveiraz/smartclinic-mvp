import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  standalone: false,
  templateUrl: './item-details.html',
  styleUrl: './item-details.css'
})
export class ItemDetails implements OnInit {
  capturedImage: string | null = null;
  detectedProduct: string | null = null;
  productImage: string | null = null;
  type: 'entrada' | 'saida' = 'entrada';
  quantity: number = 1;

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.capturedImage = localStorage.getItem('capturedImage');
    this.detectedProduct = localStorage.getItem('detectedProduct');
    this.productImage = localStorage.getItem('productImage');
  }

  confirm() {
    localStorage.setItem('type', this.type);
    localStorage.setItem('quantity', this.quantity.toString());
    this.snackBar.open('Registro confirmado!', 'OK', { duration: 2000 });
    this.router.navigate(['/confirmation']);
  }
}