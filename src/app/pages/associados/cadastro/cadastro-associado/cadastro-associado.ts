import {ChangeDetectorRef, Component} from '@angular/core';
import {Header} from '../../../../components/header/header';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {Associado} from '../../associados';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-cadastro-associado',
  imports: [
    Header,
    FormsModule,
    MatIcon
  ],
  templateUrl: './cadastro-associado.html',
  styles: ``,
})
export class CadastroAssociado {

  errorMessage = '';
  submitting: boolean = false;
  private errorTimeout: any;

  associado: Associado = {
    id: 0,
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    status: 'ativo',
    mensalidade: 'em dia'
  };

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  async salvarAssociado(): Promise<void> {
    if (!this.validarFormularioCompleto()) {
      return;
    }

    this.submitting = true;

    try {
      // Simula uma chamada API
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Associado salvo:', this.associado);

      // await this.associadoService.salvar(this.associado);

      this.router.navigate(['/associados']).finally();
      alert("Associado salvo: " + this.associado.nome);
      this.limparFormulario();

    } catch (error) {
      console.error('Erro ao salvar associado:', error);
      this.mostrarErro('Erro ao salvar associado. Tente novamente.');
    } finally {
      this.submitting = false;
      this.cdr.detectChanges();
    }
  }

  mostrarErro(mensagem: string): void {
    this.errorMessage = mensagem;

    if (this.errorTimeout) {
      clearTimeout(this.errorTimeout);
    }

    this.errorTimeout = setTimeout(() => {
      this.closeError();
    }, 5000);
  }

  closeError(): void {
    this.errorMessage = '';
    if (this.errorTimeout) {
      clearTimeout(this.errorTimeout);
      this.errorTimeout = null;
    }
  }

  private validarFormularioCompleto(): boolean {
    const camposObrigatorios = ['nome', 'email', 'telefone', 'cidade', 'status', 'mensalidade'];

    for (const campo of camposObrigatorios) {
      const valor = this.associado[campo as keyof Associado];

      if (!valor || (typeof valor === 'string' && valor.trim() === '')) {
        this.mostrarErro(`O campo ${campo} é obrigatório`);
        return false;
      }
    }

    // Validação específica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.associado.email)) {
      this.mostrarErro('Digite um e-mail válido');
      return false;
    }

    return true;
  }

  handleVoltar(){
    this.router.navigate(['/associados']).finally();
  }

  private limparFormulario(): void {
    this.associado = {
      id: 0,
      nome: '',
      email: '',
      telefone: '',
      cidade: '',
      status: 'ativo',
      mensalidade: 'em dia'
    };
  }
}
