import React, { useState, useEffect } from 'react';

import './AccessCode.css';

const AccessCode = () => {
    const inputs = Array.from({length: 6}, (_, i) => i);
    const [typedCode, settypedCode] = useState([]);
    const [showList, setShowList] = useState(false);

    const setInput = (el) => {
        
        if(el) {
            const index = el.name;
            inputs[index] = el;
        }
    }

    const handleInput = (e) => {
        const {name, value} = e.target
        const index = parseInt(name, 10);
        const nextIndex = index + 1;

        if(nextIndex !== inputs.length) {
            inputs[nextIndex].removeAttribute('disabled');
            inputs[nextIndex].focus();
        }

        settypedCode((state) => {
            return [...state, value]
        });
    };

    useEffect(() => {
        const checkCodeAcess = () => {
            const codeInput = typedCode;
            
            if(typedCode.length === 6) {
                if(codeInput.join('') === '123456') {
                    setShowList(true);
                    //localStorage.setItem('code', codeInput.join(''));
                } else {
                    inputs.forEach((item, i) => {
                        item.value = '';
                        
                        if(i !== 0) {
                            item.setAttribute('disabled', 'true');
                        }
                    });

                    settypedCode([]);
                }
            }
        }

        checkCodeAcess();
    }, [typedCode, inputs]);

    return(
        <>
        {typedCode}{showList}
            <div className="box-access-code bg-light p-4 mt-4 text-center">
                <h3 className="h3 font-weight-bold">Para visualizar os participantes do evento</h3>
                <p className="mt-2 text-info-card">Por favor insira o código recebido por e-mail</p>
                <form className="mt-4 mb-4 form-access-code" onSubmit={e => e.preventDefault()}>
                    {inputs.map((input, index) => {
                        return(
                            <input 
                            type="text" 
                            className="form-control--block"
                            key={index} 
                            name={index} 
                            ref={setInput}
                            disabled={index === 0 ? false : true}                                
                            onChange={handleInput} />
                            )
                        })
                    }
                </form>
                <p className="m-0">Não possui o código? <a href="/solicitar-chave-acesso" title="Solicitar código de acesso" className="link-info-card">Solicitar código de acesso</a></p>
            </div>
        </>
    )
}

export default AccessCode;