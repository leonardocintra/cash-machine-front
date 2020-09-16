import { Transfer, Scheduling, Customer } from './../transfer.model';
import { Router } from '@angular/router';
import { TransferService } from './../transfer.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-transfer-create',
  templateUrl: './transfer-create.component.html',
  styleUrls: ['./transfer-create.component.css']
})
export class TransferCreateComponent implements OnInit {

  transferDate: string = '';
  customerName: string = '';
  customerCpf: string = '';

  transfer: Transfer = {
    accountOrigin: '',
    accountTarget: '',
    amount: null,
    scheduling: null,
    customer: null
  }

  constructor(private transferService: TransferService, private router: Router) { }

  ngOnInit(): void {
  }

  createTransfer(): void {
    
    moment.locale('pt-br');
    var myDay = this.transferDate
    let myDayToDate = moment(myDay, "DD-MM-YYYY").toDate();

    let scheduling: Scheduling = {
      transferDate: myDayToDate
    }

    let customer: Customer = {
      cpf: this.customerCpf,
      name: this.customerName
    }

    let novoTransfer: Transfer = {
      accountOrigin: this.transfer.accountOrigin,
      accountTarget: this.transfer.accountTarget,
      amount: this.transfer.amount,
      scheduling: scheduling,
      customer: customer
    }
    console.log(novoTransfer);

    this.transferService.create(novoTransfer).subscribe(() => {
      this.router.navigate(['/transfer']);
    })
  }

  cancel(): void {
    this.router.navigate(['/transfer']);
  }

}
