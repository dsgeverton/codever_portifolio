import CardPortifolio from "@/components/CardPortifolio";

interface IImage {
    imageUrl: string;
    description: string;
    redirectUrl: string;
}

import ilus from '../assets/illustration.svg'
import psiluciana from '../assets/images/psiluciana.png'
import caAssessoria from '../assets/images/ca-assessoria.png'

export default function Portifolio() {
    const portifolios = [
        {
            imageUrl: psiluciana,
            description: 'Site estático para Psicóloga, utilizado como cartão de visitas e meio de contato.',
            redirectUrl: 'https://psiluciana.netlify.app/'
        }, {
            imageUrl: caAssessoria,
            description: 'Site para empresa de assessoria em informática e demais assuntos da área de T.I. lorem asdkasdasodmasodamsdoasdmasodmasodasmdoasdmaodasdmasodasdmasodmas',
            redirectUrl: 'https://ca-assessoria.vercel.app/'
        }, {
            imageUrl: ilus,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mattis arcu. Ut euismod tristique diam quis aliquam.',
            redirectUrl: 'https://google.com'
        }
    ];

    return (
        <main className="flex flex-col w-full items-center text-darkText py-16 px-8 gap-2 bg-white">
            <h1 className="text-[40px] text-center text-titulo font-bold leading-none">Deixe seu site conosco</h1>

            <span className="text-xl leading-snug max-w-[637px] text-center">
                A sua jornada online começa aqui! Deixe seu site conosco e transforme sua visão em realidade. Somos especialistas em criação de sites personalizados e otimizados para o sucesso digital. Descubra como podemos impulsionar sua presença na web hoje mesmo.
            </span>

            <div className="portifolio-cards flex justify-center gap-16 mt-14 w-full flex-wrap">
                {portifolios.map(
                    (item: IImage, key: number) =>
                    (<CardPortifolio
                        key={key}
                        imageUrl={item.imageUrl}
                        description={item.description}
                        redirectUrl={item.redirectUrl}
                    />)
                )}
            </div>
        </main>
    )
}