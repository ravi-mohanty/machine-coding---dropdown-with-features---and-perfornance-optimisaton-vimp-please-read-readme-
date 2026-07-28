const employees = [
  { id: 5894, name: "Amit Sharma", salary: 103344 },
  { id: 3531, name: "Priya Patel", salary: 70731 },
  { id: 1231, name: "Rahul Gupta", salary: 89920 },
  { id: 2514, name: "Sneha Kumar", salary: 81035 },
  { id: 6410, name: "Vikram Singh", salary: 50859 },
  { id: 8302, name: "Ananya Reddy", salary: 45485 },
  { id: 8435, name: "Karan Mehta", salary: 93014 },
  { id: 8968, name: "Divya Iyer", salary: 48795 },
  { id: 2796, name: "Arjun Joshi", salary: 94248 },
  { id: 8332, name: "Neha Nair", salary: 46143 }
];

const updatedEmployees = employees.map(emp => ({
  ...emp,
  salary: emp.salary + 100
}));

console.log(updatedEmployees);