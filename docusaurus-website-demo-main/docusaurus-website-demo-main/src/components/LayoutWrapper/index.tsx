import React from 'react';
import Layout from '@theme/Layout';
import type {WrapperProps} from '@theme/Layout';

// A wrapper component that adds additional functionality to the base Layout
export default function LayoutWrapper(props: WrapperProps): JSX.Element {
  return (
    <Layout {...props}>
      {/* Add any additional layout elements here if needed */}
      {props.children}
    </Layout>
  );
}