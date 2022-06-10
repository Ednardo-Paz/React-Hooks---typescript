import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


function calcFatorial(num: number): number {
    const n = num
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n - 1) * n
}

function parOuImparFunc(n: number) {
    if (n % 2 === 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}


const UseEffect = () => {
    const [numero, setNumero] = useState<number>(1)
    const [fatorial, setFatorial] = useState<number>(1)
    const [numeroParOuImpar, setNumeroParOuImpar] = useState<number>(0)
    const [parOuImpar, setParOuImpar] = useState<string>('Par')

    useEffect(() => {
        setParOuImpar(parOuImparFunc(numeroParOuImpar))
    }, [numeroParOuImpar])

    useEffect(() => {
        setFatorial(calcFatorial(numero))
    }, [numero])
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title='Exercío 01' />
            <div className="center">
                <div>
                    <span className='text'>Fatorial:</span>
                    <span className='text red'>{fatorial}</span>
                </div>
                <input type="number" value={numero} onChange={(e) => setNumero(+e.target.value)} className="input" />
            </div>
            <SectionTitle title='Exercío 02' />
            <div className="center">
                <div>
                    <span className='text'>Par ou Impar:</span>
                    <span className='text red'>{parOuImpar}</span>
                </div>
                <input type="number" value={numeroParOuImpar} onChange={(e) => setNumeroParOuImpar(+e.target.value)} className="input" />
            </div>

        </div>
    )
}

export default UseEffect
