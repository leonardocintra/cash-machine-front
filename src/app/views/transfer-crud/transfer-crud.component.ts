import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transfer-crud',
  templateUrl: './transfer-crud.component.html',
  styleUrls: ['./transfer-crud.component.css']
})
export class TransferCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToTransferCreate(): void {
    this.router.navigate(['/transfer/create']);
  }

}
