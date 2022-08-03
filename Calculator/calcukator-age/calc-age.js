const ageInMilSec = new Date('2022-11-20') - new Date('2000-11-18')

// const ageInYears = ageInMilSec / 1000 / 60 / 60 / 24 / 365.25

const ageInDate = new Date(ageInMilSec)

const age = ageInDate.getFullYear()

console.log(math.floor(age - 1970))