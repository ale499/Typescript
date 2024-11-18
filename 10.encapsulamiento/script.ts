class Sorteo<T> {
  private ticket?: T
  constructor(private nombre: string) {}
  setNumero(ticket: T) {
    this.ticket = ticket
  }
  getNumero() {
    return this.ticket
  }
  getNombre() {
    return this.nombre
  }
  public sortear(): string {
    return `Para ${this.nombre} el ticket es ${this.ticket}`
  }
}
let sorteo = new Sorteo<number>('Sergie Code')
sorteo.setNumero(7)
console.log(sorteo.sortear())