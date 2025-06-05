import React from 'react'
import { SectionContainer } from './SectionContainer'
import { DefaultTitle } from './DefaultTitle'
import { ContactUsInput } from './ContactUsInput'
import { DefaultButton } from './DefaultButton'
import BannerContact from "../assets/images/banner_contact.png"

const contacts = [
    { type: "text", placeholder: "Name", required: false },
    { type: "tel", placeholder: "Phone Number*", required: true },
    { type: "email", placeholder: "E-mail*", required: true },
    { type: "text", placeholder: "Interested In", required: false },
    { type: "textarea", placeholder: "Message*", required: true },
];

export const ContactUs = () => {
    return (
        <SectionContainer>
            <DefaultTitle title="Contact Us" />
            <div className='mt-6 grid grid-cols-5 gap-10'>
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
                <div className='col-span-3'>
                    <img src={BannerContact} alt="" />
                </div>
            </div>
            <DefaultButton text="Send Email" className="mt-16" />
        </SectionContainer>
    )
}
