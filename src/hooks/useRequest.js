import { useState, useEffect } from 'react'

export const useRequest = ({
  service,
  storage,
  on: {
    before,
    success,
    error
  }
}) => {
  const [ response, setResponse ] = useState()
  
  useEffect(() => {
    const fetchData = async () => {
      if(!storage.isFetched){
        before && before()
        try {
          const data = await service()
          success && success(data)
          setResponse(data)
        } catch (err) {
          error && error(err)
        }
      }
    }

    if(!response){
      fetchData()
    }
  }, [])

  return response
}