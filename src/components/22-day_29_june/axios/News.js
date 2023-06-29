// import axios from 'axios'
// import React from 'react'
// import { useState } from 'react';
// import { useEffect } from 'react'

// export default function News() {
//     const [imageData, setImageData] = useState([]);
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//               const response = await axios.get('https://newsapi.org/v2/top-headlines?q=tesla&from=2023-05-29&sortBy=publishedAt&apiKey=fa10b28af04b49ec81f88a51d60ad431');
//               const result = await response.json();   
//               setImageData(result.data.articles);
//             } catch (error) {
//               console.log(error);
//             }
//           };
      
//           fetchData();
//     },[])
    
//   return (  
//     <div className="col-md-4">
//         {imageData.map((image, index) => (
//         <img key={index} src={image.urlToImage} alt={`Image ${index}`} />
//       ))}
//     </div>
//   )
// }
import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function News() {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-05-29&sortBy=publishedAt&apiKey=fa10b28af04b49ec81f88a51d60ad431');
        setImageData(response.data.articles);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    < >
      {/* {imageData.map((article, index) => (
        // <img key={index} src={article.urlToImage} alt={`Image ${index}`} />
        <img
        key={index}
        src={!article.urlToImage
            ? "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif"
            : article.urlToImage
        }
        className="card-img-top col-md-4 "
        alt="..."
      />
      ))} */}





      
      {imageData.map((article, index) => (
       <div className="row justify-content-evenly mt-5 " key={index}>
       <div className="col-md-3 mb-5">
         <div className="card" >
           <div className="card-body">
             <img 
               src={!article.urlToImage ? 'https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif' : article.urlToImage}
               className=""
               alt="..."
             />
             <h5 className="card-title">{article.title}</h5>
             <p className="card-text">
               {article.description}
             </p>
             <a href={article.url} className="btn btn-primary">
              Read More
             </a>
           </div>
         </div>
       </div>
     </div>
    
    ))}
    </>
  );
}
