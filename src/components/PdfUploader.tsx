import React, { useCallback } from 'react';
import { FileUp } from 'lucide-react';
import { processPdfFile } from '../utils/pdfProcessor';

interface PdfUploaderProps {
  onPdfContent: (content: string) => void;
  disabled?: boolean;
}

export function PdfUploader({ onPdfContent, disabled }: PdfUploaderProps) {
  const handleFileChange = useCallback(async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const content = await processPdfFile(file);
        onPdfContent(content);
      } catch (error) {
        console.error('Error processing PDF:', error);
        alert('Error processing PDF file. Please try again.');
      }
    }
  }, [onPdfContent]);

  return (
    <div className="flex items-center gap-2">
      <label className={`
        flex items-center gap-2 px-4 py-2 rounded-lg
        bg-blue-500 text-white cursor-pointer
        hover:bg-blue-600 transition-colors
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
      `}>
        <FileUp className="w-5 h-5" />
        <span>Upload PDF</span>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          disabled={disabled}
          className="hidden"
        />
      </label>
    </div>
  );
}