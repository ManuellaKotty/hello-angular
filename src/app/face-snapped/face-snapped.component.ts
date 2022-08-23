import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snapped',
  templateUrl: './face-snapped.component.html',
  styleUrls: ['./face-snapped.component.scss']
})
export class FaceSnappedComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;

  ngOnInit () {
    this.title = "Bib's";
    this.description = "Mon bébé d'amour";
    this.createdDate = new Date();
    this.snaps = 10;
  }
}
