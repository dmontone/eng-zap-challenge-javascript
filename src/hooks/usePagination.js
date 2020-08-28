import { PAGELENGTH } from 'config'

export const usePagination = ({
  currentPage,
  list
}) => {
  const startAt = currentPage * PAGELENGTH
  const endAt = startAt + PAGELENGTH
  const totalPages = Math.ceil(list.length / PAGELENGTH)

  return [
    list.slice(
      Math.max(0, startAt),
      Math.min(list.length, endAt)
    ),
    totalPages
  ]
}