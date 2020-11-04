import Mail from '../lib/Mail.js';

export default {
  key: 'RegistrationMail',
  options: {
    delay: 5000,
    priority: 1
  },
  async handle({ data }) {
    const { user } = data

    await Mail.sendMail({
      from: 'JT <contato@jt.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'Cadastro de Usuário',
      html: `Olá ${user.name}, Bem-vindo à JT`
    })

  }
};
