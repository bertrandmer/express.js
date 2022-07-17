import express from "express";

const Router = express.Router();

router.get("/api/employees", (req, res, next) => {
    try {
      res.json("Employees");
    } catch (err) {
      next(err);
    }
  });
  
  router.get("/api/employees/:id", (req, res, next) => {
    try {
      res.json("Employee " + id);
    } catch (err) {
      next(err);
    }
  });
  const { allEmployees, oneEmployee } = require("../db/queries/employees");

  router.get("/api/employees", async (req, res, next) => {
    try {
      let data = await allEmployees();
      res.json(data);
    } catch (err) {
      next(err);
    }
  });
  
  router.get("/api/employees/:id", (req, res, next) => {
    try {
      let { id } = req.params;
      let data = await oneEmployees(id);
      res.json(data);
    } catch (err) {
      next(err);
    }
  });

  router.get("/api/employees/add", (req, res, next) => {
    try {
        res.json("Employee " + add);
      } catch (err) {
        next(err);
      }
  });

  router.get("/api/employees/update", (req, res, next) => {
    try {
        res.json("Employee " + update);
      } catch (err) {
        next(err);
      }
  });

  router.get("/api/employees/remove", (req, res, next) => {
    try {
        res.json("Employee " + remove);
      } catch (err) {
        next(err);
      }
  });

