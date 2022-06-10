import { useContext } from 'react';
import PageTitle from '../../components/layout/PageTitle'
import { UserContext } from '../../data/Store';



const UseReducer = () => {
    const { counter, dispatch, userName, Logar } = useContext(UserContext)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                <span className="text">O contador é <span>{counter}</span></span>
                <div>
                    <button onClick={() => { dispatch({ type: "increment" }) }} className="btn">+</button>
                    <button onClick={() => { dispatch({ type: "decrement" }) }} className="btn">-</button>
                    <input type="text" value={userName} onChange={ev => {
                        dispatch({ type: "updateName", name: ev.target.value })
                    }} className="input" />
                </div>
                <button onClick={Logar} className="btn">Logar</button>
                <button onClick={() => dispatch({ type: "resetState" })} className="btn">Resetar Tudo</button>
            </div>
        </div>
    )
}

export default UseReducer
