import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { City } from '../../city';
import { Cities } from '../../Services/cities/cities';

@Component({
  selector: 'app-singlerace',
  imports: [],
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

  
  //Initialisetion de la ville en fonction de l'id récupéré dans l'url
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.city = this.citiesService.cities[id];
  }
}