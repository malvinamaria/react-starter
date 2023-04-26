/* eslint-disable react/button-has-type */
import React from 'react';

export const Button = () => {
  return (
    <div>
      <h1>I am Button!</h1>
      <button type="button" className="btn btn-primary">
        click me!{' '}
      </button>
      <button>Click me</button>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary">
        Secondary
      </button>
      <button type="button" className="btn btn-success">
        Success
      </button>
      <button type="button" className="btn btn-danger">
        Danger
      </button>
      <button type="button" className="btn btn-warning">
        Warning
      </button>
      <button type="button" className="btn btn-info">
        Info
      </button>
      <button type="button" className="btn btn-light">
        Light
      </button>
      <button type="button" className="btn btn-dark">
        Dark
      </button>

      <button type="button" className="btn btn-link">
        Link
      </button>
      <div className="container">
        <button type="button" className="btn btn-outline-primary">
          Primary
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Secondary
        </button>
        <button type="button" className="btn btn-outline-success">
          Success
        </button>
        <button type="button" className="btn btn-outline-danger">
          Danger
        </button>
        <button type="button" className="btn btn-outline-warning">
          Warning
        </button>
        <button type="button" className="btn btn-outline-info">
          Info
        </button>
        <button type="button" className="btn btn-outline-light">
          Light
        </button>
        <button type="button" className="btn btn-outline-dark">
          Dark
        </button>
      </div>
      <div className="container my-5">
        <button type="button" className="btn btn-primary btn-lg">
          Large button
        </button>
        <button type="button" className="btn btn-primary btn">
          Regular button
        </button>
        <button type="button" className="btn btn-primary btn-sm">
          Small button
        </button>
      </div>
    </div>
  );
};
