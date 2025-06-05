import { SectionContainer } from "../components/SectionContainer"
import { DefaultTitle } from "../components/DefaultTitle"
import Maps from "../assets/images/maps.png"

const CONTACT = [
  { title: "Company Name", contact: "1234 Sample Street Austin Texas 76401", },
  { title: "Phone", contact: "512 - 333 - 2222", },
  { title: "Email", contact: "sampleemail@gmail.com", }
]


export const Contacts = () => {
  return (
    <SectionContainer>
      <div className="flex gap-8">
        <div className="flex-1">
          <DefaultTitle title="Contact" subtitle="Information" />
          {CONTACT.map((e) => (
            <ul>
              <p className="font-bold mt-8">{e.title}</p>
              <p>{e.contact}</p>
            </ul>
          ))}
        </div>
        <div className="flex-2">
          <img
            className="w-full object-cover"
            src={Maps}
            alt=""
          />
        </div>
      </div>
    </SectionContainer>
  )
}
