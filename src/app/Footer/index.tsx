import Image from 'next/image'
import logo from '../assets/codever.png'

export default function Footer() {
    return (
        <footer className="px-8 py-4 flex flex-col gap-4 items-center">
            <h1 className="text-titulo text-4xl font-bold text-center">Solicite um contato</h1>
            <span className="text-darkText text-center leading-relaxed max-w-[329px]">Deixe o seu e-mail para contato e retornaremos com nossas soluções.</span>
            <div className="mt-6 gap-2 flex flex-col s20:flex-row">
                <input className="rounded-md p-4 placeholder:text-darkText font-bold text-darkText" type="text" placeholder="Insira seu e-mail" />
                <a href="" className="px-8 py-4 font-bold bg-darkText text-center text-white rounded-lg">Solicitar contato</a>
            </div>
            <p className='flex gap-1 items-center text-darkText'><a href="/"><Image className='w-8 rounded-sm' src={logo} alt="Logo" /></a><span className='text-titulo font-bold'>Codever Group</span> &copy; 2023</p>
        </footer>
    )
}