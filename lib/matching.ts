import type { Job, Preferences } from './types';
import { dayOf, minutes } from './utils';
export const defaultPreferences: Preferences = { days: [6, 0], startTime: '08:00', endTime: '20:00', categories: [], minSalary: 20, maxDistance: 3 };
export function matchJob(job: Job, prefs: Preferences) {
  const checks = [
    { label: '日期符合安排', passed: prefs.days.includes(dayOf(job.date)), weight: 25 },
    { label: '时间完整匹配', passed: minutes(prefs.startTime) <= minutes(job.startTime) && minutes(prefs.endTime) >= minutes(job.endTime), weight: 25 },
    { label: '薪资符合预期', passed: job.salary >= prefs.minSalary, weight: 20 },
    { label: '通勤距离合适', passed: job.distance <= prefs.maxDistance, weight: 20 },
    { label: '符合类型偏好', passed: prefs.categories.length === 0 || prefs.categories.includes(job.category), weight: 10 },
  ];
  return { score: Math.round(checks.reduce((n, c) => n + (c.passed ? c.weight : 0), 0) - (checks[3].passed ? 5 * job.distance / prefs.maxDistance : 0) - (checks[2].passed ? 2 * (1 - Math.min(1, (job.salary - prefs.minSalary) / 10)) : 0)), checks, suitable: checks.every(c => c.passed) };
}
export function rankJobs(jobs: Job[], prefs: Preferences) {
  return jobs.map(job => ({ job, ...matchJob(job, prefs) })).filter(result => result.suitable).sort((a, b) => b.score - a.score || a.job.distance - b.job.distance || b.job.salary - a.job.salary);
}
