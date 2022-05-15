import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTable, MatTableModule } from '@angular/material/table';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatIconModule,
		MatTableModule
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
		MatTableModule
    ]
})
export class NgMaterialModule { }