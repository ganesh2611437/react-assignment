import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor: React.FC = () => {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const savedContent = localStorage.getItem('richTextContent');
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  const handleChange = (value: string) => {
    setContent(value);
    localStorage.setItem('richTextContent', value);
  };

  return (
    <ReactQuill
      value={content}
      onChange={handleChange}
      modules={modules}
      formats={formats}
      theme="snow"
      placeholder="Write something..."
    />
  );
};

const modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'},
     {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ]
};

const formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'video'
];

export default RichTextEditor;
