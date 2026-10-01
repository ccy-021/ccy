import Link from 'next/link';
import { Button } from '@/components/ui/button';
export default function NotFound() { return <main className="empty-state page-shell"><h1>这条小路还没有兼职</h1><p>页面可能已移动，回首页看看附近的机会吧。</p><Button asChild><Link href="/">返回找兼职</Link></Button></main>; }
