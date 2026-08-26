import { useState } from 'react';
import CadastroAluno from './components/CadastroAluno';
import ListaAlunos from './components/ListaAlunos';

function App() {
  const [refresh, setRefresh] = useState(0);

  return (
    <div className="App">
      <CadastroAluno onCadastro={() => setRefresh(r => r + 1)} />
      <ListaAlunos key={refresh} />
    </div>
  );
}
export default App;