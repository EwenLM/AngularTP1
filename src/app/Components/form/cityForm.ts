import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from '../../city';
import { Cities } from '../../Services/cities/cities';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cityForm.html',
  styleUrl: './cityForm.css',
})

export class Form implements OnInit {
  
  cityForm!: FormGroup;

  constructor(private cities: Cities, private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.cityForm = this.formBuilder.group({
      name: ['', Validators.required],
      attribut: ['', Validators.required],
      caracteristique: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const formValue = this.cityForm.value;
    this.cities.addCity(formValue.name, formValue.attribut, formValue.caracteristique);
    this.router.navigate(['/races']);
  }
}

