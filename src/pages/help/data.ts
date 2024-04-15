export interface IFaqData {
  question: string;
  answer: IFaqAnswer;
}
export interface IFaqSingleAnswer {
  singleAnswer: IFaqAnswer;
}
export interface IFaqAnswer {
  simpleBefore?: string[];
  simpleAfter?: string[];
  topics?: { text: string; bold?: string }[];
}

export const faqData = {
  reembolsos: [
    {
      question: ' Não estou de acordo com o valor do meu reembolso. O que fazer?',
      answer: {
        simpleBefore: [
          `O valor do reembolso é definido pelo fornecedor e dependerá dos termos e condições da sua reserva.
        Lembrando que as taxas de serviços da Lazertur Viagens não são reembolsáveis.
        Para saber mais, entre em contato conosco.`,
        ],
      },
    },
    {
      question: 'Como solicitar reembolso devido a problemas com a reserva?',
      answer: {
        simpleBefore: [
          `O primeiro passo é abrir uma solicitação relatando o ocorrido, anexando extrato da sua conta ou a fatura do cartão. 
        Sem os documentos que comprovem a cobrança, não será possível prosseguir com a solicitação do reembolso. A devolução dependerá do seu caso em específico e das condições aceitas no momento da compra. Caso seja aprovado, o reembolso pode demorar entre 61 e 110 dias para ser efetuado. 
      `,
        ],
      },
    },
    {
      question: 'Recebi um reembolso, mas não as taxas de serviço. O que fazer?',
      answer: {
        simpleBefore: [
          'Na Lazertur Viagens, as taxas de serviço não são reembolsáveis. Uma vez que, ao comprar um produto, o serviço de intermediação foi prestado pela nossa agência.',
        ],
      },
    },
    {
      question:
        'Meus dados bancários mudaram e preciso atualizá-los para receber o reembolso. O que fazer?',
      answer: {
        simpleBefore: [
          'Nosso time entrará em contato no momento de processar o reembolso para solicitar e confirmar os novos dados para pagamento.  É só aguardar o nosso contato.',
        ],
      },
    },
  ],
  bagagem: [
    {
      question: 'Quais itens posso levar ou não na minha bagagem de mão?',
      answer: {
        simpleBefore: [
          'É possível que algumas regras mudem de acordo com a companhia aérea ou o país de destino, mas em geral, esses são os itens que são permitidos e não permitidos:',
        ],
        simpleAfter: [
          'É importante verificar as regulamentações específicas da companhia aérea com a qual você está viajando ou no site da Agência Nacional de Aviação Civil (ANAC).',
        ],
        topics: [
          {
            bold: 'Permitidos:',
            text: ' líquidos em recipientes transparentes de até 100ml, alimentos pré-embalados, dispositivos eletrônicos pessoais como laptops, tablets e smartphones, roupas, livros e medicamentos.',
          },
          {
            bold: 'Não permitidos:',
            text: ' objetos cortantes ou pontiagudos (tesouras, facas, canivetes e objetos semelhantes), itens inflamáveis (produtos como aerossóis, spray de cabelo e isqueiros), armas de fogo e outros objetos considerados perigosos.',
          },
        ],
      },
    },
    {
      question:
        'Preciso viajar com bagagens especiais (instrumentos musicais, cadeiras de roda, equipamento esportivo, etc). O que fazer?',
      answer: {
        simpleBefore: [
          'Caso você precise transportar qualquer objeto que não caiba em uma bagagem convencional devido o tamanho ou volume, é preciso entrar em contato com a companhia aérea responsável pelo seu voo e solicitar que essa “bagagem especial” seja  adicionada a sua reserva. Lembrando que:',
        ],
        topics: [
          {
            bold: '',
            text: 'O objeto a ser transportado deve ser embalado adequadamente para evitar quaisquer tipos de danos. Para saber como fazer isso, entre em contato com a companhia aérea',
          },
          {
            bold: '',
            text: 'A companhia aérea responsável pelo seu voo irá despachar o objeto separadamente como um adicional de bagagem.',
          },
        ],
      },
    },
    {
      question: 'Qual o tamanho e peso permitido para minha bagagem despachada?',
      answer: {
        simpleBefore: [],
        topics: [
          {
            bold: 'Peso: ',
            text: 'O peso permitido para bagagem despachada varia de acordo com a companhia aérea e a classe de viagem. Geralmente, o peso máximo permitido varia de 20 kg a 32 kg por mala.',
          },
          {
            bold: 'Dimensões: ',
            text: 'As dimensões máximas permitidas também variam, mas geralmente estão na faixa de 158 cm (comprimento + largura + altura). Recomendamos verificar as especificações exatas da sua companhia aérea.',
          },
        ],
      },
    },
    {
      question: 'Qual o tamanho e peso permitido para minha bagagem de mao?',
      answer: {
        simpleBefore: [],
        topics: [
          {
            bold: 'Peso: ',
            text: 'O peso permitido para bagagem de mão também varia de acordo com a companhia aérea e pode variar de 5 kg a 10 kg.',
          },
          {
            bold: 'Dimensões: ',
            text: 'As dimensões máximas permitidas para bagagem de mão geralmente estão na faixa de 55 cm x 35 cm x 25 cm. Recomendamos verificar as especificações exatas da sua companhia aérea.',
          },
        ],
      },
    },
    {
      question: 'Em voo de conexão, preciso retirar minha bagagem despachada?',
      answer: {
        simpleBefore: [
          'Normalmente, as próprias companhias aéreas realizam o trâmite de transportar a sua bagagem entre os voos.',
          'É possível que a companhia aérea peça para que você retire a sua bagagem e despache novamente em voos internacionais. Caso seja necessário, você será informado no aeroporto. Por isso, é importante sempre estar atento às instruções.',
        ],
      },
    },
    {
      question: 'Posso adicionar uma bagagem extra?',
      answer: {
        simpleBefore: [
          'Sim! Ao comprar sua passagem com um de nossos agentes, você pode adicionar uma bagagem extra por um valor que será definido de acordo com a companhia aérea e a data da viagem.',
          'Após a compra, você também pode adicionar a bagagem extra. Basta entrar em contato com a companhia aérea, usando o código de reserva de 6 dígitos.',
        ],
      },
    },
  ],
  carros: [
    {
      question: 'Quais são os critérios para alugar um carro?',
      answer: {
        topics: [
          {
            text: 'Ter mais de 18 anos e possuir CNH válida;',
          },
          {
            text: 'Para motoristas com idade entre 18 - 20 anos, é preciso contratar o seguro-proteção “Condutor Jovem” ao retirar o veículo na agência;',
          },
          {
            text: 'Ser o motorista responsável pela reserva;',
          },
          {
            text: 'Não será aceito CNH vencida, mesmo com comprovante de renovação; ',
          },
          {
            text: 'Apresentar cartão de crédito em nome do motorista responsável com limite para a pré-autorização;',
          },
        ],
      },
    },
    {
      question: 'Como faço para alugar um carro?',
      answer: {
        simpleBefore: [
          'Basta entrar em contato conosco informando o local, data e horário para a retirada e devolução do veículo. Nossa equipe fará os trâmites necessários, como incluir em sua reserva a proteção de carro, cadeira de bebê, dentre outros itens necessários para a sua segurança e conforto.',
        ],
      },
    },
    {
      question: 'O que preciso saber antes de devolver um carro alugado?',
      answer: {
        simpleBefore: [
          'É importante que você se atente a alguns requisitos para evitar possíveis multas/taxas:',
        ],
        topics: [
          {
            text: 'O veículo, ao ser devolvido, deve ter a mesma quantidade de combustível registrado no momento da retirada;',
          },
          {
            text: 'Para evitar taxa de lavagem, o veículo deve ser entregue limpo;',
          },
          {
            text: 'O veículo pode ser devolvido em qualquer unidade da agência utilizada no momento da locação, mas há cobrança pelo retorno do carro entre as agências. O valor pode ser definido entre agências da mesma cidade ou por quilômetro de distância entre a cidade de destino e a de origem, além do valor do pedágio, caso tenha.',
          },
        ],
      },
    },
    {
      question: 'O que é “Condutor Jovem”?',
      answer: {
        simpleBefore: [
          'É uma modalidade de locação específica para motoristas entre 18 - 20 anos, com CNH válida. No momento de locação, o Condutor Jovem deve apresentar cartão de crédito, em seu nome, com limite disponível para a pré-autorização.',
        ],
      },
    },
  ],
  checkin: [
    {
      question: 'Como e quando fazer o check-in online?',
      answer: {
        simpleBefore: [
          'É possível fazer o check-in online com 72 até 24 horas de antecedência do seu voo, dependendo da companhia aérea. Para isso, siga as etapas:',
        ],
        simpleAfter: [
          'Se atente as nossas dicas: é importante escrever todos os seus dados da mesma forma que foram descritos no voucher. Caso o seu sobrenome tenha acentuações, escreva sem eles. Caso você tenha dois sobrenomes, preencha somente o último.',
        ],
        topics: [
          { text: 'Acesse o aplicativo ou site da companhia aérea responsável pelo seu voo;' },
          { text: 'Escolha a opção “check-in”;' },
          { text: 'Insira seu sobrenome e o código de reserva disponível no voucher.' },
        ],
      },
    },
    {
      question: 'Não consigo localizar o código para fazer o check-in online. O que fazer?',
      answer: {
        simpleBefore: [
          'O primeiro passo é realizar o download do seu bilhete eletrônico e seguir essas etapas:',
        ],
        topics: [
          {
            text: 'Use o código de 6 letras e números presente no seu bilhete eletrónico para encontrar a sua reserva. Caso não consiga localizar pela internet, entre em contato com a companhia aérea via chat ou por telefone.',
          },
          {
            text: 'Use o número do seu bilhete eletrônico (etkt) disponível no voucher para encontrar na sua reserva.',
          },
        ],
      },
    },
    {
      question: 'Não fiz o check-in online. Tem algum problema?',
      answer: {
        simpleBefore: [
          'Não! O check-in online não é obrigatório. Você pode fazer de forma presencial no aeroporto antes da sua viagem.',
        ],
      },
    },
    {
      question: 'Quando vou receber meu cartão de embarque?',
      answer: {
        simpleBefore: [
          'Finalizando seu check-in online, você receberá no seu e-mail o cartão de embarque emitido pela companhia aérea.',
          'Você pode apresentar o cartão pelo celular ou imprimí-lo.',
        ],
      },
    },
  ],
  cancelamentos: [
    {
      question: 'Preciso cancelar ou alterar a data da minha viagem. Como prosseguir?',
      answer: {
        simpleBefore: [
          'Basta entrar em contato com a nossa equipe, explicando o ocorrido. Caso a motivação do cancelamento esteja relacionada a sua saúde,  nos envie comprovantes e atestados médicos.',
          'Assim que sua solicitação for aberta, entraremos em contato para entender a situação.',
        ],
      },
    },
    {
      question: 'Meu voo foi reprogramado. O que fazer?',
      answer: {
        simpleBefore: [
          'As companhias aéreas podem cancelar ou alterar a data do seu voo por diferentes situações, tendo dois casos principais: ',
        ],
        topics: [
          {
            bold: 'Alterações menores: ',
            text: 'neste caso, as alterações são mínimas e automáticas. Não requer nenhuma ação da sua parte, nossa equipe irá comunicar as mudanças por e-mail.',
          },
          {
            bold: 'Alterações maiores: ',
            text: 'essas modificações afetam o voo original e neste caso, você precisará escolher um novo voo sem custos e taxas adicionais.',
          },
        ],
      },
    },
    {
      question: 'O que fazer quando a mudança de voo é muito cara?',
      answer: {
        simpleBefore: [
          'Devido a mudanças no seu voo, o custo final será calculado por 2 valores: ',
        ],
        simpleAfter: [
          'Para mais informações, entre em contato com a companhia aérea ou verifique os termos e condições da sua passagem.',
        ],
        topics: [
          {
            text: 'Caso haja, penalidade da companhia aérea para realizar a alteração; ',
          },
          {
            text: 'Caso haja, a disparidade entre a tarifa do voo atual e o novo.',
          },
        ],
      },
    },
    {
      question: 'É possível fazer a transferência da minha passagem para outra pessoa?',
      answer: {
        simpleBefore: [
          'Apenas a LATAM, em alguns casos, permite este trâmite. Você poderá solicitar a correção do nome e sobrenome (permitido mudar somente duas letras), nas companhias aéreas que não permitem essa mudança.',
        ],
      },
    },
  ],
  pets: [
    {
      question: 'Posso incluir meu pet ou cão-guia no meu voo?',
      answer: {
        simpleBefore: [
          'Este trâmite não é realizado pela Lazertur Viagens. Cada companhia aérea atua com suas regras e diretrizes, por isso, para saber mais informações, entre em contato com o canal de atendimento da companhia responsável pelo seu voo.',
        ],
      },
    },
  ],
  crianças: [
    {
      question: 'É possível realizar a compra para um menor de idade viajar sozinho? ',
      answer: {
        simpleBefore: [
          'A Lazertur Viagens não realiza emissões para menores de 12 anos desacompanhados.',
          'Para menores acima de 12 anos e abaixo de 16 anos, é possível realizar a compra, desde que seja para voos diretos, sem escalas.',
          'É essencial verificar possíveis taxas e cobranças adicionais diretamente no site da companhia aérea responsável por operar o voo.',
        ],
      },
    },
    {
      question: 'Quais os requisitos para um menor de idade embarcar?',
      answer: {
        simpleBefore: [
          'É possível que haja alguma variação dependendo da companhia aérea responsável pelo voo, mas em geral, esses são os requisitos: ',
          'Para voos nacionais: ',
        ],
        simpleAfter: [
          'Verifique sempre as políticas e condições da companhia aérea responsável pelo voo para evitar possíveis impedimentos na hora de embarcar.',
        ],
        topics: [
          {
            bold: 'Autorização: ',
            text: 'nenhum menor de 16 anos pode viajar em destinos nacionais sem a presença dos responsáveis ou autorização judicial. Caso esteja viajando acompanhado com um dos pais, é preciso apresentar uma autorização do outro responsável autorizando a viagem.',
          },
          {
            bold: 'Vacinas: ',
            text: 'dependendo do destino de viagem, é preciso apresentar comprovante de vacinação. Verifique no site da companhia aérea responsável pelo voo.',
          },
          {
            bold: 'Documentos: ',
            text: 'é preciso apresentar documentos pessoais válidos, como passaporte, RG ou certidão de nascimento.',
          },
          {
            bold: 'Serviço de acompanhamento: ',
            text: 'caso o menor esteja viajando desacompanhado ou sem a presença dos responsáveis legais, é preciso contratar o serviço de acompanhamento na própria companhia aérea.',
          },
        ],
      },
    },
  ],
  seguros: [
    {
      question: 'É preciso contratar um seguro viagem?',
      answer: {
        simpleBefore: [
          'Altamente recomendado tanto para viagens no Brasil quanto internacionais. Em caso de emergências como perda ou extravio de bagagens e até questões médicas, ele será de grande auxílio.',
        ],
      },
    },
    {
      question: 'Preciso usar o seguro para questões médicas. O que fazer?',
      answer: {
        simpleBefore: [
          'Em casos de emergências médicas, você deve entrar em contato via telefone com a empresa do seu seguro. Caso necessário, entre em contato com nosso time que podemos lhe auxiliar.',
        ],
      },
    },
    {
      question: 'Preciso usar o seguro para proteger minha bagagem. O que fazer?',
      answer: {
        simpleBefore: [
          'Em casos de demora ou extravio da bagagem por parte da companhia aérea, a seguradora oferece indenização. É possível verificar o valor da indenização no voucher e será creditado se sua bagagem não for entregue em até 6 horas após a denúncia.',
        ],
      },
    },
  ],
};
