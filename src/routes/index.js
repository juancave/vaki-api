import express from 'express'
import groupsRoute from './groups.route.js'

const router = express.Router()

// routes
router.use('/groups', groupsRoute)

export default router
