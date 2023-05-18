
import productMassage from "../models/ProductMassage.js";

export const getProduct = async (req ,res)=> {
    try{
      const { id } = req.params;
      const product = await productMassage.findById(id);
      // console.log("------->"+product);

    //   console.log(productMassage);
    // const productMassage = {
    //   id:1,
    //   name:'DASEEN Gaming Computer PC Desktop – Intel Core i3-10100 3.6GHz, NVIDIA GeForce GTX1660 6GB, 32GB DDR4-2666 RAM, 500GB SSD, Windows 10,WiFi Ready',
    //   image:'https://m.media-amazon.com/images/I/619f09kK7tL._AC_UF894,1000_QL80_.jpg',
    //   price:21060.0,
    //   average_rating:3,
    //   favourite:true,
    //   alert:true,
    //   techSpecs:[
    //     ['CPU','Apple CPU (4-core graphics)'],
    //     ['RAM','4 GB'],
    //     ['brand','Apple'],
    //     ['Color','White'],
    //     ['Battery','Yes, with A-GPS, GLONASS, GALILEO, QZSS'],
    //     ['Chipset','Apple A13 Bionic (7nm+)'],
    //     ['SIM card','single SIM'],
    //     ['Bluetooth','5.0, A2DP,LE'],
        
    //   ]
      
    // }
      res.status(200).json(product);
    } catch(error){
        res.status(401).json({message : error.message});
    }
}
export const createProduct = (req ,res)=> {
   const body = req.body;
    try {
        
    } catch (error) {
        
    }
  }
    export const favProduct = async (req ,res)=> {
    const { id } = req.params;
    // if(!req.userId){
    //   return res.json({message:"not auth"});
    // } 
    // if(!mongoose.Types.ObjectID.isValid(id)){
    //   return res.json({message:"no products with this id"});
    // }
    const product  = await productMassage.findById(id);

       try {
          product.favourite= !product.favourite;
          const updatedProduct = await productMassage.findByIdAndUpdate(id,product,{new:true})
          console.log(updatedProduct)
          res.json(updatedProduct);
       } catch (error) {
       res.json(error.message);    
       }
       
}
export const alertProduct = async (req ,res)=> {
  const { id } = req.params;
  // if(!req.userId){
  //   return res.json({message:"not auth"});
  // } 
  // if(!mongoose.Types.ObjectID.isValid(id)){
  //   return res.json({message:"no products with this id"});
  // }
  const product  = await productMassage.findById(id);

     try {
        product.alert= !product.alert;
        const updatedProduct = await productMassage.findByIdAndUpdate(id,product,{new:true})
        console.log(updatedProduct)
        res.json(updatedProduct);
     } catch (error) {
     res.json(error.message);    
     }
     
}
export const revProduct = async (req ,res) => {
        const { id } = req.params;
        const { value } = req.body;
        const product = await productMassage.findById(id);
        
        product.reviews.push(value);
        // product.average_rating =+value.rate/product.reviews.length;  
        const updatedProduct = await productMassage.findByIdAndUpdate(id,product,{new:true})
        console.log(updatedProduct)
        res.json(updatedProduct);
}