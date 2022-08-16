import {useEffect} from "react";
import {useRouter} from "next/router";


export default function Example() {
  const router = useRouter()

  useEffect( ()  => {
    if (router.isReady) {
      router.push("https://getclearspace.com/?page_id=6325")
    }
  }, [router.isReady])
  return <></>
}