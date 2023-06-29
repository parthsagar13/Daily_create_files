import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImageData } from './redux';

export default function Parth() {
  const dispatch = useDispatch();
  const imageData = useSelector((state) => state.news.imageData);
  const status = useSelector((state) => state.news.status);
  const error = useSelector((state) => state.news.error);


  useEffect(() => {
    dispatch(fetchImageData());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {imageData.map((article, index) => (
        <div className="row justify-content-evenly mt-5" key={index}>
          <div className="col-md-3 mb-5">
            <div className="card">
              <div className="card-body">
                <img
                  src={
                    !article.urlToImage
                      ? 'https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif'
                      : article.urlToImage
                  }
                  className=""
                  alt="..."
                />
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
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
