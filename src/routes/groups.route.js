import express from 'express';
import groupsController from '../controllers/groups.controller.js';

const router = express.Router();

router.get('/', groupsController.getAll);
router.get('/:id', groupsController.getById);
router.post('/', groupsController.create);
router.put('/:id', groupsController.update);

export default router;
