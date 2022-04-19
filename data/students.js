const students = [
    {student: 'Brian Smith', done: true},
    {todo: 'Learn Express', done: false},
    {todo: 'Buy Milk', done: false}
  ];
  
  module.exports = {
    getAll: function() {
      return students;
    }
  };