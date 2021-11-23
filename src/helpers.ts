export const kebabize = (str: string) => {
   return str.split('').map((letter, idx) => {
     return letter.toUpperCase() === letter
      ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
      : letter
   }).join('')
}

export const sortObjectByKey = (o: any) => Object.fromEntries(Object.entries(o).sort())
