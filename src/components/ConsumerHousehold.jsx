import React from "react";

const ConsumerHousehold = ({ title, description, mainImage, products }) => {
 // Split products into groups of 5
 const productColumns = [];
 for (let i = 0; i < products.length; i += 5) {
   productColumns.push(products.slice(i, i + 5));
 }
 const filteredProducts = products.filter(product => product.image);
 return (
   <section className="p-6 md:p-12">
     <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
       {/* Text Content */}
       <div>
         <h2 className="text-3xl font-bold mb-4">{title}</h2>
         <p className="text-lg mb-6">{description}</p>
         
         {/* Product List */}
         <div className="mb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           {productColumns.map((column, colIndex) => (
             <ul key={colIndex} className="space-y-2">
               {column.map((product, index) => (
                 <li key={index} className="flex items-center gap-2">
                   <span className="text-orange-500 text-xl">✔</span>
                   <span className="text-lg">{product.name}</span>
                 </li>
               ))}
             </ul>
           ))}
         </div>
       </div>

       {/* Main Image */}
       <div className="flex justify-center">
         <img src={mainImage} alt="Main Product" className="w-full max-h-96 object-cover" />
       </div>
     </div>

     {/* Product Images */}
     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
       {filteredProducts.map((product, index) => (
         <div key={index} className="border p-2 flex justify-center items-center">
           <img
             src={product.image}
             alt={product.name}
             className="w-full h-40 object-cover"
           />
         </div>
       ))}
     </div>
   </section>
 );
};
export default ConsumerHousehold;