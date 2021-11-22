import {useEffect, useRef} from 'react'
export const useObserver = (ref, canLoad, isLoading, callback)=>{
    const observer = useRef()
    useEffect(() => {
        if(isLoading) return
        if(observer.current) observer.current.disconnect()
        var cb = (entries, observer)=>{
          if(entries[0].isIntersecting && canLoad){
            // console.log(entries);
            // console.log('Div в зоне аидимости');
            // console.log(page);
            // setPage(page+1)
            callback()
          }
        }
        observer.current = new IntersectionObserver(cb)
        observer.current.observe(ref.current)
    }, [isLoading])
}