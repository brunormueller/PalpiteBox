import React from "react";
import Link from "next/link";
import useSWR from "swr";
import PageTitle from "../components/PageTitle";

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
    const { data, error } = useSWR('/api/get-promo', fetcher)

    return (
        <div>
            <PageTitle title='Bem vindo'></PageTitle>
            <p className="mt-6 text-center">
                O restaurante X sempre busca por atender melhor seus clientes. <br />
                Por isso estamos sempre abertos a ouvir sua opinião</p> <br />

            <div className="text-center my-12 ">
                <Link href=''>
                    <a className='bg-blue-500 px-12 hover:shadow-md py-4 font-bold rounded-lg shadow-lg'> Dar opinião ou sugestão</a>
                </Link>

            </div>
            {!data && <p>Carregando...</p>}
            {data && data.showCoupon  &&
                <p className="my-6 text-center">
                    {data.message}.</p>
            }
        </div>
    )
}

export default Index