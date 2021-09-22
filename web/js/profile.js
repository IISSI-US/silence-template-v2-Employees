"use strict";

import { sessionManager } from './utils/session.js';
import { messageRenderer } from './renderers/messages.js';

import { employeesAPI } from '/js/api/employees.js';
import { employeeRenderer } from '/js/renderers/employees.js';

import { departmentsAPI_auto } from '/js/api/departments_auto.js';
import { employeesAPI_auto } from '/js/api/employees_auto.js';



// DOM elements that we will use
const employeeCont = document.getElementById("employee");


// Main function that will run when the page is ready
function main() {
    // Hide the options that shouldnt be available for not logged users
    setLoggedOptions();

    // Load the logged employee
    employeesAPI.getLogged()
        .then(employee => {
            let emp = employee[0]
            let promise_list = []
            let boss = null;
            let dept = null;

            if (emp.bossId != null){
                let boss_p = employeesAPI_auto.getById(emp.bossId)
                .then(_boss => {
                    console.log(_boss)
                    boss = _boss;
                })
                promise_list[0] = boss_p;
            }

            if (emp.departmentId != null){
                let dept_p = departmentsAPI_auto.getById(emp.departmentId)
                .then(_dept =>{
                    console.log(_dept)
                    dept = _dept
                })
                promise_list[1] = dept_p;
            }

            Promise.allSettled(promise_list)
            .then( _ => {
                let logged = employeeRenderer.asProfile(emp, boss, dept);
                employeeCont.innerHTML = logged;
            }) 

            
        })
        .catch(error => messageRenderer.showMessageAsAlert(error));
}

document.addEventListener("DOMContentLoaded", function () {
    main();
});

///////////

function setLoggedOptions() {
    // Hide the things that shouldnt be available for non authenticated users
    if (!sessionManager.isLogged()) {
        newDpmtButton.style.display = "none";
    }
}