import type { ApplicationStatus } from './types';
export const statusLabels: Record<ApplicationStatus, string> = { pending: '等待商家确认', confirmed: '已确认 · 期待到岗', completed: '已完成', rejected: '未通过' };
export const statusTabs: { key: ApplicationStatus; label: string }[] = [{ key: 'pending', label: '待确认' },{ key: 'confirmed', label: '已确认' },{ key: 'completed', label: '已完成' },{ key: 'rejected', label: '未通过' }];
