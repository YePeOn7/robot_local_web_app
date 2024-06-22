'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Input } from './ui/input';

const FileUploader: React.FC = () => {

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Input id="picture" type="file" />
    </div>
  );
};

export default FileUploader;
