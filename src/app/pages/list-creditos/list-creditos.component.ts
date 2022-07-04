import { Component, OnInit } from '@angular/core';
import { Credito } from 'src/app/interfaces/credito';
import { CreditoService } from 'src/app/services/credito.service';

@Component({
  selector: 'app-list-creditos',
  templateUrl: './list-creditos.component.html',
  styleUrls: ['./list-creditos.component.css']
})
export class ListCreditosComponent implements OnInit {

	creditos: Credito[] = [];

  constructor(private creditoService: CreditoService) { }

  ngOnInit(): void {
		this.creditoService.getListCreditos().subscribe(resp => {
			this.creditos = resp;
			console.log(resp);
		});
  }

}
