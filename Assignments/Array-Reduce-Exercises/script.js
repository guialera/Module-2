//1

const numbers = [1, 2, 3]

const numSums = numbers.reduce(function (final, nums) {
    final += nums
    return final
})

console.log(numSums)

const numbersV2 = [1, 2, 3]

const numSumsV2 = numbersV2.reduce((final, nums) => final += nums)

console.log(numSumsV2)

//2

const numbersStrings = [1, 2, 3]

const numStrings = numbersStrings.reduce(function (final, nums) {
    final = final + nums
    return final
}, "")

console.log(numStrings)

const numbersStringsV2 = [1, 2, 3]

const numStringsV2 = numbersStringsV2.reduce((final, nums) => final = final + nums, "")

console.log(numStringsV2)

//3

const voters = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
]

const voted = voters.reduce(function (final, didVote) {
    if (didVote.voted) {
        final.placedVote++
    } return final
}, { placedVote: 0 })

console.log(voted)

//4

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

const total = wishlist.reduce(function (final, eachPrice) {
    final = final + eachPrice.price
    return final
}, 0)

console.log(total)

//5

const arrs = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
]

const singleArr = arrs.reduce(function (final, single) {
    final = final.concat(single)
    return final
}, [])

console.log(singleArr)

//6

const votersData = [
    { name: 'Bob', age: 30, voted: true },
    { name: 'Jake', age: 32, voted: true },
    { name: 'Kate', age: 25, voted: false },
    { name: 'Sam', age: 20, voted: false },
    { name: 'Phil', age: 21, voted: true },
    { name: 'Ed', age: 55, voted: true },
    { name: 'Tami', age: 54, voted: true },
    { name: 'Mary', age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey', age: 41, voted: true },
    { name: 'Jeff', age: 30, voted: true },
    { name: 'Zack', age: 19, voted: false }
]

const voterInfo = votersData.reduce(function (final, each) {
    if (each.age >= 18 && each.age <= 25) {
        final.numYoungPeople++
        if (each.voted) {
            final.numYoungVotes++
        }
    } else if (each.age >= 26 && each.age <= 35) {
        final.numMidPeople++
        if (each.voted) {
            final.numMidPeopleVotes++
        }
    } else if (each.age >= 36 && each.age <= 55) {
        final.numOldPeople++
        if (each.voted) {
            final.numOldPeopleVotes++
        }
    } return final
}, {
    numYoungPeople: 0,
    numYoungVotes: 0,
    numMidPeople: 0,
    numMidPeopleVotes: 0,
    numOldPeople: 0,
    numOldPeopleVotes: 0
})

console.log(voterInfo)

/*
{
    if (each.age >= 18 && each.age <= 25) {
        final.numYoungPeople++
    } else if (each.age >= 18 && each.age <= 25 && each.voted === true) {
        final.numYoungVotes++
    } else if (each.age >= 26 && each.age <= 35) {
        final.numMidPeople++
    } else if (each.age >= 26 && each.age <= 35 && each.voted === true) {
        final.numMidPeopleVotes++
    } else if (each.age >= 36 && each.age <= 55) {
        final.numOldPeople++
    } else if (each.age >= 36 && each.age <= 55 && each.voted === true) {
        final.numOldPeopleVotes++
    } return final
}*/