import React from 'react';
import Layout from '@theme/Layout';

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div style={{padding: '2rem', textAlign: 'center'}}>
        <p align="center">
  <img src="/img/nof.png" alt="conection" />
</p>
        <h1>Page Not Found</h1>
        <p>We could not find what you were looking for.</p>
        <p>Please contact the owner of the site that linked you to the original URL and let them know their link is broken.</p>
      </div>
    </Layout>
  );
}