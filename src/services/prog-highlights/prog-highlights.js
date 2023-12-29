import noPhoto from './noPhoto.jpg';
//import presentations from "./presentations.jpg";

//import pUTFPR from "./utfpr.jpg";
import pTalk from './icons/talk.jpg';
import pTalkTable from './icons/talkTable.jpg';

import pVisit from './icons/pVisit.jpg';

import pPodcast from './pPodcast.jpg';

//NEW

import imgPresentation from './icons/imgPresentation.jpg';

import imgBona from './imgs/imgBona.jpg';
import imgMinicursoLatex from './imgs/imgMinicursoLatex.jpg';
import imgVisitaIPEC from './imgs/imgVisitaIPEC.jpg';
import imgSBB from './imgs/imgSBB.jpg';
import imgValeGenoma from './imgs/imgValeGenoma.jpg';
import imgBosch1 from './imgs/imgBosch1.jpg';

const progHighlights = [
  {
    day: '08/11',
    weekDay: 'Segunda-Feira',
    prog: [
      {
        from: '9h',
        to: '12h',
        activities: [
          {
            author: 'Sessões de Apresentação',
            title: 'Consulte a nossa agenda de apresentações',
            abstract: null,
            photo: imgPresentation,
            link: 'https://seisicite2021.gp.utfpr.edu.br/schedule',
            isPresentation: true,
          },
        ],
      },
      {
        from: '13h30',
        to: '17h30',
        activities: [
          {
            author: 'Sessões de Apresentação',
            title: 'Consulte a nossa agenda de apresentações',
            abstract: null,
            photo: imgPresentation,
            link: 'https://seisicite2021.gp.utfpr.edu.br/schedule',
            isPresentation: true,
          },
        ],
      },
      {
        from: '19h',
        to: '21h',
        activities: [
          {
            author:
              'Prof. Dr. Aldo Nelson Bona, Superintendente de Ciência, Tecnologia e Ensino Superior do Paraná',
            title: 'Abertura do SEI-SICITE 2021: Palestra e Mesa de Debate',
            abstract:
              '<b>Palestra</b></br></br>Prof. Dr. Aldo Nelson Bona</br></br>Superintendente de Ciência, Tecnologia e Ensino Superior do Paraná</br></br><b>Mesa de Debate</b></br></br>Tema: Pesquisa e extensão para um mundo em transformação</br></br>Prof. Dr. Marcos Flavio de Oliveira Schiefler Filho</br>Reitor da UTFPR</br></br>Prof. Dr. Heron Lima</br>Vice-Reitor da UTFPR</br></br>Celso Góes</br>Prefeito de Guarapuava</br></br>Paulino Lorenzo Jr</br>CEO do Cilla Tech Park</br></br>Prof.ª Dra. Claudia Regina Xavier</br>Pró-Reitora de Pesquisa e Pós-Graduação da UTFPR</br></br>Prof. Dr. Rubens de Faria</br>Pró-Reitor de Relações Empresariais e Comunitárias da UTFPR',
            photo: imgBona,
            link: '/redirect?to=palestra-abertura',
            isPresentation: false,
          },
        ],
      },
    ],
  },
  {
    day: '09/11',
    weekDay: 'Terça-Feira',
    prog: [
      {
        from: '9h',
        to: '12h',
        activities: [
          {
            author: 'Paulo Cereda',
            title: 'Minicurso: Uma aventura tipográfica com LaTeX e Overleaf',
            abstract:
              "<b>Minicurso: Uma aventura tipográfica com LaTeX e Overleaf</b></br></br>Paulo Cereda</br></br>Este minicurso é uma introdução ao LaTeX, um sistema de tipografia. Na primeira parte da apresentação, aprenderemos a criar nosso primeiro documento, desde os conceitos essenciais até construções mais elaboradas. Veremos as vantagens do uso de LaTeX em documentos acadêmicos - teses, dissertações, relatórios, artigos, etc. Na segunda parte, conheceremos a Overleaf, uma ferramenta online para escrita de documentos LaTeX e como ela pode contribuir para um fluxo de trabalho simplificado e eficiente.</br></br>Paulo é do interior de São Paulo. Entusiasta de software livre, usa LaTeX há mais de 15 anos e é fundador da Island of TeX, uma organização que atua como hub para projetos relacionados a TeX e tipografia. É membro do grupo de usuários TeX do Reino Unido e do conselho do TUG — TeX Users Group. Atua como Community Outreach Coordinator na Overleaf. Pesquisador da área de teoria da computação, fã da Nintendo, movido a Pringles e refrigerante, e colecionador de patos de borracha, Paulo é presença constante na comunidade TeX. </br></br>Lattes: <a href='http://lattes.cnpq.br/9779052569284359' target='_blank'>http://lattes.cnpq.br/9779052569284359</a>. ",
            photo: imgMinicursoLatex,
            link: '/redirect?to=minicurso-latex',
            isPresentation: false,
          },
        ],
      },
      {
        from: '13h30',
        to: '17h30',
        activities: [
          {
            author: 'Sessões de Apresentação',
            title: 'Consulte a nossa agenda de apresentações',
            abstract: null,
            photo: imgPresentation,
            link: 'https://seisicite2021.gp.utfpr.edu.br/schedule',
            isPresentation: true,
          },
        ],
      },
      {
        from: '19h',
        to: '21h',
        activities: [
          {
            author: 'BOSCH',
            title: 'Palestras + Oportunidades',
            abstract:
              "<b>Noite BOSCH: Palestras + Oportunidades</b></br></br>Mediação:</br>Nara Haberland</br></br><b>Palestra 1 (19:00 às 19:45)</b></br>Bosch - A global líder em Iot que desenvolve Tecnologia para Vida</br>Gustavo Cercal</br>Líder de Projetos na Bosch e Doutorando em Eletroquímica pela UFPR</br></br>Resumo:</br>Venha conhecer a Bosch. A empresa alemã, lider em IoT, que oferece soluções inovadoras para casas e cidades inteligentes, mobilidade e indústria conectadas. Com atuação no Brasil possui diversas formas de interação empresa-universidade.</br></br><b>Palestra 2 (20:00 às 20:45)</b></br>Da ''IC'' para a Engenharia de Desenvolvimento da Bosch</br>Gustavo Scherpinski</br>Engenheiro de Produtos Junior na Bosch e Engenheiro Mecânico pela UTFPR</br></br>Resumo:</br>Tudo começou com um projeto de iniciação científica. É isso mesmo. Venha conhecer a trajetória profissional do Engenheiro de Desenvolvimento que iniciou na Bosch por meio de um projeto de pesquisa.</br></br><a href='https://www.bosch.com.br/'>https://www.bosch.com.br/</a>",
            photo: imgBosch1,
            link: '/redirect?to=noite-bosch',
            isPresentation: false,
          },
        ],
      },
    ],
  },
  {
    day: '10/11',
    weekDay: 'Quarta-Feira',
    prog: [
      {
        from: '9h',
        to: '10h',
        activities: [
          {
            author: 'Kamila Chagas Peronni',
            title:
              'Visita Técnica: Instituto para Pesquisa do Câncer de Guarapuava (IPEC)',
            abstract:
              "<b>Visita Técnica</b></br></br>Local: Instituto para Pesquisa do Câncer de Guarapuava (IPEC).</br></br>Kamila Chagas Peronni, Pesquisadora IPEC.</br></br>Mediação: Prof. Dra. Viviane Teleginski</br></br><a href='https://ipec.org.br/'>https://ipec.org.br/</a>",
            photo: imgVisitaIPEC,
            link: '/redirect?to=visita-ipec',
            isPresentation: false,
          },
        ],
      },
      {
        from: '10h',
        to: '12h',
        activities: [
          {
            author: 'Sociedade Brasileira de Bioética',
            title:
              'Mesa Redonda: Transformações tecnológicas e seus desafios bioéticos',
            abstract:
              "<b>Mesa Redonda</b></br></br>Sociedade Brasileira de Bioética</br></br>Tema:</br>Transformações tecnológicas e seus desafios bioéticos</br></br>Mediação:</br>Prof.ª Dra. Anna Silvia Penteado Setti da Rocha (UTFPR)</br></br><b>Palestra 1:</b></br>A Transformação tecnologia e a Humanidade</br>Prof. Dr. Jelson Roberto de Oliveira (PUCPR)</br></br><b>Palestra 2:</b></br>Os desafios de uma ética para a civilização tecnológica</br>Prof. Dr. Anor Sganzerla (PUCPR)</br></br></br><a href='https://www.sbbioetica.org.br/'>https://www.sbbioetica.org.br/</a></br>",
            photo: imgSBB,
            link: '/redirect?to=mesa-sbb',
            isPresentation: false,
          },
        ],
      },
      {
        from: '13h30',
        to: '17h30',
        activities: [
          {
            author: 'Sessões de Apresentação',
            title: 'Consulte a nossa agenda de apresentações',
            abstract: null,
            photo: imgPresentation,
            link: 'https://seisicite2021.gp.utfpr.edu.br/schedule',
            isPresentation: true,
          },
        ],
      },
      {
        from: '18h',
        to: '20h',
        activities: [
          {
            author: 'Prof.ª Dra. Marcella Scoczynski',
            title: 'Podcast: Feito por Elas',
            abstract:
              '<b>Podcast: Feito por Elas</b></br></br>Desafios da trajetória e do dia a dia de mulheres que trabalham com ciência</br></br>Mediação: Prof.ª Dra. Joice Cristini Kuritza</br>Engenheira Ambiental, Doutora em Recursos Hídricos e Saneamento Ambiental pelo IPH/UFRGS, professora na coordenação de engenharia civil na UTFPR campus Guarapuava desde 2019. Atualmente também é diretora de pesquisa e pós-graduação do campus. @joicekuritza</br></br>Convidada 1:</br>Marcella Scoczynski Ribeiro Martins</br>Engenheira da computação, Doutora em Engenharia Elétrica e Informática Industrial pela UTFPR, professora no departamento de engenharia elétrica na UTFPR campus Ponta Grossa desde 2011. Atualmente também atua em um projeto de pesquisa conduzido pelo Frontier Development Lab (FDL), NASA e o Instituto de pesquisa norte-americano SETI Institute. @marcella.scoczynski</br></br>Convidada 2:</br>Larissa Quartatoli</br>Engenheira ambiental, Doutora em Engenharia Civil pela UFV, professora no curso de engenharia ambiental da UNIVIÇOSA. Atualmente também atua como Especialista de Projetos e Pesquisa I no convênio entre UFV e PETROBRAS no Laboratório de Microbiologia Ambiental Aplicada da UFV. @larissaqq</br></br>Convidada 3:</br>Noryam Bervian Bispo</br>Engenheira Agrônoma, Doutora em Melhoramento de Plantas pela UFRGS. Professora EBTT no IFRS campus Sertão desde 2012. Mãe desde 2013. @noryambervianbispo',
            photo: pPodcast,
            link: '/redirect?to=podcast',
            isPresentation: false,
          },
        ],
      },
      {
        from: '20h',
        to: '22h',
        activities: [
          {
            author: 'Mesa Redonda',
            title:
              'Vale do Genoma: um ecossistema de inovação para um mundo em transformação',
            abstract:
              '<b>Vale do Genoma: um ecossistema de inovação para um mundo em transformação</b></br></br>Palestrante 1: </br>Prof. Dr. David Livingstone Alves Figueiredo</br>Presidente do Instituto para Pesquisa do Câncer de Guarapuava (IPEC)</br></br>Palestrante 2:</br>Dr. Tsen Chung Kang</br>Diretor de Pesquisa e Novos Negócios do Grupo Jacto',
            photo: imgValeGenoma,
            link: '/redirect?to=mesa-vale-genoma',
            isPresentation: false,
          },
        ],
      },
    ],
  },
];

export default progHighlights;
