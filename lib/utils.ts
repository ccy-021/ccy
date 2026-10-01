import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export function dayOf(date: string) { return new Date(`${date}T12:00:00`).getDay(); }
export function dateLabel(date: string) { const d = new Date(`${date}T12:00:00`); return `${d.getMonth() + 1}月${d.getDate()}日 周${'日一二三四五六'[d.getDay()]}`; }
export function minutes(time: string) { const [h, m] = time.split(':').map(Number); return h * 60 + m; }
export function hours(start: string, end: string) { return (minutes(end) - minutes(start)) / 60; }
export function income(salary: number, start: string, end: string) { return Math.round(salary * hours(start, end) * 100) / 100; }
