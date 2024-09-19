import "./Product.css";

function Product({ features, title, price }) {
  // console.log(features);
  // const list = );
  if(price>30000){
   return (
    <div className="Product">
     
      <h2>{title}</h2>
      <h3>price: {price}</h3>
      <p>discount of 5%</p>
    </div>
  );
} 
   else{
    return (
        <div className="Product">
         
          <h2>{title}</h2>
          <h3>price: {price}</h3>
         </div>
      );
  }
}
export default Product;
