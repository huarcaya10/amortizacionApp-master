import { Component, OnInit } from '@angular/core';
import { Periodo } from '../interface';

@Component({
  selector: 'app-sis-ingles-component',
  templateUrl: './sis-ingles-component.component.html',
  styleUrls: ['./sis-ingles-component.component.css']
})
export class SisInglesComponentComponent implements OnInit {

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
  this.dato = this.datoEmpty()
  this.datos.push(this.dato)
  for(let x =1;x<=n;x++){


    if(x!=n){
        var datoo :Periodo = {
        periodo: x,
        mensualidad: interesConstante,
        interes:interesConstante ,
        amortizacion: 0,
        saldo: p
      }
    }else{
      var datoo :Periodo = {
        periodo: x,
        mensualidad: interesConstante+p,
        interes:interesConstante ,
        amortizacion: p,
        saldo: 0
      }
    }
    this.datos.push(datoo);
  }
  console.log(this.dato)
}
}
