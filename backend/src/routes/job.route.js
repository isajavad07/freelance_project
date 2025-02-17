const express = require('express');
const router = express.Router();
const { createJob, viewJobs, viewJob, deleteJob } = require('../controllers/job.controller.js');


router.post('/create', createJob);
router.get('/', viewJobs);
router.get('/:id', viewJob);
router.delete('/delete/:id', deleteJob);

module.exports = router;