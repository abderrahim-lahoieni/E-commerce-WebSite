import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    // Redirection automatique après 3 secondes
    setTimeout(() => {
      this.router.navigate(['/']);  // Redirige vers la page d'accueil
    }, 3000);  // 3000 ms = 3 secondes
  }

}
