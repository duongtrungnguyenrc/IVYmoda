import connection from "./src/models/connection";
import express, { Request, Response } from "express";
import cors from "cors";
import { model } from "mongoose";
import { UserSchema, productSchema } from "./schema";
import bodyParser from "body-parser";
import Authorization from "./src/services/Authorization";
import dotenv from "dotenv";

import { authorization, itemsRequestController } from "./src/models/middleware";
import jwt from "jsonwebtoken";
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

async function server() {
  try {
    await connection();

    const Product = model("Product", productSchema);
    const User = model("User", UserSchema)

    app.get("/new_items", async (req : Request, res : Response) => {
        try {
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
                      return value.type == "kid"
                  })
              }
          ]
        res.send(resData);
        } catch (error) {
          res.status(500).send({log : error, message : "Internal Server Error"});
        }
    })

    app.get("/best_seller_items", async (req : Request, res : Response) => {
      try {
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
                  return value.type == "kid"
              })
          }
        ]
        res.status(200).send(resData);
      } catch (error) {
        res.status(500).send({log : error, message : "Internal Server Error"});
      }
    })

    app.post("/items", itemsRequestController, async (req : Request, res : Response) => {
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


    app.post("/login", async (req : Request, res : Response) => {
      try {
        const data = await User.findOne({email: req.body.email, password: req.body.password}, { _id: 0 });        
        if(data) {
          const authorization = new Authorization(process.env.SECRET_KEY as jwt.Secret);
          res.status(200).send({ token: authorization.generateToken({ data: data }), message: "successfully to login" });
        }
        else {
          res.status(401).send("failed");
        }
      } catch (error) {
        res.status(500).send(error)
      }
    })

    // app.post("/renewalToken", async (req : Request, res : Response) => {
    //   try {
    //     const authorization = new Authorization(process.env.SECRET_KEY as jwt.Secret);        
    //     const token = await authorization.renewalToken(req.body.oldToken);
    //     console.log(token);
        
    //     if(token) {
    //       res.status(200).send({ token: token, message: "successfully to renewal token" });
    //     }
    //     else {
    //       res.status(401).send("failed");
    //     }
    //   } catch (error) {
    //     res.status(500).send(error)
    //   }
    // })


    app.post("/checkLogin", async (req : Request, res : Response) => {      
      try {
        const authorization = new Authorization(process.env.SECRET_KEY as jwt.Secret);

        return res.status(200).send(authorization.verify(req.body.token));
      } catch (error) {
        res.status(400).send(error);
      }
    }) 


    app.listen(port, () => {
      console.log(`Server is running on port ${port}...`);
    });
  } catch (error) {
    console.error(error);
  }
}

server();