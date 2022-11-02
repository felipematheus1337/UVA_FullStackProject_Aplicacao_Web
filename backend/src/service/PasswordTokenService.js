import { v4 as uuidv4 } from 'uuid';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import Usuario from '../models/Usuario';
import Passwordtoken from '../models/Passwordtoken';

dotenv.config();

class PasswordTokenService {
  async createTokenForRecover(email) {
    const user = await this.findUserByEmail(email);
    if (user !== undefined) {
      try {
        const pwd = await Passwordtoken.create({
          user_id: user.id,
          used: 0,
          token: uuidv4(),
          created_at: Date.now(),
          updated_at: Date.now(),
        });

        return { status: true, token: pwd };
      } catch (e) {
        console.log(e);
        return { status: false, error: 'O e-mail passado não existe no banco de dados' };
      }
    } else {
      return { status: false, error: 'O e-mail passado não existe no banco de dados' };
    }
  }

  async findUserByEmail(email) {
    try {
      const user = await Usuario.findOne({ email });
      return user;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  async sendMailTo(obj) {
    // const { emailId } = obj.token.id;
    // const { email } = await Usuario.findOne({ emailId });
    const transportador = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      service: 'gmail',
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });
    const emailASerEnviado = {
      from: process.env.EMAIL,
      to: 'fordeveloperusing@gmail.com',
      subject: 'Teste de envio de email',
      text: obj.token.token,
    };
    transportador.sendMail(emailASerEnviado, (err) => {
      if (err) {
        console.log(err);
        return { status: false, error: err };
      }
      return { status: true, msg: 'Enviado com sucesso!' };
    });
  }
}

export default new PasswordTokenService();
