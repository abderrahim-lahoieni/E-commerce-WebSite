import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  constructor(private router: Router) {}
  ngOnInit() {
    // Redirection automatique après 3 secondes
    setTimeout(() => {
      this.router.navigate(['/']);  // Redirige vers la page d'accueil
    }, 3000);  // 3000 ms = 3 secondes
  }
}
