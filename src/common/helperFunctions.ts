import type { Type } from 'pokenode-ts'

export function getGermanType(type: Type) {
  return type.names.find((name) => name.language.name === 'de')?.name ?? ''
}
