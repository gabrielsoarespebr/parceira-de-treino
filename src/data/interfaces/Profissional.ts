export interface Profissional{
    id: number,
    profissao: number,
    nome: string,
    sobrenome: string,
    cpf: string,
    dataNascimento: string,
    endereco: {
      cep: string,
      rua: string,
      numero: string,
      bairro: string,
      cidade: string,
      estado: string
    },
    fotoPerfilUrl: string,
    fotoVerificacaoUrl: string,
    whatsappUrl: string,
    instagramUrl: string,
    emailUrl: string,
    siteUrl: string,
    senha: string,
  }