import { Component, OnInit } from '@angular/core';
import { PhotoService } from "src/app/service/photo.service"
import { data } from "src/app/models/data"
import { photo } from "src/app/models/photos";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data!: data;
  photos: photo[] = [];
  key: string = 'cat';
  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.getPhotos(this.key);
  }
  async getPhotos(keyword: string) {
   await this.photoService.getPhotos(keyword).subscribe((res) => {
      this.data = res;
      this.photos = this.data.results;
     this.photos.forEach((photo) => {
       photo.links.download=photo.links.download+"?force=true";
     })
        }
    )
  }

}
