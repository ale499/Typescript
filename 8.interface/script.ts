interface Programador1 {
  nombre: string,
  tecnologias: string[],
  tomarMate?: boolean | null
}

let dev: Programador = {
  nombre: 'Sergie Code',
  tecnologias: ['React', 'Angular', 'Svelte'],
  tomarMate: true,
}

let dev2 ={
  name: 'Federico',
  tech: ['HTML', 'Cobol'],
  lastName: 'Buenardo'
}

function enviarCurriculum( programador: Programador) {
  console.log(`Este curriculum es de ${programador.nombre}`)
}
enviarCurriculum(dev)