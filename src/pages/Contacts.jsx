import { SectionContainer } from "../components/SectionContainer"
import { DefaultTitle } from "../components/DefaultTitle"
import Maps from "../assets/images/maps.webp"

const CONTACT = [
  { title: "Dirección", contact: "Av. Las Acacias 456, Austin, TX 78701" },
  { title: "Teléfono", contact: "+1 (512) 555-0198" },
  { title: "Correo electrónico", contact: "contacto@casasfamiliares.com" }
]

export const Contacts = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <DefaultTitle title="Contacto" subtitle="Conecta con nosotros" />
          <ul className="mt-6 space-y-6">
            {CONTACT.map((e, idx) => (
              <li key={idx}>
                <p className="font-bold text-brand-contrast">{e.title}</p>
                <p>{e.contact}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1">
          <img
            className="w-full h-full object-cover"
            src={Maps}
            alt="Ubicación en el mapa"
          />
        </div>
      </div>
    </SectionContainer>
  )
}
