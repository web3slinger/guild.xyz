import { KeyedMutator } from "swr"
import useSWRImmutable from "swr/immutable"
import { Poap } from "types"

export const usePoaps = (
  search = ""
): { poaps: Array<Poap>; isLoading: boolean } => {
  const { isValidating, data } = useSWRImmutable(
    search.length > 0 ? `/assets/poap?search=${search}` : null
  )

  return { isLoading: isValidating, poaps: data }
}

export const usePoap = (
  fancyId: string
): { poap: Poap; isLoading: boolean; mutatePoap: KeyedMutator<any>; error: any } => {
  const { isValidating, data, mutate, error } = useSWRImmutable<Poap>(
    fancyId ? `/assets/poap/${fancyId}` : null
  )

  return { isLoading: isValidating, poap: data, mutatePoap: mutate, error }
}
