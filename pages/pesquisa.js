import React, { useState } from "react";
import PageTitle from "../components/PageTitle";

const Pesquisa = () => {
    const [form, setForm] = useState({
        Nome: '',
        Email: '',
        Whatsapp: '',
        Nota: 0
    })
    const notas = [0,1,2,3,4,5]
    const [success, setSuccess] = useState(false)
    const [retorno, setRetorno] = useState({})
    const save = async () => {
      
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json()
            setSuccess(true)
            setRetorno(data)
        } catch (err) {

        }
    }

    const onChange = evt => {
        const value = evt.target.value
        const key = evt.target.name
        setForm(old => ({

            ...old,
            [key]: value
        }))
    }
    return (

        <div className="pt-6">
            <PageTitle title='Pesquisa'></PageTitle>
            
            <h1 className="text-center font-bold my-4 text-2xl">Criticas e sugestões</h1>

            <p className="mt-6 text-center mb-6">
                O restaurante X sempre busca por atender melhor seus clientes. <br />
                Por isso estamos sempre abertos a ouvir sua opinião</p>
            {!success && <div className="w-1/5 mx-auto ">
                <label className="font-bold">Seu nome:</label>
                <input className="bg-blue-100 p-3 block shadow-md my-3 rounded" type='text' onChange={onChange} name='Nome' value={form.Nome} />


                <label className="font-bold">Email:</label>
                <input className="bg-blue-100 p-3 block shadow-md my-3 rounded" type='text' onChange={onChange} name='Email' value={form.Email} />


                <label className="font-bold">Whatsapp:</label>
                <input className="bg-blue-100 p-3 block shadow-md my-3 rounded" type='text' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />

                <label className="font-bold">Sua crítica ou sugestão:</label>
                <input className="bg-blue-100 p-3 block shadow-md my-3 rounded" type='text' />
                <label className="font-bold">Nota:</label>
               <div className="flex py-6">
                {notas.map(nota=>{
            return( <label className="block w-1/6 text-center">
                 {nota} <br/>
                 <input type='radio' onChange={onChange} name='Nota' values={nota}>
                    </input>
                    </label>
                    )}
         )}
         </div>
        
               
                <button className="bg-blue-500 px-12 hover:shadow-md py-4 font-bold rounded-lg shadow-lg" onClick={save}>Salvar</button>
        
        
          
            </div>
            }
            {success && <div className="w-1/5 mx-auto ">
                <p className="mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">Obrigado por contribuir com sua sugestão ou crítica</p>
                {
                    retorno.showCoupon && <div className="mb-4 text-center border p-4 ">
                        Seu cupom: <br />
                        <span className="font-bold text-2xl"> {retorno.Cupom}</span>
                    </div>
                }
                
             
            
                {
                retorno.showCoupon && <div className="mb-4 text-center border p-4 ">

                    <span className="font-bold block mb-2 "> {retorno.Promo}</span>
                
                <br/>
                <span className="text-center italic">Tire um print ou print desta tela e apresente ao garçon.</span>
                </div>
                 }
        
        </div>}
            
        </div >

    )
}
export default Pesquisa