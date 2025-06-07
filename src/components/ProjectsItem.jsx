import { useParams } from "react-router-dom"
import ProjectsData from "../data/ProjectsData";
import { SectionContainer } from "./SectionContainer";
import { DefaultTitle } from "./DefaultTitle";
import { DefaultText } from "./DefaultText";

export const ProjectsItem = () => {
    const { id } = useParams();
    const data = ProjectsData.find(item => item.id === Number(id));

    return (
        <SectionContainer>
            <DefaultTitle title={data.title} subtitle={data.subtitle} />
            <img
                className='w-full max-h-96 aspect-video object-cover mt-16'
                src={data.banner}
                alt=""
            />
            <div className='grid grid-cols-3 mt-8 gap-8 place-content-start'>
                <img
                    className='aspect-square object-cover w-full'
                    src={data.square}
                    alt="" />
                <DefaultText className="col-span-2 mt-0">
                    {data.text}
                </DefaultText>
                <img
                    className='w-full max-h-96 aspect-video object-cover col-span-3'
                    src={data.footer}
                    alt=""
                />
            </div>
        </SectionContainer>
    )
}
