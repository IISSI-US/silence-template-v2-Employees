
    // DO NOT EDIT THIS FILE, it is auto-generated. It will be updated automatically.
    // All changes done to this file will be lost upon re-running the 'silence createapi' command.
    // If you want to create new API methods, define them in a new file.
    // Silence is a DEAL research team project, more info about us in https://deal.us.es

    'use_strict';
    
    import { BASE_URL, requestOptions } from './common.js';
    
    const employeesAPI_auto ={

    /**
    * Gets all employees
    */
    getAll:async function(){
        let response = await axios.get(`${BASE_URL}/employees`,requestOptions);
        return response.data;
    },

    /**
    * Gets an entry from 'employees' by its primary key
    */
    getById:async function(employeeId){
        let response = await axios.get(`${BASE_URL}/employees/${employeeId}`,requestOptions);
        return response.data[0];
    },

    /**
    * Creates a new entry in 'employees'
    */
    create:async function(formData, ){
        let response = await axios.post(`${BASE_URL}/employees`,formData, requestOptions);
        return response.data;
    },

    /**
    * Updates an existing entry in 'employees' by its primary key
    */
    update:async function(formData, employeeId){
        let response = await axios.put(`${BASE_URL}/employees/${employeeId}`,formData, requestOptions);
        return response.data;
    },

    /**
    * Deletes an existing entry in 'employees' by its primary key
    */
    delete:async function(employeeId){
        let response = await axios.delete(`${BASE_URL}/employees/${employeeId}`,requestOptions);
        return response.data;
    },
};

export {employeesAPI_auto};