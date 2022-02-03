import { Component, OnInit } from '@angular/core';
import { EditComponent } from '../edit/edit.component';
import { MatDialog } from '@angular/material/dialog';
import { SuperAndVillainsService } from '../../services/super-and-villains.service';
import { MatTableDataSource } from '@angular/material/table';


export interface superfields {
  name: string;
  type: string;
  Opciones:string;
}

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component implements OnInit {
  superAndVillains = [];
  dataSource!: MatTableDataSource<any>;
  tableIdentifier!: number;
  constructor(public dialog: MatDialog, public superAndVillainsService: SuperAndVillainsService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
  }

  async delete( id:any ){
    await this.superAndVillainsService.Delete({ id }).subscribe(data => {
      console.log('El superhéroe se eliminó correctamente');
      this.tableIdentifier = id;
      this.table(id);
    },
    err=>{
      console.log(err.error.message);
    })
  }

  columnsToDisplay: string[] = [
    "name",
    "type",
    "Opciones"
  ];

  table(data:any){
    if(data === 1){
      this.getAll();
    }else if(data === 2){
      this.getSuperHeroesVisibleDisabled();
    }else if(data === 3){
      this.getHiddenVillainsEnabled();
    }
  }
  getAll(){
    this.superAndVillainsService.getAll().subscribe(data => {
      for (let i = 0; i < data.length; i++) {
        if(data[i].disabled === true){
          const ELEMENT_DATA: superfields[] = data[i] ;
          this.dataSource.data = ELEMENT_DATA;
        }
      }
      
    },
    err=>{
      console.log(err.error.message);
    })
  }

  // Ordenados A-Z
  getSuperHeroesVisibleDisabled(){
    this.superAndVillainsService.getSuperHeroesVisibleDisabled().subscribe(data => {
      const ELEMENT_DATA: superfields[] = data;
      this.dataSource.data = ELEMENT_DATA;
    },
    err=>{
      console.log(err.error.message);
    })
  }
  
  // Ordenados Z-A
  getHiddenVillainsEnabled(){
    this.superAndVillainsService.getHiddenVillainsEnabled().subscribe(data => {
      const ELEMENT_DATA: superfields[] = data;
      this.dataSource.data = ELEMENT_DATA;
    },
    err=>{
      console.log(err.error.message);
    })
  }

  

  openDialogEdit(id:any){
    const dialogRef = this.dialog.open(EditComponent, {
      width: '650px',
      height: '450px',
      data: { action: 'addDocument', id:id }
    });
    dialogRef.afterClosed().subscribe((id) => {
      this.table(this.tableIdentifier)
    });
  }

}
