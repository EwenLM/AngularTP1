import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from '../../city';
import { Cities } from '../../Services/cities/cities';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-singlerace',
  imports: [RouterLink],
  templateUrl: './singlerace.html',
  styleUrl: './singlerace.css',
})
export class Singlerace implements OnInit {
  city!: City;

  //ActivatedRoute pour récupérer l'id de la ville dans l'url et Cities pour récupérer les données de la ville
  constructor(
    private route: ActivatedRoute,
    private citiesService: Cities
  ) {}

  
  //Initialisation de la ville en fonction de l'id récupéré dans l'url
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.city = this.citiesService.getCityById(id);
  }
}