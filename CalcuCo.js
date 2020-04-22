var inquirer = require('inquirer');
var results = 0;
const showMenu = () => {
    inquirer
    .prompt([   
    {            
        name: 'num',
        type: 'input',
        message: 'Enter a number',
    }, {
        name: 'oper',
        type: 'list',
        message: 'Select Operation',
        choices: ['Add', 'Subtract', 'Multiply', 'Divide','Factorial'],
    }, {
        name: 'back',
        type: 'list',
        message: 'Go again?',
        choices: ['yes', 'no'],
    }
    ]).then((answers) => {
        if (results === "") {
        results = parseFloat(answers.num);
        }
        if (answers.oper === 'Add'){
         results = parseFloat(answers.num) + parseFloat(results);
        } else if (answers.oper ==='Subtract'){
         results = parseFloat(answers.num) - parseFloat(results);
        } else if (answers.oper ==='Multiply'){
                if (results === 0) {
         results = parseFloat(answers.num);
                } else {
         results = parseFloat(results) * parseFloat(answers.num);
                }
        } else if (answers.oper === 'Divide'){
                if (results ===0){
         results = parseFloat(answers.num);
                } else {
                results = parseFloat(results) / parseFloat(answers.num);
                }
                console.info(results);
                console.info(answers.num);
				       
        }
        if (answers.back === 'yes') {
   var cont = answers.back;
            return showMenu();
        } else{

        console.log(results);
        }


    })
    .catch((err) => {
        console.log(err);
    });
}

showMenu();