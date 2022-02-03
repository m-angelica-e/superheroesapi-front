import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SuperAndVillainsService } from '../../services/super-and-villains.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 
  status!: number;
  form!: FormGroup;
  list = ['Si', 'No'];
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<EditComponent>,
    public superAndVillainsService:SuperAndVillainsService,
    ) {
     }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      hide: ['', Validators.compose([Validators.required])],
      disabled: ['', Validators.compose([Validators.required])],
      type: ['', Validators.compose([Validators.required])]
    });
    this.getById(this.data.id);
  }

  async getById(id:any){
    try{
      if(id != null ){
        this.superAndVillainsService.getById({id})
        .subscribe(data => {
          this.form?.get('name')?.setValue(data.name);
          this.form?.get('hide')?.setValue(data.hide);
          this.form?.get('disabled')?.setValue(data.disabled);
          this.form?.get('type')?.setValue(data.type);
        },
        err=>{
          console.log(err.error.message);
        })
      }
    }catch(e){
      console.log(e);
      
    }
  }
 

  async actionButton(){
    this.form.markAllAsTouched();
    if(this.form.valid){
      try{
        if(this.data.id != null){
          if(this.form.valid){
            let information= this.form.getRawValue()
           
            await this.superAndVillainsService.Update({id:this.data.id, information }).subscribe(data => {
              this.dialogRef.close();
              console.log('El superhéroe se actualizó correctamente');
            },
            err=>{
              console.log(err.error.message);
            })
          }
        }
      }catch(e){
        console.log('El superhéroe no se pudo actualizar');
        
      }
    }else{
      console.log('Porfavor valide los campos en rojo');
      
    }
  }

  closeDialog(){
    this.dialogRef.close(this.data.id);
  }

  getError(field: string) {
    if (this.form?.get(field)?.hasError('required')) {
      return 'El campo es requerido';
    }
    if (this.form?.get(field)?.hasError('minlength')) {
      return 'El campo tiene menos caracteres de los requeridos';
    }
    if (this.form?.get(field)?.hasError('maxlength')) {
      return 'El campo supera el número máximo de caracteres permitido';
    }
    if (this.form?.get(field)?.hasError('pattern')) {
      return 'Los caracteres ingresados no son válidos para este campo';
    }
    if (this.form?.get(field)?.hasError('min')) {
      return 'El valor ingresado es menor al requerido';
    }
    if (this.form?.get(field)?.hasError('max')) {
      return 'El valor ingresado es superior al permitido';
    }
  }

}
