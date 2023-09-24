import Image from "next/image";

import everton from '../assets/images/members/everton.jpg';
import robert from '../assets/images/members/robert.jpg';
import codever from '../assets/codever.png';

import {faDocker, faHtml5, faCss3, faReact, faNodeJs, faJs, faGit} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhp } from "@fortawesome/free-brands-svg-icons/faPhp";
import { faLaravel } from "@fortawesome/free-brands-svg-icons/faLaravel";
import { faFigma } from "@fortawesome/free-brands-svg-icons/faFigma";

export default function Members() {
    return (
        <section className="flex flex-col relative w-full items-center text-darkText py-8 px-0 gap-8 bg-white">
            <Image className="absolute w-96 opacity-10 z-0 rotate-12 top-28 right-1/3" src={codever} alt="" />
            <h1 className="text-titulo text-4xl font-bold text-center">Membros</h1>
            <div className="w-full flex px-40 z-10">
                <article className="flex w-full flex-row-reverse gap-4 justify-center s20:justify-end items-center">
                    <Image className="w-40 s20:w-80 rounded-full" src={everton} alt="Everton" />
                    <div className="">
                        <h3 className="font-bold text-darkText leading-tight text-xl text-end">Everton Gonçalves</h3>
                        <p className="max-w-[340px]">Everton é um dos fundadores da Codever e é especializado em criar sites incríveis e garantir que funcionem perfeitamente em qualquer lugar.</p>
                        <div className="mt-2">
                            <h4 className="font-bold text-titulo">Tecnologias</h4>
                            <div className="flex gap-1">
                                <FontAwesomeIcon className="w-8" icon={faPhp} />
                                <FontAwesomeIcon className="w-8" icon={faFigma} />
                                <FontAwesomeIcon className="w-8" icon={faDocker} />
                                <FontAwesomeIcon className="w-8" icon={faCss3} />
                                <FontAwesomeIcon className="w-8" icon={faHtml5} />
                                <FontAwesomeIcon className="w-8" icon={faJs} />
                                <FontAwesomeIcon className="w-8" icon={faGit} />
                                <FontAwesomeIcon className="w-8" icon={faReact} />
                                <FontAwesomeIcon className="w-8" icon={faNodeJs} />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
            <div className="w-full flex px-40 z-10">
                <article className="flex w-full gap-4 justify-center s20:justify-end items-center">
                    <Image className="w-40 s20:w-80 rounded-full" src={robert} alt="Robert" />
                    <div className="">
                        <h3 className="font-bold text-darkText leading-tight text-xl text-start">Robert Gonçalves</h3>
                        <p className="max-w-[340px]">Robert é um dos fundadores da Codever, com uma especialização voltada para a infraestrutura que impulsiona os sites incríveis que a equipe cria. Ele é um mestre na configuração de servidores e na gestão dos bastidores dos sites.</p>
                        <div className="mt-2">
                            <h4 className="font-bold text-titulo">Tecnologias</h4>
                            <div className="flex gap-1">
                                <FontAwesomeIcon className="w-8" icon={faPhp} />
                                <FontAwesomeIcon className="w-8" icon={faLaravel} />
                                <FontAwesomeIcon className="w-8" icon={faCss3} />
                                <FontAwesomeIcon className="w-8" icon={faHtml5} />
                                <FontAwesomeIcon className="w-8" icon={faJs} />
                                <FontAwesomeIcon className="w-8" icon={faGit} />
                                <FontAwesomeIcon className="w-8" icon={faReact} />
                                <FontAwesomeIcon className="w-8" icon={faNodeJs} />
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}