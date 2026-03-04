import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { City } from '../../city';
import { Cities } from '../../Services/cities/cities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  
  constructor(private cities: Cities, private router: Router) {}  

  onSubmit(form: NgForm) {
    const name = form.value['name'];
    const attribut = form.value['attribut'];
    const caracteristique = form.value['caracteristique'];
    this.cities.addCity(name, attribut, caracteristique);
    this.router.navigateByUrl('/races');
  }
}
