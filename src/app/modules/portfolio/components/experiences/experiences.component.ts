import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Associate - Software Developer",
        p: " Expeditors International ltda | Jan 2024 - Present"
      },
      text: "Desde 2023 trabalhando como Software Developer, utilizando Python e SQL Server atualmente trocando stack para Java, Springboot e Angular & Typescript",
    },

    {
      summary: {
        strong: "Analyst Finance",
        p: " Expeditors International ltda | Out 2017 - 2023"
      },
      text: "Atuei como Analista Regional no setor financeiro, onde gerenciava pagamentos, fechamentos mensais, impostos e oferecia suporte operacional. Durante meu tempo nesta função, desenvolvi habilidades robustas em controle financeiro e análise de dados. Minha paixão pelo desenvolvimento de processos e soluções me levou a explorar a área de desenvolvimento, onde encontrei uma nova vocação. Aproveitei a oportunidade para transitar para essa área, e desde então tenho me dedicado ao desenvolvimento de soluções inovadoras, alinhando minhas habilidades analíticas e minha paixão por tecnologia.",
    },
  ])
}
