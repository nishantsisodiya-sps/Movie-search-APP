import { Component, Input, OnInit } from '@angular/core';

import axios from 'axios';

interface IMovies {
  Title :string;
  Year : number;
  imdbID : (number | string);
  Type : string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  
export class HomeComponent implements OnInit {
  movies : IMovies[]  = [];
  value: any;
  display = false;
  constructor() { }

  ngOnInit(): void {

  }

  async submitval(val: any) {
    this.value = val
    await axios.get(`http://www.omdbapi.com/?s=${val}&apikey=17bc1154`)
      .then((response) => {
        this.movies =  response.data.Search
        this.display = true
      })
  }
}
