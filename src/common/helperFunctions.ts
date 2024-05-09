import type { Type } from 'pokenode-ts'

export const colorMap = {
  grass: 'bg-grass',
  fire: 'bg-fire',
  water: 'bg-water',
  bug: 'bg-bug',
  normal: 'bg-normal',
  flying: 'bg-flying',
  electric: 'bg-electric',
  poison: 'bg-poison',
  ground: 'bg-ground',
  fairy: 'bg-fairy',
  fighting: 'bg-fighting',
  psychic: 'bg-psychic',
  rock: 'bg-rock',
  ghost: 'bg-ghost',
  ice: 'bg-ice',
  dragon: 'bg-dragon'
}

export function getGermanType(type: Type) {
  return type.names.find((name) => name.language.name === 'de')?.name ?? ''
}

export function formatPokemonId(id: number | undefined): string {
  if (id === undefined) return ''
  else return id.toString().padStart(3, '0')
}
