import { Component, OnInit } from '@angular/core';

import { FishService } from './../../fish.service';

@Component({
  selector: 'app-display-fish',
  templateUrl: './display-fish.component.html',
  styleUrls: ['./display-fish.component.scss']
})
export class DisplayFishComponent implements OnInit {
  fish: any;

  constructor(private fs: FishService) { }

  ngOnInit(): void {
    this.fs.getFish().subscribe((el: any) => {
      this.fish = el.data.fish;
    });
  }

}
