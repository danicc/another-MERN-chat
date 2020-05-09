import React from 'react';

import { Header } from '../';

const PageLayout: React.FC = ({ children }) => {
  return (
    <div>
      <Header title="Another React Chat" />
      {children}
    </div>
  );
};

export default PageLayout;
