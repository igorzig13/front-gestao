import { Component } from '@angular/core';
import {Header} from "../../components/header/header";
import {NgClass} from '@angular/common';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-financeiro',
  imports: [
    Header,
    NgClass,
    MatIcon,
  ],
  templateUrl: './financeiro.html',
  styleUrl: './financeiro.css',
})
export class Financeiro {

  dados = [
    { mes: "Jan", entradas: 45000, saidas: 32000 },
    { mes: "Fev", entradas: 48000, saidas: 35000 },
    { mes: "Mar", entradas: 52000, saidas: 38000 },
    { mes: "Abr", entradas: 47000, saidas: 34000 },
    { mes: "Mai", entradas: 51000, saidas: 36000 },
    { mes: "Jun", entradas: 49000, saidas: 37000 },
    { mes: "Jul", entradas: 53000, saidas: 39000 },
    { mes: "Ago", entradas: 50000, saidas: 35000 },
    { mes: "Set", entradas: 54000, saidas: 38000 },
    { mes: "Out", entradas: 52000, saidas: 36000 },
    { mes: "Nov", entradas: 56000, saidas: 40000 },
    { mes: "Dez", entradas: 58000, saidas: 42000 },
  ];

  transacoes = [
    { id: 1, tipo: "entrada", descricao: "Mensalidades - João Silva", valor: 150.0, data: "25/11/2025", categoria: "Mensalidade" },
    { id: 2, tipo: "entrada", descricao: "Mensalidades - Maria Santos", valor: 150.0, data: "24/11/2025", categoria: "Mensalidade" },
    { id: 3, tipo: "saida", descricao: "Manutenção Elétrica", valor: 850.0, data: "23/11/2025", categoria: "Infraestrutura" },
    { id: 4, tipo: "entrada", descricao: "Taxa de Inscrição - Evento", valor: 300.0, data: "22/11/2025", categoria: "Eventos" },
    { id: 5, tipo: "saida", descricao: "Material de Escritório", valor: 420.0, data: "21/11/2025", categoria: "Administrativo" },
    { id: 6, tipo: "entrada", descricao: "Mensalidades - Carlos Oliveira", valor: 150.0, data: "20/11/2025", categoria: "Mensalidade" },
    { id: 7, tipo: "saida", descricao: "Água e Luz", valor: 1250.0, data: "19/11/2025", categoria: "Contas" },
    { id: 8, tipo: "entrada", descricao: "Mensalidades - Ana Costa", valor: 150.0, data: "18/11/2025", categoria: "Mensalidade" },
  ];

  get totalEntradas(): number {
    return this.dados.reduce((acc, item) => acc + item.entradas, 0);
  }

  get totalSaidas(): number {
    return this.dados.reduce((acc, item) => acc + item.saidas, 0);
  }

  get saldo(): number {
    return this.totalEntradas - this.totalSaidas;
  }

  exportarPDF(): void {
    alert("A exportação do relatório em PDF estará disponível em breve!");
  }

  protected redirectCadastroTransacao() {
    alert("Funcionalidade disponível em breve!");
  }
}
