export const categories = ['餐饮', '活动', '家教', '销售', '校园推广', '其他'] as const;
export type Category = typeof categories[number];
export type Job = { id: string; title: string; business: string; ownerId: string; category: Category; salary: number; date: string; startTime: string; endTime: string; location: string; distance: number; description: string[]; requirements: string[]; rating: number; historyCount: number; recruitCount: number; applicantCount: number; icon: 'tea' | 'food' | 'event' | 'book' | 'megaphone' | 'camera' | 'box' | 'coffee' | 'pet'; color: string };
export type ApplicationStatus = 'pending' | 'confirmed' | 'completed' | 'rejected';
export type Application = { id: string; jobId: string; studentId: string; studentName: string; major: string; status: ApplicationStatus; createdAt: string };
export type Preferences = { days: number[]; startTime: string; endTime: string; categories: Category[]; minSalary: number; maxDistance: number };
export type AppData = { jobs: Job[]; applications: Application[] };
