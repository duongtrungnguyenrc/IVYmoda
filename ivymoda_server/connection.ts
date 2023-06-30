const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
// const main = async () => {
//     try {
//         await mongoose.connect(process.env.DATABASE_CONNECTION_STRING);
//         console.log("Connected to MongoDB");

//         const productSchema = new mongoose.Schema({
//             productId: String,
//             type: String,
//             productGroup: String,
//             productName: String,
//             description: String,
//             colorOptions: Array,
//             sizeOptions: Array,
//             basePrice: Number,
//             salePrice: Number,
//             inStock: Number,
//             preserveDetail: String,
//         });

//         const Product = mongoose.model('Product', productSchema);

//         const data = await Product.find({});
//         return data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }

const createConnection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_CONNECTION_STRING);
        console.log("Connected to MongoDB");
        return mongoose;
    } catch (error) {
      console.log(error);
      return null;
    }
}
export default createConnection;
