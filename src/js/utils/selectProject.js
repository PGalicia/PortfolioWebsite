import { PROJECTS } from "./../constants/project.js";

export function selectProject(id) {
    return PROJECTS.find(project => project.id == id);
}