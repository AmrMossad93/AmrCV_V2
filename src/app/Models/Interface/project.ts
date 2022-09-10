import {EProjectType} from "../ENum/project-type";

export interface IProject {
    id: number;
    projectName: string;
    type: EProjectType;
    projectDetail: string;
    coreDevelopment: string;
    client: string;
    category: string;
    webSiteURL: string;
    vedioUrl: string;
    androidLink: string;
    iosLink: string;
    images: string[];
}
