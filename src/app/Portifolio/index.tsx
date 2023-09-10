import CardPortifolio from "@/components/CardPortifolio";

interface IImage {
    imageUrl: string;
    description: string;
    redirectUrl: string;
}

import ilus from '../assets/illustration.svg'

export default function Portifolio() {
    const portifolios = [
        {
            imageUrl: ilus,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mattis arcu. Ut euismod tristique diam quis aliquam.',
            redirectUrl: 'https://google.com'
        }, {
            imageUrl: ilus,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mattis arcu. Ut euismod tristique diam quis aliquam.',
            redirectUrl: 'https://google.com'
        }, {
            imageUrl: ilus,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mattis arcu. Ut euismod tristique diam quis aliquam.',
            redirectUrl: 'https://google.com'
        }, {
            imageUrl: ilus,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mattis arcu. Ut euismod tristique diam quis aliquam.',
            redirectUrl: 'https://google.com'
        }, {
            imageUrl: ilus,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mattis arcu. Ut euismod tristique diam quis aliquam.',
            redirectUrl: 'https://google.com'
        },{
            imageUrl: ilus,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mattis arcu. Ut euismod tristique diam quis aliquam.',
            redirectUrl: 'https://google.com'
        },{
            imageUrl: ilus,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mattis arcu. Ut euismod tristique diam quis aliquam.',
            redirectUrl: 'https://google.com'
        }
    ];

    return (
        <main className="flex flex-col w-full items-center text-darkText py-16 px-8 gap-2 bg-white">
            <h1 className="text-[40px] text-center text-titulo font-bold leading-none">Deixe seu site conosco</h1>

            <span className="text-xl leading-snug max-w-[637px] text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec mattis arcu. Ut euismod tristique diam quis aliquam.</span>

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