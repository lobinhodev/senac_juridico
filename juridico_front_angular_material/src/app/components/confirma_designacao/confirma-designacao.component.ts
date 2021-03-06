import { Component, OnInit } from '@angular/core';
import { MatDialog, matDialogAnimations } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirma-designacao',
  templateUrl: './confirma-designacao.component.html',
  styleUrls: ['./confirma-designacao.component.css'],
  providers: [],
})
export class ConfirmaDesignacaoComponent implements OnInit {
  constructor(private router: Router, public dialog: MatDialog) {}

  ngOnInit(): void {}

  public designaTecnico() {
    console.log('Designa tecnico');
  }

  public formDesignaTecnico() {
    console.log('Formulario de designação de tecnico');
  }

  public cancel() {
    console.log('Cancelar');
    this.router.navigate(['/designacao-tecnico']);

    this.dialog.closeAll();
  }
}
