import { Component } from '@angular/core';
@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.html'
})
export class CalculatorComponent{
    operators:Array<String>
    Answer:string;
    numbers:Array<string>
    constructor(){
        this.operators=['+','-','*','/','='];
        this.Answer="0";
        this.opcount=0;
        this.numbers=['1','2','3','4','5','6','7','8','9','0','+','-','*','/','=','c']
    }
    
   change(event){
    this.Answer+= event.target.value;
    if(event.target.value==="c")
        this.Answer=""
    
    let c=0;
   for(let i=0;i<this.Answer.length;i++){
     if(this.operators.includes(this.Answer[i])){
         if(i==0)
            continue;
         if(++c==2){
           this.process();
         }
     }
       
   }
  }

  opcount:number;
  process():void{
    let op=""
    let value1=""
    let value2=""
     for(let i=0;i<this.Answer.length;i++){
         if(this.operators.includes(this.Answer[i]))
         {       
           if(this.opcount===1)
            {
             value1=this.calculate(Number(value1),Number(value2),op);
             op=this.Answer[i];
             if(op=='='){
                op=""
             }
             if(value1!=""){
                this.Answer=value1+op;
                this.opcount=0;
             }
             break;
            }
            else if(this.opcount==0){
             if(i==0)
                {
                    value1=this.Answer[i];
                }
                else{
                    op=this.Answer[i];
                    this.opcount+=1;
                }
         
            }
         }
         else{
           if(this.opcount==0){
               value1+=this.Answer[i];
           }
           else{
             value2+=this.Answer[i];
           }
         }
     }
  }
  calculate(val1:number,val2:number,op:string):string{
    let output="";
    switch(op){
       case '+': output=(val1+val2).toString();
                
                 break;
       case '-': output=(val1-val2).toString();
           
                 break;
       case '*': output=(val1*val2).toString();
                 break;
       case '/': output=(val1/val2).toString();
                 break;
    }
    return output;
  }
}