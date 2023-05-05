import { Component, OnInit } from '@angular/core';
import { Periodo } from '../interface';

@Component({
  selector: 'app-sis-flat-component',
  templateUrl: './sis-flat-component.component.html',
  styleUrls: ['./sis-flat-component.component.css']
})
export class SisFlatComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public datos : Periodo [] = [];
  public dato : Periodo = this.datoEmpty();
  cantidad: any;
  interes: any;
  periodo: any ;

  datoEmpty(): Periodo {
    return{
      periodo: 0,
      mensualidad: 0,
      interes: 0,
      amortizacion: 0,
      saldo: this.cantidad
    };
  }
  limpiar() : void {
    this.datos.splice(0,this.datos.length);
    this.cantidad=0
    this.interes=0
    this.periodo=0
  }

  onDatos(): void{
    const p: number = this.cantidad
    const n: number = this.periodo
    const i: number = this.interes/100

    var interesConstante : number = p*i
    var amortizacionConstante :number = p/n
    this.dato = this.datoEmpty()
    this.datos.push(this.dato)
    for(let x =1;x<=n;x++){
          var saldo : number = this.datos[x-1].saldo-amortizacionConstante
          var datoo :Periodo = {
          periodo: x,
          mensualidad: amortizacionConstante+interesConstante,
          interes:interesConstante ,
          amortizacion: amortizacionConstante,
          saldo: saldo
        }

      this.datos.push(datoo);
    }
    console.log(this.dato)
  }
}
