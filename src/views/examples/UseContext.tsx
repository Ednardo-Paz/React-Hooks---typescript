import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { UserContext } from '../../data/Store'


const UseContext = () => {

    const { produto, setProduto } = useContext(UserContext);

    useEffect(() => {
        setProduto("teste")
    })

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title='Exercício #01' />
            <div className="center">
                <span className='text'>{produto}</span>
            </div>
        </div>
    )
}

export default UseContext
