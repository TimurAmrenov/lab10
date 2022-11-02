function get_sum(lab){
    let sum = 0
    for (let i = 0; i < lab.length; i++){
        sum += lab[i]
    }
    return sum
}

let lab1 = [5, 5, 5, 5, 10, 10]

let lab2 = [5, 5, 5, 5, 5, 5, 10]

let lab3 = [5, 9, 10, 12]

let lab4_5 = [10, 5, 5, 5, 5, 5, 10, 10, 10, 10, 0]

let lab6 = [5, 5, 10, 0, 5, 10]

let lab8 = [5, 10, 10, 10, 5]

let sum1 = get_sum(lab1)
let sum2 = get_sum(lab2)
let sum3 = get_sum(lab3)
let sum4_5 = get_sum(lab4_5)
let sum6 = get_sum(lab6)
let sum8 = get_sum(lab8)

let sums = [sum1, sum2, sum3, sum4_5, sum6]

let sums_avg = 0

for (let i = 0; i < sums.length; i++){
    sums_avg += sums[i]/7
}


let quiz1 = 36

let total_score = (quiz1*0.4 + sums_avg*0.6)

function main(lab1, lab2, lab3, lab4_5, lab6, lab8){
    const results = {
        lab1 : lab1,
        lab2 : lab2,
        lab3 : lab3,
        lab4_5: lab4_5,
        lab6: lab6,
        lab8: lab8,
        quiz1: quiz1 / 0.4,
        sums : sums,
        total_score: total_score / 0.4
    }
    return results
}

console.log(main(lab1, lab2, lab3, lab4_5, lab6, lab8))