import { Component } from '@angular/core';


// properties of component
// selector: the custom HTML Tag using which the component will be
// referred in HTML page (or HTML template of other compients)
// templateUrl: The URL of HTML file that defines UI of component
// templare: Inline HTML to component class
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
   message: string;
   name: string;
   characters: Array<string>;
   selectedCharacter: string;
   url:string;
   isVisible: boolean;
   operators:Array<String>
   Answer:string;
   
   constructor(){
     this.message = 'The First Angular Component';
     this.name = '';
     this.characters = new Array<string>();
     this.characters.push('James Bond');
     this.characters.push('Ethan Hunt');
     this.characters.push('Indiana Jones');
     this.characters.push('Jason Bourn');
     this.selectedCharacter = '';
     this.url = 'https://www.webnethelper.com';
     this.isVisible = true;
      this.operators=['+','-','*','/','='];
      this.Answer="0";
      this.value1="";
      this.value2="";
   }

   show(): void {
     if (this.isVisible) {
       this.isVisible = false;
     }else {
       this.isVisible = true;
     }
   }

   display(event): void {
     this.message = `The Event is Raised ${event.target.value}`;
   }
   change(){
     let c=0;
    for(let i=0;i<this.Answer.length;i++){
      if(this.operators.includes(this.Answer[i])){
          if(++c==2){
            this.process();
          }
      }
        
    }
   }
   value1:string;
   value2:string;
   process():void{
     console.log("hai process");
     
     let opcount=0;
     
     
     let op=""
      for(let i=0;i<this.Answer.length;i++){
        console.log("hey in for");
        
          if(this.operators.includes(this.Answer[i]))
          {
            console.log("inside first if");
            
            if(opcount===1)
             {
              console.log(this.Answer,this.value1,this.value2);
              this.value1=this.calculate(Number(this.value1),Number(this.value2),op);
              this.value2=""
              op=this.Answer[i];
              this.Answer=this.value1+op
              break;
             }
             else if(opcount===0){
              op=this.Answer[i];
              opcount++;
             }
          }
          else{
            if(opcount===0){
                this.value1+=this.Answer[i];
            }
            else{
              this.value2+=this.Answer[i];
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
