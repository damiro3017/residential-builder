import { SectionContainer } from './SectionContainer'
import { DefaultTitle } from './DefaultTitle'
import { MainFocusNumber } from './MainFocusNumber'
import { DefaultText } from './DefaultText'

const mission = [
    { info: "Brindar soluciones residenciales innovadoras que mejoren la calidad de vida de nuestros clientes, priorizando la eficiencia, la sostenibilidad y la atención personalizada." },
    { info: "Fomentar relaciones de confianza a largo plazo mediante un servicio transparente, profesional y comprometido con la excelencia en cada proyecto." }
]

export const MainFocus = () => {
    return (
        <SectionContainer>
            <DefaultTitle title="Misión" />
            <article className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-20'>
                {mission.map((e, index) => (
                    <div key={index} className='flex gap-4 items-start mt-8'>
                        <MainFocusNumber text={(index + 1).toString()} />
                        <DefaultText className="text-lg">{e.info}</DefaultText>
                    </div>
                ))}
            </article>
        </SectionContainer>
    )
}