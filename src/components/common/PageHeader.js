import React from 'react';
import { ArrowLeft } from 'lucide-react';

function PageHeader({ title, subtitle, onBack }) {
  return (
    <header className="page-header">
      <button className="back-btn" onClick={onBack}>
        <ArrowLeft size={24} />
      </button>
      <div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
}

export default PageHeader;