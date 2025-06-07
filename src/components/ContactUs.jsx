import { SectionContainer } from './SectionContainer'
import { DefaultTitle } from './DefaultTitle'
import { ContactUsInput } from './ContactUsInput'
import { DefaultButton } from './DefaultButton'
import BannerContact from "../assets/images/banner_contact.webp"

const contacts = [
    { type: "text", placeholder: "Nombre", required: false },
    { type: "tel", placeholder: "Teléfono*", required: true },
    { type: "email", placeholder: "Correo electrónico*", required: true },
    { type: "text", placeholder: "Interesado en", required: false },
    { type: "textarea", placeholder: "Mensaje*", required: true },
];

export const ContactUs = () => {
    return (
        <SectionContainer>
            <DefaultTitle title="Contáctanos" />
            <div className='mt-6 grid grid-cols-1  md:grid-cols-5 gap-10'>
                <form className='col-span-2 flex flex-col items-start gap-4'>
                    {contacts.map((contact, index) => (
                        contact.type === "tel" ? (
                            <ContactUsInput
                                key={index}
                                type={contact.type}
                                placeholder={contact.placeholder}
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            />
                        ) : (
                            <ContactUsInput
                                key={index}
                                type={contact.type}
                                placeholder={contact.placeholder}
                            />
                        )
                    ))}
                </form>
                <div className='hidden md:block md:col-span-3'>
                    <img src={BannerContact} alt="" />
                </div>
            </div>
            <DefaultButton text="Enviar correo" className="mt-8" />
        </SectionContainer>
    )
}
