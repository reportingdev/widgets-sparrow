const data: Array<{
  comments: number
  likes: number
  shares: number
  date: number
}> = [
  { date: 1568592000000, comments: 0, likes: 0, shares: 0 },
  { date: 1568678400000, comments: 40, likes: 21, shares: 35 },
  { date: 1568764800000, comments: -3, likes: -5, shares: -8 },
  { date: 1568851200000, comments: 0, likes: 0, shares: 0 },
  { date: 1568937600000, comments: 0, likes: 0, shares: 0 },
  { date: 1569024000000, comments: 0, likes: 29, shares: 11 },
  { date: 1569110400000, comments: 0, likes: 6, shares: 0 },
  { date: 1569196800000, comments: 0, likes: 15, shares: 0 },
  { date: 1569283200000, comments: 0, likes: 7, shares: 19 },
  { date: 1569369600000, comments: 0, likes: 0, shares: 0 },
  { date: 1569456000000, comments: 0, likes: 0, shares: 0 },
  { date: 1569542400000, comments: 0, likes: 4, shares: 0 },
  { date: 1569628800000, comments: 0, likes: 2, shares: 0 },
  { date: 1569715200000, comments: 0, likes: 2, shares: 0 },
  { date: 1569801600000, comments: 0, likes: 4, shares: 7 },
  { date: 1569888000000, comments: 0, likes: 3, shares: 0 },
  { date: 1569974400000, comments: 0, likes: 2, shares: 0 },
  { date: 1570060800000, comments: 0, likes: 0, shares: 0 },
  { date: 1570147200000, comments: 0, likes: 1, shares: 0 },
  { date: 1570233600000, comments: 0, likes: 0, shares: 0 },
  { date: 1570320000000, comments: 1, likes: 5, shares: 1 },
  { date: 1570406400000, comments: 0, likes: 5, shares: 3 },
  { date: 1570492800000, comments: 0, likes: 2, shares: 4 },
  { date: 1570579200000, comments: 0, likes: 1, shares: 0 },
  { date: 1570665600000, comments: 0, likes: 0, shares: 0 },
  { date: 1570752000000, comments: 0, likes: 2, shares: 0 },
  { date: 1570838400000, comments: 12, likes: 31, shares: 8 },
  { date: 1570924800000, comments: 45, likes: 98, shares: 112 },
  { date: 1571011200000, comments: 12, likes: 24, shares: 17 },
  { date: 1571097600000, comments: 43, likes: 23, shares: 55 }
]

const newData: Array<{
  comments: number
  likes: number
  shares: number
  date: number
}> = [
  { date: 1568937600000, comments: 30, likes: 39, shares: 42 },
  { date: 1569024000000, comments: 22, likes: 55, shares: 41 },
  { date: 1569110400000, comments: 4, likes: 9, shares: 9 },
  { date: 1569196800000, comments: 15, likes: 81, shares: 37 },
  { date: 1569283200000, comments: 0, likes: 0, shares: 0 },
  { date: 1569369600000, comments: 0, likes: 29, shares: 0 },
  { date: 1569456000000, comments: 23, likes: 6, shares: 14 },
  { date: 1569542400000, comments: 19, likes: 55, shares: 47 },
  { date: 1569628800000, comments: 3, likes: 77, shares: 5 },
  { date: 1569715200000, comments: 0, likes: 0, shares: 0 },
  { date: 1569801600000, comments: 0, likes: 0, shares: 0 },
  { date: 1569888000000, comments: 0, likes: 4, shares: 0 },
  { date: 1569974400000, comments: 22, likes: 99, shares: 15 },
  { date: 1570060800000, comments: 0, likes: 2, shares: 0 },
  { date: 1570147200000, comments: 0, likes: 4, shares: 0 },
  { date: 1570233600000, comments: 8, likes: 17, shares: 22 },
  { date: 1570320000000, comments: 0, likes: 2, shares: 0 },
  { date: 1570406400000, comments: 0, likes: 0, shares: 0 },
  { date: 1570492800000, comments: 0, likes: 1, shares: 0 },
  { date: 1570579200000, comments: 98, likes: 11, shares: 7 },
  { date: 1570665600000, comments: 6, likes: 107, shares: 99 },
  { date: 1570752000000, comments: 4, likes: 5, shares: 0 },
  { date: 1570838400000, comments: 4, likes: 2, shares: 0 },
  { date: 1570924800000, comments: 0, likes: 1, shares: 0 },
  { date: 1571011200000, comments: 117, likes: 35, shares: 111 }
]

export { data, newData }
