const Job = require('../models/Jobs.js');

const createJob = async (req, res) => {
    try {
        const { title, description, budget, type } = req.body;
        const job = new Job({
            title,
            description,
            budget,
            type
        });
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const viewJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const viewJob = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Job.findById(id);
        if (job) {
            res.status(200).json(job);
        } else {
            res.status(404).json({ message: 'Job not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        const job = await Job.findByIdAndDelete(id);
        if (job) {
            res.status(200).json({ message: 'Job deleted successfully' });
        } else {
            res.status(404).json({ message: 'Job not found' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    createJob,
    viewJobs,
    viewJob,
    deleteJob,
};