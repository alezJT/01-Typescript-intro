const skills: string[] =['Bash', 'Counter','Healing'];

interface caracter{
    Nombre:string,
    HP: number,
    skills:string[],
    hometown?: string
}

const Paco: caracter = {
    Nombre: 'paco',
    HP: 100,
    skills: ['Bash', 'Counter'],
}

Paco.hometown = 'Gualey';

console.table(Paco,skills);