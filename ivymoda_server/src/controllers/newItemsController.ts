const newItemController = async (req : Request, res : Response) => {
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
                  return value.type == "kids"
              })
          }
      ]
    res.send(resData);
    } catch (error) {
      res.status(500).send({log : error, message : "Internal Server Error"});
    }
})