const express = require('express');
const app = express();
const port = 3000;

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

const courses = {
APT: ["APT2020: Computer Organisation", "APT1050: Database Systems", "APT2055: Hardware and Software Practicum", 
    "APT2080: Introduction to Software Engineering", "APT2060: Data Structures & Algorithms", "APT3010: Introduction to Artificial Intelligence",
    "APT3025: Applied Machine Learning", "APT3040: Object Oriented Design and Programming", "APT3050: Introduction to Project Management", "APT3090: Cryptography and Network Security"],

IST: ["IST2010: Computer Organization & Assembly Programming", "IST1025: Introduction to Programming", "IST2045: Introduction to Computer Networks", "BUS3010: Business Law", 
    "BUS3020: Production and Operations Management", "IST3005: Application of Social Media for Business", "IST3040: Digital Lab", "IST4040: Decision Analysis", "IST4060: Telecommunications and Networks", "MKT3010: Principles of Marketing"]
};

app.get('/', function (request, response) {
    response.render('home');
});

app.get('/results', (request, response) => {
    const program = request.query.program;
    const selectedCourses = courses[program] || [];
    response.render("results, { program, selectedCourses");
});

app.listen(port);
console.log('server is listening on port 3000');