

import { PathLocationStrategy } from '@angular/common';
import {OnInit,Component, AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/services/api.service';
import Swal from 'sweetalert2';


export interface UserData {
  name: string;
  email: string;
  phone: number;
  createdAT: string;
  action:boolean;
}
/** Constants used to fill up our data base. */

const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];
const EMAILS: string[]=[
  'example@gmail.com','example2@gmail.com','example3@gmail.com',
  'example4@gmail.com',
  'example5@gmail.com',
  'example6@gmail.com',
  'example7@gmail.com',
  'example8@gmail.com'
]
const createdAT: string[]=[
  '1:00pm','5:64pm','2:21am',
  '1:00pm','5:64pm','2:21am',
  '1:00pm','5:64pm','2:21am',
  '1:00pm','5:64pm','2:21am',
  '1:00pm','5:64pm','2:21am',
  '1:00pm','5:64pm','2:21am',
]

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})

export class CompanyListComponent implements OnInit,AfterViewInit   {
  displayedColumns: string[] = ['name', 'email', 'phone', 'createdAT','action'];
  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  constructor() {
        // Create 100 users
        const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    
  }
  ngOnInit(): void {


  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
delete()
{
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to recover this imaginary file!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.value) {
      Swal.fire(
        'Deleted!',
        'Your imaginary file has been deleted.',
        'success'
      )
 
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your imaginary file is safe :)',
        'error'
      )
    }
  })
}
  
}

/** Builds and returns a new User. */
function createNewUser(phone: number): UserData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
const email= EMAILS[Math.round(Math.random() * (EMAILS.length - 1))] + ' ' +
EMAILS[Math.round(Math.random() * (EMAILS.length - 1))].charAt(0) + '.';

const createdat= createdAT[Math.round(Math.random() * (createdAT.length - 1))] + ' ' +
createdAT[Math.round(Math.random() * (createdAT.length - 1))].charAt(0) + '.';

  return {
  
    name: name,
    email:email,
    phone:phone,
    createdAT:createdat,
   action:true
  };

  
      
     
     

   





}
