import Router from 'next/router';
import React, { Component } from 'react';
import createLoginUrl from '../utils/url-helper';
import Layout from './Layout';

export default class RedirectToLogin extends Component {
  componentDidMount(): void {
    window.location.assign(createLoginUrl(Router.pathname));
  }

  render(): React.ReactElement {
    return (
      <Layout loading={true}>
        <div>Signing you in...</div>
      </Layout>
    );
  }
}
