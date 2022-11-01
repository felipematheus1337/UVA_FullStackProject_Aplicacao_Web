import { Router } from 'express';
import alunoController from '../controllers/AlunoController';
import loginAuth from '../middlewares/loginAuth';

const router = Router();

router.get('/', loginAuth, alunoController.index);
router.get('/:id', loginAuth, alunoController.show);
router.put('/:id', loginAuth, alunoController.update);
router.post('/', loginAuth, alunoController.store);
router.delete('/:id', loginAuth, alunoController.delete);

export default router;
