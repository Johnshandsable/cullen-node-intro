// module.exports
// means: here's the data I want to share

let allTheThingsWeWantToExport = {
  students: ['Michael', 'Dusty', 'George', 'Vada'],
  anotherName: 'John',
  addToStudents: function (randomName) {
    this.students.push(randomName);
  },
};

module.exports = allTheThingsWeWantToExport;
