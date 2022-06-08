import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <>
          <div className="jumbotron jumbotron-fluid">
              <div className="container">
                  <h1 className="display-4">Coin wrapper</h1>
                  <p className="lead">This is a service to interact with the automatic wrapper exchange.</p>
              </div>
          </div>
          <div className="h-100 d-flex align-items-center justify-content-center bg-secondary">
              <div className="card text-white bg-dark">
                  <App></App>
            </div>
      </div>
          </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
