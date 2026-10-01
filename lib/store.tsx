'use client';
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { BUSINESS_ID, initialData, STUDENT_ID } from './data';
import { categories, type AppData, type ApplicationStatus, type Job } from './types';
const KEY = 'weekendgo:v1';
function validData(value: unknown): value is AppData {
 if (!value || typeof value !== 'object') return false;
 const data = value as AppData;
 const finite = (n: unknown) => typeof n === 'number' && Number.isFinite(n) && n >= 0;
 return Array.isArray(data.jobs) && Array.isArray(data.applications) && data.jobs.every(j => j && ['id','title','business','ownerId','location','color'].every(k => typeof j[k as keyof Job] === 'string') && categories.includes(j.category) && ['tea','food','event','book','megaphone','camera','box','coffee','pet'].includes(j.icon) && /^\d{4}-\d{2}-\d{2}$/.test(j.date) && Number.isFinite(Date.parse(j.date)) && [j.startTime,j.endTime].every(t => /^([01]\d|2[0-3]):[0-5]\d$/.test(t)) && j.endTime > j.startTime && [j.salary,j.distance,j.rating,j.historyCount,j.recruitCount,j.applicantCount].every(finite) && j.recruitCount > 0 && [j.description,j.requirements].every(a => Array.isArray(a) && a.every(s => typeof s === 'string'))) && new Set(data.jobs.map(j => j.id)).size === data.jobs.length && data.applications.every(a => a && [a.id,a.jobId,a.studentId,a.studentName,a.major,a.createdAt].every(s => typeof s === 'string') && ['pending','confirmed','completed','rejected'].includes(a.status) && data.jobs.some(j => j.id === a.jobId));
}
type Store = AppData & { ready: boolean; notice: (message: string) => void; apply: (jobId: string) => boolean; saveJob: (job: Job) => void; updateApplication: (id: string, status: ApplicationStatus) => void; remaining: (job: Job) => number; applicantCount: (job: Job) => number };
const Context = createContext<Store | null>(null);
export function AppProvider({ children }: { children: ReactNode }) {
 const [data, setData] = useState<AppData>(initialData);
 const dataRef = useRef(data);
 const [ready, setReady] = useState(false);
 const [message, setMessage] = useState('');
 useEffect(() => {
  function load() {
   try { const raw = localStorage.getItem(KEY); if (raw) { const parsed: unknown = JSON.parse(raw); if (!validData(parsed)) throw new Error('invalid'); dataRef.current = parsed; setData(parsed); } }
   catch { setMessage('本地记录无法读取，已使用初始演示数据。'); }
   setReady(true);
  }
  load();
  const sync = (event: StorageEvent) => { if (event.key === KEY) load(); };
  window.addEventListener('storage', sync);
  return () => window.removeEventListener('storage', sync);
 }, []);
 useEffect(() => { if (!message) return; const id = setTimeout(() => setMessage(''), 5000); return () => clearTimeout(id); }, [message]);
 function persist(next: AppData) { dataRef.current = next; setData(next); try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { setMessage('当前浏览器无法保存记录，本次操作仅在当前页面有效。'); } }
 const remaining = (job: Job) => Math.max(0, job.recruitCount - dataRef.current.applications.filter(a => a.jobId === job.id && ['confirmed','completed'].includes(a.status)).length);
 function apply(jobId: string) {
  if (!ready) return false;
  const current = dataRef.current;
  const job = current.jobs.find(j => j.id === jobId);
  if (!job || remaining(job) === 0) { setMessage('该兼职已招满，看看其他机会吧。'); return false; }
  if (current.applications.some(a => a.jobId === jobId && a.studentId === STUDENT_ID)) { setMessage('你已经报名过这份兼职，可以在「我的报名」查看进度。'); return false; }
  setMessage('报名成功！等待商家确认。');
  persist({ ...current, applications: [...current.applications, { id: crypto.randomUUID(), jobId, studentId: STUDENT_ID, studentName: '顾同学', major: '工商管理 · 大二', status: 'pending', createdAt: new Date().toISOString() }] });
  return true;
 }
 function saveJob(job: Job) { const current = dataRef.current; const exists = current.jobs.some(j => j.id === job.id); if (exists && current.jobs.find(j => j.id === job.id)?.ownerId !== BUSINESS_ID) return; persist({ ...current, jobs: exists ? current.jobs.map(j => j.id === job.id ? job : j) : [job, ...current.jobs] }); }
 function updateApplication(id: string, status: ApplicationStatus) {
  const current = dataRef.current;
  const application = current.applications.find(a => a.id === id);
  const job = current.jobs.find(j => j.id === application?.jobId);
  if (!application || !job || job.ownerId !== BUSINESS_ID) return;
  if (!(application.status === 'pending' && ['confirmed','rejected'].includes(status)) && !(application.status === 'confirmed' && status === 'completed')) return;
  if (status === 'confirmed' && remaining(job) === 0) { setMessage('招聘人数已满，无法继续确认。'); return; }
  setMessage(status === 'confirmed' ? '已确认报名，学生端状态已同步。' : status === 'completed' ? '已标记完成。' : '已更新为未通过。');
  persist({ ...current, applications: current.applications.map(a => a.id === id ? { ...a, status } : a) });
 }
 return <Context.Provider value={{ ...data, ready, notice: setMessage, apply, saveJob, updateApplication, remaining, applicantCount: job => job.applicantCount + data.applications.filter(a => a.jobId === job.id).length }}>{children}{message && <div className="toast" role="status"><CheckCircle2 size={20} /><span>{message}</span><button aria-label="关闭提示" onClick={() => setMessage('')}><X size={18} /></button></div>}</Context.Provider>;
}
export function useApp() { const ctx = useContext(Context); if (!ctx) throw new Error('AppProvider is required'); return ctx; }
