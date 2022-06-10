import React from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

type DataType = {
  nome: string,
  sigla: string
}[] | null

type ResponseType = {
  data?: DataType,
  loading?: boolean
}
const UseCustom = () => {
  const { count, inc, dec } = useCounter();

  const url = "http://files.cod3r.com.br/curso-react/estados.json"
  const response: ResponseType = useFetch(url)


  return (
    <div className="UseCustom">
      <PageTitle
        title="Seu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />
      <SectionTitle title='Exercício 01' />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => inc()}>+1</button>
          <button className="btn" onClick={() => dec()}>-1</button>
        </div>
      </div>
      <SectionTitle title='Exercício 02' />
      <div className="center">
        <ul>
          {!response.loading ? response.data?.map(estado => (
            <li key={estado.nome}>{estado.nome}</li>
          )) : null}
        </ul>
      </div>
    </div>
  );
};

export default UseCustom;
