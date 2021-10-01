module.exports =  {
    remainingDays(job) {
        const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()

        const created_at = new Date(job.created_at)
        const dueDay = created_at.getDate() + Number(remainingDays)
        const dueDateInMs = created_at.setDate(dueDay)

        const timeDiffInMs = dueDateInMs - Date.now()

        //Transformar dias em milisegundos
        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = Math.floor(timeDiffInMs / dayInMs)

        //restam x dias
        return dayDiff
    },

    calculateBudget: (job, valueHour) => valueHour * job["total-hours"] 
}