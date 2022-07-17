const mysql = require("mysql");
const employees = require("../queries/employees");

const mysqlConfig = {
    host : "localhost",
    user: "root",
    password: "password",
    database: "bestbuy",
};

const Connection = mysql.createPool(mysqlConfig);

const Query = (query,values) => {
    return new Promise((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if (err) reject(err);
            resolve(results);
        });
    });

};

export default { Query, employees };
import{ Query } from "../models";

const allEmployees = async () => {
    return Query ("SELECT EmployeeID, FirstName, LastName, Title FROM employees");
}
const oneEmployees = async (id) => {
    return Query ("SELECT EmployeeID, FirstName, LastName, Title FROM employees", [
        id,
    ]);
};
const addEmployees = async (body) => {
  return Query("INSERT INTO employees SET ?", [body]);  
};
const updateEmployees = async (body, id) => {
    return Query("UPDATE employees SET ? WHERE EmployeeID = ?", [body, id]);
};

const removeEmployees = async (id) => {
    return Query("DELETE FROM employees WHERE EmployeeID = ?", [id]);
};

export default {
    allEmployees,
    oneEmployee,
    addEmployee,
    updateEmployee,
    removeEmployee, 

};