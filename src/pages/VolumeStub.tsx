import { useParams, Link } from 'react-router-dom';
import VolumeCover from '@/components/VolumeCover';
import ScrollReveal from '@/components/ScrollReveal';
import SectionDivider from '@/components/SectionDivider';

const volumeData: Record<string, {
  num: string;
  roman: string;
  title: string;
  subtitle: string;
  metadata: string;
  image: string;
}> = {
  '1': {
    num: '01',
    roman: 'I',
    title: '备考全攻略',
    subtitle: '考试新政、时间规划、答题技巧与跨科目考点梳理',
    metadata: '8 章节 · 12 表格',
    image: '/vol1-strategy.jpg',
  },
  '2': {
    num: '02',
    roman: 'II',
    title: '药事管理与法规精讲',
    subtitle: '法律体系、药品管理、特殊药品与2026新增法规',
    metadata: '12 章节 · 35 表格',
    image: '/vol2-regulations.jpg',
  },
  '3': {
    num: '03',
    roman: 'III',
    title: '药学专业知识（一）精讲',
    subtitle: '药剂学、药物化学、药效学与生命药学专题',
    metadata: '18 章节 · 52 表格',
    image: '/vol3-chemistry.jpg',
  },
  '4': {
    num: '04',
    roman: 'IV',
    title: '药学专业知识（二）精讲',
    subtitle: '各系统药物、抗菌药、抗肿瘤药详解',
    metadata: '14 章节 · 38 表格',
    image: '/vol4-drugs.jpg',
  },
  '5': {
    num: '05',
    roman: 'V',
    title: '药学综合知识与技能精讲',
    subtitle: '处方审核、43种疾病管理、案例分析与TDM监测',
    metadata: '15 章节 · 28 表格',
    image: '/vol5-clinical.jpg',
  },
};

export default function VolumeStub() {
  const { id } = useParams<{ id: string }>();
  const vol = volumeData[id || '1'];

  if (!vol) {
    return (
      <div className="min-h-[100dvh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-display-lg mb-4">Volume Not Found</h1>
          <Link to="/" className="text-ui-md" style={{ color: 'var(--accent-rust)' }}>
            ← 返回首页
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[100dvh]">
      <VolumeCover
        volumeNum={vol.num}
        volumeRoman={vol.roman}
        title={vol.title}
        subtitle={vol.subtitle}
        metadata={vol.metadata}
      />

      {/* Placeholder Content */}
      <section className="py-24" style={{ background: 'var(--paper)' }}>
        <div className="max-w-content mx-auto px-6 text-center">
          <ScrollReveal>
            <SectionDivider className="mb-12" />
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2
              className="font-chinese-serif text-display-sm mb-4"
              style={{ color: 'var(--ink)' }}
            >
              内容正在编辑中
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p
              className="text-body-lg mb-8"
              style={{ color: 'var(--ink-secondary)', maxWidth: '500px', margin: '0 auto' }}
            >
              本册内容正在精心编撰中，敬请期待。您可以先浏览其他分册的内容。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Link
              to="/"
              className="inline-block text-ui-lg font-medium px-8 py-3.5 transition-all duration-250"
              style={{
                background: 'var(--accent-rust)',
                color: 'var(--paper)',
              }}
            >
              返回首页
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
