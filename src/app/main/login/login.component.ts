import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private messageService: MessageService,
  ) {
    this.form = this.setForm();
  }

  private setForm(): FormGroup {
    return new FormGroup({
      user: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)])
    })
  }

  ngOnInit(): void {
    this.form.get('user')?.setValue('Taui Silva Lima');
    this.form.get('password')?.setValue('Senha123*');
  }

  login() {
    if (this.form.valid) {
      const forms = this.form.value;

      if (forms.user !== 'Taui Silva Lima') {
        this.message('error', 'Dados Incorretos', 'Usuário inválido');
      }
      else if (forms.password !== 'Senha123*') {
        this.message('error', 'Dados Incorretos', 'Senha inválida');
      } else {
        this.message('success', 'Bem-Vindo', 'Login realizado com sucesso');
        this.router.navigate(['/admin']);
      }
    }
    else {
      this.message('error', 'Dados Incorretos', 'Verifique os dados novamente')
    }
  }

  private message(severity: string, summary: string, detail: string) {
    this.messageService.add({ icon: 'pi', severity: severity, summary: summary, detail: detail, closable: false });
  }
}
