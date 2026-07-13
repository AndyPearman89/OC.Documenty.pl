import { ChevronRight, House } from "lucide-react";
import Link from "next/link";

interface BreadcrumbsProps { items: { label: string; href?: string }[] }

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schema={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{label:"Strona główna",href:"/"},...items].map((item,index)=>({"@type":"ListItem",position:index+1,name:item.label,...(item.href?{item:`https://oc.documenty.pl${item.href}`}:{})}))};
  return <><nav className="breadcrumbs" aria-label="Okruszki"><Link href="/" aria-label="Strona główna"><House /></Link>{items.map((item,index)=><span key={item.label}><ChevronRight/>{item.href?<Link href={item.href}>{item.label}</Link>:<strong aria-current={index===items.length-1?"page":undefined}>{item.label}</strong>}</span>)}</nav><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/></>;
}
