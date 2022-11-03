import bcrypt from 'bcryptjs';
import Usuario from '../models/Usuario';

class UsuarioServive {
  async changePassword(newPassword, email) {
    const hash = await bcrypt.hash(newPassword, 8);

    await Usuario.update({ password_hash: hash }, { where: { email } }).then((user) => {
      console.log(user);
    }).catch((e) => {
      console.log(e);
    });
  }
}

export default new UsuarioServive();
