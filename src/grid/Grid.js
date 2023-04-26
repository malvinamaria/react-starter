/* eslint-disable react/style-prop-object */
import React from 'react';
import './Grid.css';

export const Grid = () => {
  return (
    <div>
      <h1>I am Grid!</h1>
      <div className="container-md border">
        <div className="row">
          <div className="col-4">Col 1</div> {/* 4/12 = 1/3 */}
          <div className="col-4">Col 2</div>
          <div className="col">Col 3 auto</div>
        </div>
      </div>
      <div className="container-md border">
        <div className="row">
          <div className="col-lg-8 col-md-6">Col A</div> {/* 8/12 = 2/3 */}
          <div className="col-lg-4 col-md-6">Col B</div>
        </div>
      </div>

      <div className="container border">
        <div className="row align-items-end" style={{ height: '500px' }}>
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
          <div className="col">One of three columns</div>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-2">One One</div>
            <div className="col-2">Two Two</div>
          </div>
        </div>
        <h2 className="text-center my-5">Gutter</h2>

        <div className="container my-5 ">
          <div className="row gx-1 gy-5">
            <div className="col-6">
              <div className="child">1</div>
            </div>
            <div className="col-6">
              <div className="child">2</div>
            </div>
            <div className="col-6">
              <div className="child">3</div>
            </div>
            <div className="col-6">
              <div className="child">4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// col-lg-8 col-md-6 means 8/12 of the width for large screens and 6/12 for medium screens
