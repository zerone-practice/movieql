export const people = [
  {
    id: 1,
    name: '영일',
    age: 21,
    gender: 'male'
  },
  {
    id: 2,
    name: '영이',
    age: 22,
    gender: 'female'
  },
  {
    id: 3,
    name: '영삼',
    age: 23,
    gender: 'male'
  },
  {
    id: 4,
    name: '영사',
    age: 24,
    gender: 'female'
  },
  {
    id: 5,
    name: '영오',
    age: 25,
    gender: 'male'
  },
  {
    id: 6,
    name: '영육',
    age: 26,
    gender: 'female'
  },
  {
    id: 7,
    name: '영칠',
    age: 27,
    gender: 'male'
  }
]

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === person.id)
  return filteredPeople[0]
}
//
// export const getByIds = (ids) => {
//   const filteredPeople =
// }
