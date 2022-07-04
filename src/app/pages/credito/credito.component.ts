import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreditoService } from 'src/app/services/credito.service';
import { Credito } from 'src/app/interfaces/credito';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-credito',
  templateUrl: './credito.component.html',
  styleUrls: ['./credito.component.css']
})
export class CreditoComponent implements OnInit {
	
	Dias: number = 0;
	Data: any;
	FechaActual: Date = new Date(Date.now());
	

  constructor(private creditoService: CreditoService) { }

  creditoForm = new FormGroup({
    monto: new FormControl('', Validators.required,),
    dias: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

	diasDePlazo(dias:number){
		this.creditoForm.patchValue({
			dias: dias
		})
		
	}

	onSubmit() {

		this.FechaActual.setDate(this.FechaActual.getDate() + this.creditoForm.value.dias);


		this.Data = {
			id: null,
			monto: this.creditoForm.value.monto,
			plazo:  this.FechaActual.toLocaleDateString(),
		};

		this.creditoService.guardarSolicitud(this.Data)
			.subscribe((resp: any) => {	
				Swal.fire('Mensaje', resp.text, 'warning');	
			});
		
	}
	

}
function subscribe(arg0: (resp: any) => void) {
	throw new Error('Function not implemented.');
}

