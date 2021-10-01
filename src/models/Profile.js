let data = {
    "name": "Suesley Sunniê",
    "avatar": "https://avatars.githubusercontent.com/u/68163716?s=400&u=f2218f87b8e4c942ffc49a7a922a1012014148c3&v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4,
    "value-hour": 75
}

module.exports = {
    get(){
        return data;
    },

    update(newData){
        data = newData;
    }
}
