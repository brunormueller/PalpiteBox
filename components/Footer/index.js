import React from "react";

const Footer = () => {
    return (
        <div className="bg-gray-700 p-4">
            <div className="container mx-auto text-center font-bold text-white">
                Projeto Desenvolvido Por: Bruno Mueller |
                <a className="px-2 hover:underline" href="https://github.com/brunormueller">GitHub</a> |
                <a className="px-2 hover:underline"href="https://linkedin.com/in/brunormueller">Linkedin</a>
           <div className="mt-3">
            <img className="inline p-4" src="/logo_semana_fsm.png"></img>
            <img className="inline p-4" src="/logo_devpleno.png"></img>
            </div>
        </div>
        </div>
    )
}
export default Footer