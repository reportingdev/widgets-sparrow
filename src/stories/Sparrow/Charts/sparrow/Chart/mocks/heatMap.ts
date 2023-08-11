const heatMap: Array<{ day: number, hour: number, value: number }> = [
  {
    day: 5,
    hour: 1,
    value: 0.1
  },
  {
    day: 5,
    hour: 2,
    value: 0.1
  },
  {
    day: 5,
    hour: 3,
    value: 0.1
  },
  {
    day: 5,
    hour: 4,
    value: 0.1
  },
  {
    day: 5,
    hour: 5,
    value: 0.1
  },
  {
    day: 5,
    hour: 6,
    value: 0.1
  },
  {
    day: 5,
    hour: 7,
    value: 0.1
  },
  {
    day: 5,
    hour: 8,
    value: 0.1
  },
  {
    day: 5,
    hour: 9,
    value: 0.1
  },
  {
    day: 5,
    hour: 10,
    value: 0.1
  },
  {
    day: 5,
    hour: 11,
    value: 0.1
  },
  {
    day: 5,
    hour: 12,
    value: 0.1
  },
  {
    day: 5,
    hour: 13,
    value: 0.1
  },
  {
    day: 5,
    hour: 14,
    value: 0.5
  },
  {
    day: 5,
    hour: 15,
    value: 0.1
  },
  {
    day: 5,
    hour: 16,
    value: 0.1
  },
  {
    day: 5,
    hour: 17,
    value: 0.1
  },
  {
    day: 5,
    hour: 18,
    value: 0.1
  },
  {
    day: 5,
    hour: 19,
    value: 0.1
  },
  {
    day: 5,
    hour: 20,
    value: 0.5
  },
  {
    day: 5,
    hour: 21,
    value: 0.1
  },
  {
    day: 5,
    hour: 22,
    value: 0.1
  },
  {
    day: 5,
    hour: 23,
    value: 0.1
  },
  {
    day: 5,
    hour: 24,
    value: 0.1
  },
  {
    day: 1,
    hour: 1,
    value: 0.1
  },
  {
    day: 1,
    hour: 2,
    value: 0.1
  },
  {
    day: 1,
    hour: 3,
    value: 0.1
  },
  {
    day: 1,
    hour: 4,
    value: 0.1
  },
  {
    day: 1,
    hour: 5,
    value: 0.1
  },
  {
    day: 1,
    hour: 6,
    value: 0.1
  },
  {
    day: 1,
    hour: 7,
    value: 0.1
  },
  {
    day: 1,
    hour: 8,
    value: 0.1
  },
  {
    day: 1,
    hour: 9,
    value: 0.1
  },
  {
    day: 1,
    hour: 10,
    value: 0.1
  },
  {
    day: 1,
    hour: 11,
    value: 0.1
  },
  {
    day: 1,
    hour: 12,
    value: 0.1
  },
  {
    day: 1,
    hour: 13,
    value: 0.1
  },
  {
    day: 1,
    hour: 14,
    value: 0.7
  },
  {
    day: 1,
    hour: 15,
    value: 0.1
  },
  {
    day: 1,
    hour: 16,
    value: 0.1
  },
  {
    day: 1,
    hour: 17,
    value: 0.1
  },
  {
    day: 1,
    hour: 18,
    value: 0.1
  },
  {
    day: 1,
    hour: 19,
    value: 0.5
  },
  {
    day: 1,
    hour: 20,
    value: 0.1
  },
  {
    day: 1,
    hour: 21,
    value: 0.1
  },
  {
    day: 1,
    hour: 22,
    value: 0.1
  },
  {
    day: 1,
    hour: 23,
    value: 0.1
  },
  {
    day: 1,
    hour: 24,
    value: 0.1
  },
  {
    day: 6,
    hour: 1,
    value: 0.1
  },
  {
    day: 6,
    hour: 2,
    value: 0.1
  },
  {
    day: 6,
    hour: 3,
    value: 0.1
  },
  {
    day: 6,
    hour: 4,
    value: 0.1
  },
  {
    day: 6,
    hour: 5,
    value: 0.1
  },
  {
    day: 6,
    hour: 6,
    value: 0.1
  },
  {
    day: 6,
    hour: 7,
    value: 0.1
  },
  {
    day: 6,
    hour: 8,
    value: 0.1
  },
  {
    day: 6,
    hour: 9,
    value: 0.1
  },
  {
    day: 6,
    hour: 10,
    value: 0.1
  },
  {
    day: 6,
    hour: 11,
    value: 0.1
  },
  {
    day: 6,
    hour: 12,
    value: 0.1
  },
  {
    day: 6,
    hour: 13,
    value: 0.1
  },
  {
    day: 6,
    hour: 14,
    value: 0.1
  },
  {
    day: 6,
    hour: 15,
    value: 0.1
  },
  {
    day: 6,
    hour: 16,
    value: 0.1
  },
  {
    day: 6,
    hour: 17,
    value: 0.1
  },
  {
    day: 6,
    hour: 18,
    value: 0.1
  },
  {
    day: 6,
    hour: 19,
    value: 0.5
  },
  {
    day: 6,
    hour: 20,
    value: 1
  },
  {
    day: 6,
    hour: 21,
    value: 0.1
  },
  {
    day: 6,
    hour: 22,
    value: 0.1
  },
  {
    day: 6,
    hour: 23,
    value: 0.1
  },
  {
    day: 6,
    hour: 24,
    value: 0.1
  },
  {
    day: 7,
    hour: 1,
    value: 0.1
  },
  {
    day: 7,
    hour: 2,
    value: 0.1
  },
  {
    day: 7,
    hour: 3,
    value: 0.1
  },
  {
    day: 7,
    hour: 4,
    value: 0.1
  },
  {
    day: 7,
    hour: 5,
    value: 0.1
  },
  {
    day: 7,
    hour: 6,
    value: 0.1
  },
  {
    day: 7,
    hour: 7,
    value: 0.1
  },
  {
    day: 7,
    hour: 8,
    value: 0.1
  },
  {
    day: 7,
    hour: 9,
    value: 0.1
  },
  {
    day: 7,
    hour: 10,
    value: 0.1
  },
  {
    day: 7,
    hour: 11,
    value: 0.1
  },
  {
    day: 7,
    hour: 12,
    value: 0.1
  },
  {
    day: 7,
    hour: 13,
    value: 0.1
  },
  {
    day: 7,
    hour: 14,
    value: 0.5
  },
  {
    day: 7,
    hour: 15,
    value: 0.1
  },
  {
    day: 7,
    hour: 16,
    value: 0.1
  },
  {
    day: 7,
    hour: 17,
    value: 0.1
  },
  {
    day: 7,
    hour: 18,
    value: 0.1
  },
  {
    day: 7,
    hour: 19,
    value: 0.1
  },
  {
    day: 7,
    hour: 20,
    value: 0.1
  },
  {
    day: 7,
    hour: 21,
    value: 0.1
  },
  {
    day: 7,
    hour: 22,
    value: 0.1
  },
  {
    day: 7,
    hour: 23,
    value: 0.1
  },
  {
    day: 7,
    hour: 24,
    value: 0.1
  },
  {
    day: 4,
    hour: 1,
    value: 0.1
  },
  {
    day: 4,
    hour: 2,
    value: 0.1
  },
  {
    day: 4,
    hour: 3,
    value: 0.1
  },
  {
    day: 4,
    hour: 4,
    value: 0.1
  },
  {
    day: 4,
    hour: 5,
    value: 0.1
  },
  {
    day: 4,
    hour: 6,
    value: 0.1
  },
  {
    day: 4,
    hour: 7,
    value: 0.1
  },
  {
    day: 4,
    hour: 8,
    value: 0.1
  },
  {
    day: 4,
    hour: 9,
    value: 0.1
  },
  {
    day: 4,
    hour: 10,
    value: 0.1
  },
  {
    day: 4,
    hour: 11,
    value: 0.1
  },
  {
    day: 4,
    hour: 12,
    value: 0.1
  },
  {
    day: 4,
    hour: 13,
    value: 0.1
  },
  {
    day: 4,
    hour: 14,
    value: 0.1
  },
  {
    day: 4,
    hour: 15,
    value: 0.1
  },
  {
    day: 4,
    hour: 16,
    value: 0.25
  },
  {
    day: 4,
    hour: 17,
    value: 0.1
  },
  {
    day: 4,
    hour: 18,
    value: 0.1
  },
  {
    day: 4,
    hour: 19,
    value: 0.1
  },
  {
    day: 4,
    hour: 20,
    value: 0.1
  },
  {
    day: 4,
    hour: 21,
    value: 0.1
  },
  {
    day: 4,
    hour: 22,
    value: 0.1
  },
  {
    day: 4,
    hour: 23,
    value: 0.1
  },
  {
    day: 4,
    hour: 24,
    value: 0.1
  },
  {
    day: 2,
    hour: 1,
    value: 0.1
  },
  {
    day: 2,
    hour: 2,
    value: 0.1
  },
  {
    day: 2,
    hour: 3,
    value: 0.1
  },
  {
    day: 2,
    hour: 4,
    value: 0.1
  },
  {
    day: 2,
    hour: 5,
    value: 0.1
  },
  {
    day: 2,
    hour: 6,
    value: 0.1
  },
  {
    day: 2,
    hour: 7,
    value: 0.1
  },
  {
    day: 2,
    hour: 8,
    value: 0.1
  },
  {
    day: 2,
    hour: 9,
    value: 0.1
  },
  {
    day: 2,
    hour: 10,
    value: 0.1
  },
  {
    day: 2,
    hour: 11,
    value: 0.1
  },
  {
    day: 2,
    hour: 12,
    value: 0.1
  },
  {
    day: 2,
    hour: 13,
    value: 0.1
  },
  {
    day: 2,
    hour: 14,
    value: 0.5
  },
  {
    day: 2,
    hour: 15,
    value: 0.1
  },
  {
    day: 2,
    hour: 16,
    value: 0.25
  },
  {
    day: 2,
    hour: 17,
    value: 0.1
  },
  {
    day: 2,
    hour: 18,
    value: 0.5
  },
  {
    day: 2,
    hour: 19,
    value: 0.1
  },
  {
    day: 2,
    hour: 20,
    value: 0.1
  },
  {
    day: 2,
    hour: 21,
    value: 0.1
  },
  {
    day: 2,
    hour: 22,
    value: 0.1
  },
  {
    day: 2,
    hour: 23,
    value: 0.1
  },
  {
    day: 2,
    hour: 24,
    value: 0.1
  },
  {
    day: 3,
    hour: 1,
    value: 0.1
  },
  {
    day: 3,
    hour: 2,
    value: 0.1
  },
  {
    day: 3,
    hour: 3,
    value: 0.1
  },
  {
    day: 3,
    hour: 4,
    value: 0.1
  },
  {
    day: 3,
    hour: 5,
    value: 0.1
  },
  {
    day: 3,
    hour: 6,
    value: 0.1
  },
  {
    day: 3,
    hour: 7,
    value: 0.1
  },
  {
    day: 3,
    hour: 8,
    value: 0.1
  },
  {
    day: 3,
    hour: 9,
    value: 0.1
  },
  {
    day: 3,
    hour: 10,
    value: 0.1
  },
  {
    day: 3,
    hour: 11,
    value: 0.1
  },
  {
    day: 3,
    hour: 12,
    value: 0.1
  },
  {
    day: 3,
    hour: 13,
    value: 0.1
  },
  {
    day: 3,
    hour: 14,
    value: 0.5
  },
  {
    day: 3,
    hour: 15,
    value: 0.1
  },
  {
    day: 3,
    hour: 16,
    value: 0.1
  },
  {
    day: 3,
    hour: 17,
    value: 0.5
  },
  {
    day: 3,
    hour: 18,
    value: 0.1
  },
  {
    day: 3,
    hour: 19,
    value: 0.1
  },
  {
    day: 3,
    hour: 20,
    value: 0.1
  },
  {
    day: 3,
    hour: 21,
    value: 0.1
  },
  {
    day: 3,
    hour: 22,
    value: 0.1
  },
  {
    day: 3,
    hour: 23,
    value: 0.1
  },
  {
    day: 3,
    hour: 24,
    value: 0.1
  }
]

export default heatMap
