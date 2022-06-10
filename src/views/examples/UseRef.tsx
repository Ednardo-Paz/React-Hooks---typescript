import React, { useContext, useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { UserContext } from '../../data/Store'

const UseRef = () => {

    const { LOG_IN } = useContext(UserContext)


    console.log(LOG_IN);


    function merge(v1: any, v2: any) {
        return [...v1].map((e, i) => {
            return `${e} ${v2[i] || ''}`
        })
    }

    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');
    const count = useRef(0)
    const input1 = useRef<any>(null)
    const input2 = useRef<any>(null)
    useEffect(() => {
        count.current = count.current + 1
        input2.current.focus()
    }, [valor1])

    useEffect(() => {
        count.current = count.current + 1
        input1.current.focus()
    }, [valor2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title='Ecercício 01' />
            <div className="center">
                <div>
                    <span className="text">valor:</span>
                    <span className="text"> <>{merge(valor1, valor2)}</>[</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
            </div>
            <div className="center">
                <input ref={input1} type="text" value={valor1} onChange={e => setValor1(e.target.value)} className="input" />
            </div>
            <SectionTitle title='Ecercício 02' />
            <div className="center">
                <input ref={input2} type="text" value={valor2} onChange={e => setValor2(e.target.value)} className="input" />
            </div>

        </div>
    )
}

export default UseRef
