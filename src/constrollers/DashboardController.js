const Job = require('../models/Job');
const JobUtils = require('../utils/JobUtils');
const Profile = require('../models/Profile');

module.exports = {
    async index(req, res) {
        const jobs = await Job.get();
        const profile = await Profile.get();
        
        //Total de horas por dia de jobs em progresso
        let jobTotalHours = 0;

        //Array de status possíveis
        let statusCount = {
            progress: 0,
            done: 0,
            total: jobs.length,
        }

        const updatedJobs = jobs.map((job) => {

            const remaining = JobUtils.remainingDays(job);
            const status = remaining <= 0 ? 'done' : 'progress';

            //Contando os status
            statusCount[status] += 1;

            if(status == "progress"){
                jobTotalHours += Number(job["daily-hours"]);
            }

            return {
                ...job, //copia o objeto inteiro
                remaining,
                status,
                budget: JobUtils.calculateBudget(job, profile['value-hour']),
            }
        })

        const freeHours = profile['hours-per-day'] - jobTotalHours;

        return res.render("index", { jobs: updatedJobs, profile: profile, statusCount: statusCount, freeHours: freeHours });
    }
}