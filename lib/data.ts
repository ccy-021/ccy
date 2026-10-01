import type { AppData, Job } from './types';
export const BUSINESS_ID = 'business-qinghe';
export const STUDENT_ID = 'student-me';
const base = { date: '2026-10-10', startTime: '10:00', endTime: '18:00', rating: 4.8, historyCount: 32, applicantCount: 0, recruitCount: 3, ownerId: 'business-other' };
export const seedJobs: Job[] = [
 { ...base, id: 'tea', title: '奶茶店周末店员', business: '茶屿 · 大学城店', category: '餐饮', salary: 22, location: '大学城商业街 16 号茶屿', distance: 0.8, icon: 'tea', color: 'peach', description: ['协助制作饮品、打包外卖，保持出品台整洁。', '接待顾客并协助点单，高峰时段与店员配合。', '提供岗前培训与一杯当日员工饮品，休息时间计薪。'], requirements: ['年满 18 岁的在校大学生，守时、有责任心。', '喜欢与人交流，无经验可报名；到岗需持有效健康证。'] },
 { ...base, id: 'event', title: '商场活动协助', business: '万象汇 · 活动运营', category: '活动', salary: 28, startTime: '13:00', endTime: '19:00', location: '大学城万象汇一楼中庭', distance: 1.5, icon: 'event', color: 'lavender', rating: 4.9, recruitCount: 8, description: ['协助周末市集签到、引导与活动物料发放。', '配合现场负责人维护排队秩序，结束后整理场地。'], requirements: ['沟通清晰，耐心友好。', '能完整参与工作时段，穿着简洁舒适。'] },
 { ...base, id: 'tutor', title: '小学数学家教', business: '知行学社 · 学业辅导', category: '家教', salary: 60, date: '2026-10-11', startTime: '14:00', endTime: '17:00', location: '学府社区共享学习室 203', distance: 1.2, icon: 'book', color: 'blue', rating: 4.9, recruitCount: 2, description: ['辅导小学高年级数学，协助梳理错题。', '根据学情准备练习，并向家长反馈学习情况。'], requirements: ['数学基础扎实，讲解耐心，师范专业优先。', '报名后需进行一次简短的线上试讲。'] },
 { ...base, id: 'coffee', title: '咖啡店周末店员', business: '青禾咖啡 · 大学城店', ownerId: BUSINESS_ID, category: '餐饮', salary: 25, date: '2026-10-11', startTime: '09:00', endTime: '17:00', location: '大学城梧桐路 28 号', distance: 0.6, icon: 'coffee', color: 'sand', recruitCount: 4, description: ['协助咖啡师完成备料、打包与餐品出餐。', '整理客区，提供友善的顾客服务。', '提供工作餐与咖啡，班次结束后当日结算。'], requirements: ['对咖啡感兴趣，做事细心。', '需要有效健康证，有餐饮经验优先。'] },
 { ...base, id: 'food', title: '餐厅周末服务员', business: '小满食堂 · 学府店', category: '餐饮', salary: 23, startTime: '11:00', endTime: '19:00', location: '学府路 52 号小满食堂', distance: 1.0, icon: 'food', color: 'mint', recruitCount: 4, description: ['负责传菜、桌面整理与简单备餐。', '提供工作餐，休息期间照常计薪。'], requirements: ['动作利落，有服务意识。', '持有效健康证，可接受新手。'] },
 { ...base, id: 'pet', title: '宠物店周末助手', business: '毛茸茸 · 宠物生活馆', category: '其他', salary: 24, date: '2026-10-11', location: '梧桐里社区 9 号', distance: 2.1, icon: 'pet', color: 'pink', rating: 4.7, recruitCount: 2, description: ['协助整理宠物用品、清洁活动区域。', '在店员指导下照顾店内小动物并拍摄日常照片。'], requirements: ['喜欢小动物，对宠物毛发不过敏。', '耐心细致，听从专业店员的操作指导。'] },
 { ...base, id: 'expo', title: '展会工作人员', business: '星野会展 · 城市创意展', category: '活动', salary: 30, startTime: '09:00', endTime: '18:00', location: '城市会展中心 B 馆', distance: 4.5, icon: 'event', color: 'blue', recruitCount: 10, description: ['负责入口核验、展区导览与资料发放。', '含工作午餐，展会结束后两个工作日内结算。'], requirements: ['形象整洁，表达清楚。', '能在 08:45 前到场参加岗前说明。'] },
 { ...base, id: 'campus', title: '校园地推 · 咖啡新品体验', business: '青禾咖啡 · 大学城店', ownerId: BUSINESS_ID, category: '校园推广', salary: 26, startTime: '12:00', endTime: '16:00', location: '大学城商业街步行区', distance: 0.5, icon: 'megaphone', color: 'mint', recruitCount: 5, description: ['在指定区域介绍新品并发放试饮券。', '按小时结算，无销售业绩要求。'], requirements: ['热情主动，熟悉大学城周边。', '尊重路人意愿，遵守场地管理规则。'] },
 { ...base, id: 'photo', title: '摄影助理 · 周末快闪', business: '青禾咖啡 · 大学城店', ownerId: BUSINESS_ID, category: '其他', salary: 28, date: '2026-10-11', startTime: '13:00', endTime: '18:00', location: '青禾咖啡二楼活动空间', distance: 0.6, icon: 'camera', color: 'lavender', recruitCount: 2, description: ['协助摄影师整理器材、布置灯光和现场引导。', '使用店内设备记录活动花絮。'], requirements: ['对摄影有兴趣，了解基础构图。', '做事认真，爱护摄影器材。'] },
 { ...base, id: 'warehouse', title: '仓库临时工 · 轻货整理', business: '青禾咖啡 · 大学城店', ownerId: BUSINESS_ID, category: '其他', salary: 25, startTime: '09:00', endTime: '16:00', location: '学府路青禾物料仓', distance: 2.8, icon: 'box', color: 'sand', recruitCount: 4, description: ['协助清点杯具、包装袋等轻型物料。', '按清单完成贴标、分拣与货架整理，无重物搬运。'], requirements: ['细心负责，能核对数量和标签。', '穿包脚平底鞋，听从现场安全安排。'] },
];
export function initialData(): AppData {
 return { jobs: seedJobs, applications: [
  ...['林同学', '陈同学', '许同学'].map((name, i) => ({ id: `demo-p-${i}`, jobId: i === 2 ? 'campus' : 'coffee', studentId: `demo-${i}`, studentName: name, major: ['新闻传播 · 大二', '工商管理 · 大三', '视觉传达 · 大二'][i], status: 'pending' as const, createdAt: '2026-10-01T08:30:00.000Z' })),
  { id: 'demo-c', jobId: 'coffee', studentId: 'demo-3', studentName: '周同学', major: '英语 · 大二', status: 'confirmed', createdAt: '2026-10-01T09:00:00.000Z' },
 ] };
}
