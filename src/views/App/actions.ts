import { PLAYSONG } from './types'

export const playSong = (id: number) => {
  return {
    type: PLAYSONG,
    id
  }
}