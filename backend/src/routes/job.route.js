const express = require('express');
const router = express.Router();
const { createJob, viewJobs, deleteJob } = require('../controllers/job.controller.js');


router.post('/create', createJob);
router.get('/', viewJobs);
router.delete('/delete', deleteJob);

module.exports = router;