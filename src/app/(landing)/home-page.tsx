"use client";

import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "@/utils/gtag";

export default function HomePage({ docs }: any) {

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <div>
      <h1>Home page</h1>
      {docs.map((doc: any) => (
        <p key={doc.id}>{doc.id}</p>
      ))}
    </div>
  );
}
