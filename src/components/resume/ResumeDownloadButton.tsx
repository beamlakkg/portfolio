import React from 'react';
import { Download } from 'lucide-react';
import { RESUME_PDF_URL } from '../../data/resume';

const ResumeDownloadButton: React.FC = () => {
  return (
    <div className="mb-16 flex justify-center">
      <a
        href={RESUME_PDF_URL}
        download="Beamlak_Kagnew_Resume.pdf"
        className="inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-slate-900 px-7 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg dark:border-white dark:bg-white dark:text-slate-900 dark:hover:shadow-xl"
        aria-label="Download resume as PDF"
      >
        <Download size={18} />
        Download Resume
      </a>
    </div>
  );
};

export default ResumeDownloadButton;
