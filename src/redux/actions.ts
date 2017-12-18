import { PLAY } from './types'

export const playMusic = (id: number | string) => ({
  type: PLAY,
  id,
})