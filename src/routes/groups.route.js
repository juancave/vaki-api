import express from 'express'
import groupsController from '../controllers/groups.controller.js'

const router = express.Router()

router.get('/', groupsController.getAll)
router.post('/', groupsController.create)

export default router
