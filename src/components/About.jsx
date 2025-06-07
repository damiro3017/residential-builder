import { SectionContainer } from './SectionContainer';
import { DefaultTitle } from './DefaultTitle';
import { DefaultButton } from './DefaultButton';
import { DefaultText } from './DefaultText';

import About01 from '../assets/images/about_01.webp';
import About02 from '../assets/images/about_02.webp';
import About03 from '../assets/images/about_03.webp';

export const About = () => (
    <div>
        <SectionContainer className="flex flex-col md:flex-row  gap-16 px-16 
        bg-brand-alabaster">
            <div className="flex-1 flex items-center gap-6">
                <div className="flex flex-col gap-6">
                    <img src={About01} alt="" className="w-full h-auto" />
                    <img src={About02} alt="" className="w-full h-auto" />
                </div>
                <div>
                    <img src={About03} alt="" className="w-full h-full object-cover" />
                </div>
            </div>

            <div className="flex-1">
                <DefaultTitle title="Acerca de" />
                <DefaultText>
                    Creemos que el hogar es mucho más que una estructura: es el lugar donde nacen los recuerdos, crecen las familias y se construyen sueños. Nos especializamos en el desarrollo de comunidades residenciales que combinan diseño moderno, funcionalidad y entornos naturales cuidadosamente planificados.
                    <br /><br />
                    Con inspiración en el estilo de vida familiar estadounidense, nuestras viviendas ofrecen espacios amplios, jardines privados, calles tranquilas y áreas recreativas pensadas para el bienestar y la convivencia. Cada detalle está diseñado para brindar seguridad, confort y calidad de vida a quienes deciden llamarlas hogar.
                    <br /><br />
                    Más que construir casas, construimos hogares. Y más que crear proyectos, construimos comunidades.
                </DefaultText>
                <DefaultButton className="mt-12" text="Leer más" />
            </div>
        </SectionContainer>
    </div>
);
