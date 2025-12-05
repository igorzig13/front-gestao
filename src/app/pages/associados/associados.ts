import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Header} from '../../components/header/header';
import {MatIcon} from '@angular/material/icon';

interface Associado {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  cidade: string;
  status: "ativo" | "inativo";
  mensalidade: "em dia" | "pendente";
}

@Component({
  selector: 'app-associados',
  imports: [
    CommonModule,
    FormsModule,
    Header,
    MatIcon
  ],
  templateUrl: './associados.html',
  styleUrl: './associados.css',
})
export class Associados implements OnInit {
  searchTerm: string = "";
  statusFilter: "todos" | "ativo" | "inativo" = "todos";
  selectedAssociado: Associado | null = null;

  associadosList: Associado[] = [
    { id: 1, nome: "João Silva", email: "joao@email.com", telefone: "(11) 98765-4321", cidade: "São Paulo", status: "ativo", mensalidade: "em dia" },
    { id: 2, nome: "Maria Santos", email: "maria@email.com", telefone: "(21) 97654-3210", cidade: "Rio de Janeiro", status: "ativo", mensalidade: "em dia" },
    { id: 3, nome: "Carlos Oliveira", email: "carlos@email.com", telefone: "(31) 96543-2109", cidade: "Belo Horizonte", status: "ativo", mensalidade: "pendente" },
    { id: 4, nome: "Ana Costa", email: "ana@email.com", telefone: "(41) 95432-1098", cidade: "Curitiba", status: "inativo", mensalidade: "pendente" },
    { id: 5, nome: "Pedro Souza", email: "pedro@email.com", telefone: "(51) 94321-0987", cidade: "Porto Alegre", status: "ativo", mensalidade: "em dia" },
    { id: 6, nome: "Fernanda Lima", email: "fernanda@email.com", telefone: "(61) 93210-9876", cidade: "Brasília", status: "ativo", mensalidade: "em dia" },
  ];

  get filteredAssociados(): Associado[] {
    return this.associadosList.filter((associado) => {
      const matchesSearch = associado.nome.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        associado.cidade.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesStatus = this.statusFilter === "todos" || associado.status === this.statusFilter;
      return matchesSearch && matchesStatus;
    });
  }

  ngOnInit(): void {}

  selectAssociado(associado: Associado): void {
    this.selectedAssociado = associado;
  }

  deselectAssociado(): void {
    this.selectedAssociado = null;
  }

  handleDescadastrar(id: number, nome: string): void {
    if (confirm(`Tem certeza que deseja descadastrar ${nome}?`)) {
      this.associadosList = this.associadosList.filter(a => a.id !== id);
      if (this.selectedAssociado && this.selectedAssociado.id === id) {
        this.selectedAssociado = null;
      }
      alert(`${nome} foi descadastrado com sucesso!`);
    }
  }
}
