import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { FishService } from './../../fish.service';

@Component({
  selector: 'app-add-fish',
  templateUrl: './add-fish.component.html',
  styleUrls: ['./add-fish.component.scss']
})
export class AddFishComponent implements OnInit {
  fishForm: FormGroup;

  constructor(private fb: FormBuilder, private fs: FishService) { }

  ngOnInit(): void {
    this.fishForm = this.fb.group({
      catchee: '',
      species: '',
      weight: '',
      length: '',
      photo: '',
      dateCaught: ''
    });
  }

  onAdd() {
    const fish = {...this.fishForm.value };

    this.fs.createFish(fish)
      .subscribe(v => console.log(v));
  }

}
