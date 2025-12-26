import { Target, BarChart3, Briefcase, TrendingUp, Clock, type LucideProps } from 'lucide-react';
import type { ComponentType } from 'react';

type Service = {
  icon: ComponentType<LucideProps>;
  title: string;
  description: string;
};


const services: Service[] = [
  {
    icon: Target,
    title: 'Strategy Concept Development F&B',
    description: 'Membantu merancang konsep restoran atau kafe dari nol, termasuk positioning dan target market'
  },
  {
    icon: BarChart3,
    title: 'Menu Engineering & Food Cost Analysis',
    description: 'Optimasi pemilihan menu berdasarkan food cost, margin, dan konsep'
  },
  {
    icon: Briefcase,
    title: 'Operational SOP & Kitchen Flow',
    description: 'Penyusunan SOP dapur dan operasional sistem untuk efisiensi dan konsistensi produk'
  },
  {
    icon: TrendingUp,
    title: 'Strategy Branding & Marketing F&B',
    description: 'Strategi branding, promosi, dan digital marketing industri F&B dalam meningkatkan penjualan'
  },
  {
    icon: Clock,
    title: 'Monitoring & Business Improvement',
    description: 'Analisis performa outlet dan evaluasi hasil serta penyesuaian strategi bila diperlukan'
  }
];

export default services;
