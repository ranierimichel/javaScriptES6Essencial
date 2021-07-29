const user = {
  firstName: 'Ranieri',
  midleName: 'Michel Alves',
  lasName: 'Silva'
}

// função retorna um novo usuario com um novo campo fullName. User n muda
function getUserWithFullName(user) {
  return {
    ...user,
    fullName: `${user.name} ${user.midleName} ${user.lasName}`
  }
}

const userWithFullName = getUserWithFullName(user)

console.log(user, userWithFullName)
console.log('---------------------')

// array de students
const students = [
  {
    name: 'Ranieri',
    grade: 10
  },
  {
    name: 'Lara',
    grade: 7
  },
  {
    name: 'Antonia',
    grade: 1
  }
]

// retorna só os aprovados array students n muda
function getApprovedStudents(studentsList) {
  return studentsList.filter(student => student.grade >= 7)
}

console.log('Lista de alunos:')
console.log(students)

console.log('\nAlunos aprovados:')
console.log(getApprovedStudents(students))
