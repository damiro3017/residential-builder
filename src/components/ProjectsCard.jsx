import { DefaultText } from "./DefaultText"
import { DefaultButton } from "./DefaultButton"

export const ProjectsCard = ({ image, title, description, path }) => {
    return (
        <div className="flex bg-gray-100">
            <img
                className="w-full h-full object-cover aspect-[4/3] flex-1"
                src={image}
                alt=""
            />
            <div className="flex-1 p-8 flex flex-col items-start">
                <h3
                    className="text-5xl text-gray-400 font-light capitalize"
                >
                    {title}
                </h3>
                <DefaultText className="mt-4">
                    {description}
                </DefaultText>
                <DefaultButton text="Ver proyecto" className="mt-auto" to={path} />
            </div>
        </div>
    )
}
