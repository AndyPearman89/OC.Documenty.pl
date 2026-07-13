"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef } from "react";

export function Reveal({children,className="",delay=0}:{children:ReactNode;className?:string;delay?:number}){
  const ref=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const element=ref.current;
    if(!element)return;
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){element.classList.add("isVisible");return;}
    const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){element.classList.add("isVisible");observer.disconnect();}},{threshold:.12,rootMargin:"0px 0px -40px"});
    observer.observe(element);
    return()=>observer.disconnect();
  },[]);
  return <div ref={ref} className={`reveal ${className}`} style={{"--reveal-delay":`${delay}ms`} as CSSProperties}>{children}</div>;
}
