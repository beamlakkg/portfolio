import React from 'react';

const ResumeHeader: React.FC = () => {
  return (
    <div className="mb-16 text-center">
      <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
        My Resume
      </h1>
      <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
        Software engineering graduate. A short record of the products, internships, and study behind the work.
      </p>
    </div>
  );
};

export default ResumeHeader;
