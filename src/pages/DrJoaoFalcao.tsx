import React, { useEffect } from 'react';
import { EditorProvider } from '../context/EditorContext';
import { EditorToolbar } from '../components/EditorToolbar';
import { FalcaoLayout } from '../components/dr-joao-falcao/FalcaoLayout';

const DrJoaoFalcao = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Remodelação Glútea | Dr. João Falcão';
  }, []);

  return (
    <EditorProvider projectId="dr-joao-falcao">
      <FalcaoLayout />
      <EditorToolbar />
    </EditorProvider>
  );
};

export default DrJoaoFalcao;
