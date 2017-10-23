import React from 'react';

const footerStyle = {
  bottom: '0',
  width: '100%',
  height: '60px',
  background: '#f5f5f5',
  padding: '20px 0px',
  textAlign: 'center',
}

export default () => (
  <footer style={footerStyle}>
    <div class="container">
      <span class="text-muted">Classic declarative routing in React</span>
    </div>
  </footer>
)