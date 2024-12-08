import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.css']
})
export class ForbiddenComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    // Redirection automatique après 3 secondes
    setTimeout(() => {
      this.router.navigate(['/']);  // Redirige vers la page d'accueil
    }, 2000);  // 2000 ms = 2 secondes
  }

}
