import { Router } from 'express';
import usuarioController from '../controllers/UsuarioController';
import loginAuth from '../middlewares/loginAuth';

const router = new Router();

router.get('/', loginAuth, usuarioController.index);
router.get('/:id', loginAuth, usuarioController.show);
router.put('/:id', loginAuth, usuarioController.update);
router.post('/', usuarioController.store);
router.delete('/:id', loginAuth, usuarioController.delete);

export default router;
