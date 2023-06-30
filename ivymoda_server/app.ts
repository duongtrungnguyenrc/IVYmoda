import connection from "./connection";
import express, { Request, Response } from "express";
import cors from "cors";
import { model } from "mongoose";
import { productSchema } from "./schema";
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

async function server() {
  try {
    await connection();

    const Product = model("Product", productSchema);

    app.get("/product", async (req: Request, res: Response) => {
      const data = await Product.find().lean();
      res.send(data);
    });

    app.get("/new_items", async (req : Request, res : Response) => {
        const data = await Product.find({tag : "new"}).lean();
        const resData = [
            {
                type : "IVY moda",
                data : data.filter((value) => {
                    return value.type == "ladies"
                })
            },
            {
                type : "IVY men",
                data : data.filter((value) => {
                    return value.type == "men"
                })
            },
            {
                type : "IVY kid",
                data : data.filter((value) => {
                    return value.type == "kids"
                })
            }
        ]
        res.send(resData);
    })

    app.get("/best_seller_items", async (req : Request, res : Response) => {
        const data = await Product.find({tag : "best seller"}).lean();
        const resData = [
          {
              type : "IVY moda",
              data : data.filter((value) => {
                  return value.type == "ladies"
              })
          },
          {
              type : "IVY men",
              data : data.filter((value) => {
                  return value.type == "men"
              })
          },
          {
              type : "IVY kid",
              data : data.filter((value) => {
                  return value.type == "kids"
              })
          }
      ]
      res.send(resData);
    })

    app.post("/items", async (req : Request, res : Response) => {
      if (!req.body.type || !req.body.page || !req.body.quantityPerPage || !req.body.productGroup) {
        return res.status(400).send({message : "Missing required field"});
      }
      try {
        const count = await Product.countDocuments({
          type: req.body.type, 
          productGroup: req.body.productGroup,
        });
        
        const data = await Product.find({
                type : req.body.type, 
                productGroup : req.body.productGroup,
            }).skip((parseInt(req.body.page) - 1) * parseInt(req.body.quantityPerPage)).limit(parseInt(req.body.quantityPerPage)).lean();
  
        const response = {
            page : +req.body.page,
            totalPages: Math.ceil(count / parseInt(req.body.quantityPerPage)),
            quantity : +req.body.quantityPerPage,
            data : data
        }
        res.status(200).send(response);
      } catch (error) {
        console.log(error);
        res.status(500).send({log : error, message : "Internal Server Error"});
      }
    })

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

server();