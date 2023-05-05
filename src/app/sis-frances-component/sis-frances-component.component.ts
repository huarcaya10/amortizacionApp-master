import { Component, OnInit } from '@angular/core';
import { Periodo } from '../interface';

@Component({
  selector: 'app-sis-frances-component',
  templateUrl: './sis-frances-component.component.html',
  styleUrls: ['./sis-frances-component.component.css']
})
export class SisFrancesComponentComponent implements OnInit {

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

  var pago : number = Number((p*((i*Math.pow(1+i,n))/(Math.pow(1+i,n)-1))))
  this.dato = this.datoEmpty()
  this.datos.push(this.dato)
  console.log("pagoo: "+pago)

  for(let x =1;x<=n;x++){
    var inuevo : number = Number((this.datos[x-1].saldo*i))
    var amorti : number = Number((pago-inuevo))
    var saldo : number = Number((this.datos[x-1].saldo-amorti))
    var datoo :Periodo = {
    periodo: x,
    mensualidad: Number(pago.toFixed(5)),
    interes: Number(inuevo.toFixed(5)),
    amortizacion: Number(amorti.toFixed(4)),
    saldo: Number(saldo.toFixed(4))
    }
    this.datos.push(datoo);
  }
  console.log(this.dato)
}
}
