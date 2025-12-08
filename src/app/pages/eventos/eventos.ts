import { Component } from '@angular/core';
import {Header} from '../../components/header/header';
import {SimpleCard} from '../../components/simple-card/simple-card';
import {MatIcon} from '@angular/material/icon';
import {NgClass} from '@angular/common';

export interface evento {
  id: number;
  titulo: string;
  data: string;
  hora: string;
  local: string;
  participantes: number;
  tipo: string;
}

export interface statEvento {
  titulo: string;
  valor: number;
  icone: string;
  cor: string;
}

const eventos: evento[] = [
  {
    id: 1,
    titulo: "Assembleia Geral Ordinária",
    data: "15/12/2025",
    hora: "19:00",
    local: "Auditório Central",
    participantes: 145,
    tipo: "assembleia",
  },
  {
    id: 2,
    titulo: "Curso de Capacitação Profissional",
    data: "20/12/2025",
    hora: "14:00",
    local: "Sala de Treinamento",
    participantes: 32,
    tipo: "curso",
  },
  {
    id: 3,
    titulo: "Confraternização de Fim de Ano",
    data: "22/12/2025",
    hora: "20:00",
    local: "Clube Recreativo",
    participantes: 287,
    tipo: "social",
  },
];

const statEventos: statEvento[] = [
  {
    titulo: "Eventos Este Mês",
    valor: 3,
    cor: 'bg-blue-100 text-blue-600',
    icone: "calendar_today"
  },
  {
    titulo: "Total de participantes",
    valor: 464,
    cor: 'bg-green-100 text-green-600',
    icone: "people"
  },
]

@Component({
  selector: 'app-eventos',
  imports: [
    Header,
    SimpleCard,
    MatIcon,
    NgClass
  ],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css',
})
export class Eventos {

  protected readonly eventos = eventos;

  protected getTipoColor(tipo: string) {
    switch (tipo) {
      case "assembleia":
        return "bg-blue-100 text-blue-700";
      case "curso":
        return "bg-purple-100 text-purple-700";
      case "social":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  protected readonly statEventos = statEventos;

  protected handleNovoEvento() {
    alert("Em breve você será redirecionado ao formulário de criação de novo evento.");
  }
}
