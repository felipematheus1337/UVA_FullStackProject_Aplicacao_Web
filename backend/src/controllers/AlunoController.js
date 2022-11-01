import Aluno from '../models/Aluno';

class AlunoController {
  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      return res.status(201).json(novoAluno);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: e });
    }
  }

  async index(req, res) {
    try {
      const todosAlunos = await Aluno.findAll({});
      return res.status(200).json(todosAlunos);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: e });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ error: 'Id não informado!' });
      }
      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({ error: `Aluno não encontrado com o ID : ${id}` });
      }
      return res.status(200).json(aluno);
    } catch (e) {
      console.log(e);
      return res.status(400).json({ error: e });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(406).json({ error: 'Id não especificado/invalido' });
      }

      const alunoPeloId = await Aluno.findByPk(id);

      if (!alunoPeloId) {
        return res.status(406).json({ error: 'Aluno não valido com esse ID' });
      }

      const alunoAtualizado = await alunoPeloId.update(req.body);
      return res.status(200).json(alunoAtualizado);
    } catch (e) {
      console.log(e);
      return res.status(406).json({ error: e });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(406).json({ error: 'Id não especificado/invalido' });
      }

      const alunoParaDeletar = await Aluno.findByPk(id);

      if (!alunoParaDeletar) {
        return res.status(406).json({ error: 'Aluno não valido com esse ID' });
      }

      await alunoParaDeletar.destroy();
      return res.status(200).json('Deletado com sucesso');
    } catch (e) {
      console.log(e);
      return res.status(406).json({ error: e });
    }
  }
}

export default new AlunoController();
