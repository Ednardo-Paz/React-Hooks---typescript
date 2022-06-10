import React, { useMemo, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle';


function soma(a: number, b: number) {
  const future = Date.now() + 1000
  while (Date.now() < future) { }
  return a + b;
}

const UseMemo = () => {
  const [n1, setN1] = useState<any>(0)
  const [n2, setN2] = useState<any>(0)
  const [n3, setN3] = useState<any>(0)

  const resultado = useMemo(() => soma(n1 as number, n2 as number), [n1, n2])



  return (
    <div className="UseMemo">
      <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memoizado!" />
      <div className='center'>
        <input type="number" className='input' onChange={e => setN1(+e.target.value)} />
        <input type="number" className='input' onChange={e => setN2(+e.target.value)} />
        <input type="number" className='input' onChange={e => setN3(+e.target.value)} />
        <span className='text'>{resultado}</span>
      </div>

    </div>
  );
};

export default UseMemo;
