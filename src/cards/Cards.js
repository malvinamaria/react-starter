/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

export const Cards = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row my-5">
          <div className="col-6">
            <div className="card">
              <div className="card-header">Headder</div>
              <div className="card-body">Lorem ipsum dolor sit amet.</div>
              <div className="card-footer text-muted">This is footer</div>
            </div>
          </div>
          <div className="col-6">
            <div className="card mb-4" style={{ 'max-width': '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://picsum.photos/200/300"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural.
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-4">
            <div className="card">
              <img
                src="https://picsum.photos/300/300"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">Lorem ipsum dolor sit amet.</div>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: '18rem' }}>
          <img
            src="https://picsum.photos/300/300"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div
              className="card text-bg-primary mb-3"
              style={{ 'max-width': '18rem' }}
            >
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div
              className="card text-bg-dark mb-3"
              style={{ 'max-width': '18rem' }}
            >
              <div className="card-header">Header</div>
              <div className="card-body">
                <h5 className="card-title">Primary card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // Lets have another row with colored card. This card is outside div */}
      <div className="row">
        <div className="col-3">
          <div
            className="card text-bg-danger mb-3"
            style={{ 'max-width': '18rem' }}
          >
            <div className="card-header">Header</div>
            <div className="card-body">
              <h5 className="card-title">Primary card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1> how to fix the sizing of the card properly</h1>

      <div className="container my-5">
        <div className="card">
          <img
            src="https://picsum.photos/500/500"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the cards content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
      <h1> wrap the card inside the row and column with grid </h1>
      <div className="container my-5">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <img
                src="https://picsum.photos/500/500"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text-white bg-secondary mb-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1> wrap the card inside the row and column with util </h1>
      <h2>
        No need to wrap the card with row and column just simply add w which
        means %
      </h2>
      <div className="container my-5">
        <div className="card w-75">
          <img
            src="https://picsum.photos/300/300"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the cards content popopopopo.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
