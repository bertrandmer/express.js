import { Query } from "../models";

const allProducts = async () => {
    return Query("SELECT ProductID, Name, Price, StockLevel FROM products");
  };
  
  const oneProducts = async (id) => {
    return Query("SELECT ProductID, Name, Price, StockLevel FROM products", [
      id,
    ]);
  };

  const addProducts = async (body) => {
    return Query("INSERT INTO products SET ?", [body]);
  };
  
  const updateProducts = async (body, id) => {
    return Query("UPDATE products SET ? WHERE ProductID = ?", [body, id]);
  };
  
  const removeProducts = async (id) => {
    return Query("DELETE FROM products WHERE ProductID = ?", [id]);
  };

  import express from "express";

const router = express.Router();

router.get("/api/products", (req, res, next) => {
  try {
    res.json("Products");
  } catch (err) {
    next(err);
  }
});

router.get("/api/products/:id", (req, res, next) => {
  try {
    res.json("Product " + id);
  } catch (err) {
    next(err);
  }
});

const { allProducts, oneProduct } = require("../db/queries/products");
router.get("/api/products", async (req, res, next) => {
  try {
    let data = await allProducts();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get("/api/products/:id", (req, res, next) => {
  try {
    let { id } = req.params;
    let data = await oneProducts(id);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get("/api/products/add", (req, res, next) => {
  try {
      res.json("Product " + add);
    } catch (err) {
      next(err);
    }
});

router.get("/api/products/update", (req, res, next) => {
  try {
      res.json("Product " + update);
    } catch (err) {
      next(err);
    }
});

router.get("/api/products/remove", (req, res, next) => {
  try {
      res.json("Product " + remove);
    } catch (err) {
      next(err);
    }
});
