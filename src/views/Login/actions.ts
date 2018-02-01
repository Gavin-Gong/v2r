import { LOGIN } from './types';

export interface Fields {
  name: string,
  password: string
}

export interface Action extends Fields {
  type: String,
}

export function login(fields: Fields) {
  return {
    type: LOGIN,
    fields
  }
}