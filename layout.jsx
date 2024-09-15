import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <header className="bg-primary text-primary-foreground py-4">
        <h1 className="text-3xl font-heading">My Application</h1>
      </header>
      <main>{children}</main>
      <footer className="bg-secondary text-secondary-foreground py-4">
        <p>© 2024 My Application</p>
      </footer>
    </div>
  );
};

export default Layout;
