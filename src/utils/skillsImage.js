import html from '../assets/svg/skills/html.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
import react from '../assets/svg/skills/react.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'
import java from '../assets/svg/skills/java.svg'
import python from '../assets/svg/skills/python.svg'
import git from '../assets/svg/skills/git.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import nginx from '../assets/svg/skills/nginx.svg'
import azure from '../assets/svg/skills/azure.svg'
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import nodeJs from '../assets/svg/skills/nodejs.svg.png'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'photoshop':
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
        case 'node js':
            return nodeJs;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'mongodb':
            return mongoDB;
        case 'mysql':
            return mysql;
        case 'c++':
            return cplusplus;
        case 'java':
            return java;
        case 'python':
            return python;
        case 'git':
            return git;
        case 'materialui':
            return materialui;
        case 'nginx':
            return nginx;
        case 'azure':
            return azure;
        case 'microsoft office':
            return microsoftoffice;
        default:
            break;
    }
}
