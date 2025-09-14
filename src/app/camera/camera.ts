import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-camera',
  standalone: false,
  templateUrl: './camera.html',
  styleUrl: './camera.css'
})
export class Camera implements OnInit {
  @ViewChild('video') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvasElement!: ElementRef<HTMLCanvasElement>;

  capturedImage: string | null = null;
  isCapturing = false;

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.requestCameraAccess();
  }

  async requestCameraAccess() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      this.videoElement.nativeElement.srcObject = stream;
    } catch (err) {
      console.error('Erro ao acessar câmera:', err);
      this.snackBar.open('Permita acesso à câmera para continuar.', 'OK', { duration: 3000 });
    }
  }

  capturePhoto() {
    this.isCapturing = true;
    const video = this.videoElement.nativeElement;
    const canvas = this.canvasElement.nativeElement;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d')?.drawImage(video, 0, 0, canvas.width, canvas.height);
    this.capturedImage = canvas.toDataURL('image/png');

    const detectedProduct = 'Máscara';
    const productImage = '/assets/images/mascara.png';

    localStorage.setItem('capturedImage', this.capturedImage);
    localStorage.setItem('detectedProduct', detectedProduct);
    localStorage.setItem('productImage', productImage);

    setTimeout(() => {
      this.isCapturing = false;
      this.snackBar.open('Produto detectado: Máscara!', 'OK', { duration: 2000 });
      this.router.navigate(['/details']);
    }, 1000);
  }
}