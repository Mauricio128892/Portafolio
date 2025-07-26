// src/components/Blogs.jsx
import React from 'react';

const Blogs = () => {
  return (

    <section id="blogs" className="py-20 px-4 md:px-8 lg:px-16 bg-black text-white relative z-10">
 
      <div className="w-full h-8 bg-wood-separator absolute top-0 left-0"></div>

      <div className="max-w-4xl mx-auto"> 
 
        <h2 className="text-5xl md:text-6xl font-pirata-one text-amber-500 text-center mb-12">
          Blogs
        </h2>

     
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-metal-mania text-amber-500 mb-2">Blog 1</h3>
            <p className="text-lg leading-relaxed text-white">Aquí va el contenido del Blog 1.</p>
          </div>

         
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-metal-mania text-amber-500 mb-2">Blog 2</h3>
            <p className="text-lg leading-relaxed text-white">Aquí va el contenido del Blog 2.</p>
          </div>

         
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-metal-mania text-amber-500 mb-2">Blog 3</h3>
            <p className="text-lg leading-relaxed text-white">Aquí va el contenido del Blog 3.</p>
          </div>
        </div>
      </div>


      <div className="w-full h-8 bg-wood-separator absolute bottom-0 left-0"></div>
    </section>
  );
};

export default Blogs;
