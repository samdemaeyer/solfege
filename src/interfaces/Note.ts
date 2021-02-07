export type Note = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G'

export interface INote {
  id: string
  isVisible: boolean
  note: Note
}
