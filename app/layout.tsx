import type { Metadata } from 'next';
import { AppProvider } from '@/lib/store';
import { Navigation, Footer } from '@/components/navigation';
import './globals.css';
export const metadata: Metadata = { title: '周末搭子 WeekendGo · 发现附近的周末兼职', description: '为大学生寻找时间合适、距离更近、薪资透明的周末兼职。这个周末，去赚一点生活费。' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="zh-CN"><body><AppProvider><Navigation/>{children}<Footer/></AppProvider></body></html>; }
