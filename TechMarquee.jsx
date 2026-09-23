import React from 'react';
import ReactDOM from 'react-dom/client';
import './TechMarquee.css';

// Tech Icons from react-icons/si
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiVercel,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiGithub,
  SiDocker,
  SiPandas,
} from 'react-icons/si';

// Financial Indicators Icons from lucide-react
import {
  LineChart,
  TrendingUp,
  BarChart2,
  Waves,
  Gauge,
  Layers,
  Compass,
  Cloud,
  BarChart3,
  CandlestickChart,
  MoveVertical,
  ArrowUpDown,
} from 'lucide-react';

const marqueeItems = [
  // 1. Tech
  { id: 'react', label: 'React', title: 'React - Component-Based UI Framework', Icon: SiReact, type: 'tech' },
  // 1. Indicator
  { id: 'ma', label: 'MA', title: 'MA (Moving Average) - Đường trung bình động xu hướng', Icon: LineChart, type: 'indicator' },
  // 2. Tech
  { id: 'nodejs', label: 'Node.js', title: 'Node.js - Scalable Backend Runtime', Icon: SiNodedotjs, type: 'tech' },
  // 2. Indicator
  { id: 'ema', label: 'EMA', title: 'EMA (Exponential Moving Average) - Đường trung bình động hàm mũ', Icon: TrendingUp, type: 'indicator' },
  // 3. Tech
  { id: 'python', label: 'Python', title: 'Python - Quantitative Trading & Systems Automation', Icon: SiPython, type: 'tech' },
  // 3. Indicator
  { id: 'macd', label: 'MACD', title: 'MACD - Chỉ báo phân kỳ hội tụ đường trung bình động', Icon: BarChart2, type: 'indicator' },
  // 4. Tech
  { id: 'postgresql', label: 'PostgreSQL', title: 'PostgreSQL - Enterprise Relational Database', Icon: SiPostgresql, type: 'tech' },
  // 4. Indicator
  { id: 'stochastic', label: 'Stochastic', title: 'Stochastic Oscillator - Chỉ báo dao động động lượng', Icon: Waves, type: 'indicator' },
  // 5. Tech
  { id: 'vercel', label: 'Vercel', title: 'Vercel - Frontend Deployment & Edge Cloud', Icon: SiVercel, type: 'tech' },
  // 5. Indicator
  { id: 'rsi', label: 'RSI', title: 'RSI (Relative Strength Index) - Chỉ số sức mạnh tương đối', Icon: Gauge, type: 'indicator' },
  // 6. Tech
  { id: 'html5', label: 'HTML5', title: 'HTML5 - Semantic Web Architecture', Icon: SiHtml5, type: 'tech' },
  // 6. Indicator
  { id: 'bollinger', label: 'Bollinger Bands', title: 'Bollinger Bands - Dải biến động độ lệch chuẩn', Icon: Layers, type: 'indicator' },
  // 7. Tech
  { id: 'css3', label: 'CSS3', title: 'CSS3 - Modern Layouts & Responsive Design', Icon: SiCss, type: 'tech' },
  // 7. Indicator
  { id: 'fibonacci', label: 'Fibonacci', title: 'Fibonacci Retracement - Tỷ lệ vàng hỗ trợ kháng cự', Icon: Compass, type: 'indicator' },
  // 8. Tech
  { id: 'javascript', label: 'JavaScript', title: 'JavaScript (ES6+) - Dynamic Web Execution', Icon: SiJavascript, type: 'tech' },
  // 8. Indicator
  { id: 'ichimoku', label: 'Ichimoku', title: 'Ichimoku Kinko Hyo - Hệ thống đám mây xu hướng toàn diện', Icon: Cloud, type: 'indicator' },
  // 9. Tech
  { id: 'typescript', label: 'TypeScript', title: 'TypeScript - Strict Type-Safe Development', Icon: SiTypescript, type: 'tech' },
  // 9. Indicator
  { id: 'volume', label: 'Volume', title: 'Volume - Khối lượng giao dịch thị trường', Icon: BarChart3, type: 'indicator' },
  // 10. Tech
  { id: 'tailwind', label: 'Tailwind CSS', title: 'Tailwind CSS - Rapid Utility-First Styling', Icon: SiTailwindcss, type: 'tech' },
  // 10. Indicator
  { id: 'candlestick', label: 'Candlestick', title: 'Candlestick Patterns - Mô hình nến Nhật phân tích giá', Icon: CandlestickChart, type: 'indicator' },
  // 11. Tech
  { id: 'github', label: 'GitHub', title: 'GitHub - Version Control & DevOps Workflows', Icon: SiGithub, type: 'tech' },
  // 11. Indicator
  { id: 'atr', label: 'ATR', title: 'ATR (Average True Range) - Biên độ dao động thực tế trung bình', Icon: MoveVertical, type: 'indicator' },
  // 12. Tech
  { id: 'docker', label: 'Docker', title: 'Docker - Containerization & Infrastructure Deployment', Icon: SiDocker, type: 'tech' },
  // 12. Indicator
  { id: 'obv', label: 'OBV', title: 'OBV (On-Balance Volume) - Khối lượng cân bằng tích lũy phân phối', Icon: ArrowUpDown, type: 'indicator' },
  // 13. Tech
  { id: 'pandas', label: 'Pandas', title: 'Pandas - Quantitative Data Analysis', Icon: SiPandas, type: 'tech' },
];

export default function TechMarquee() {
  return (
    <section className="tech-marquee-section" aria-label="Công nghệ và Chỉ báo kỹ thuật">
      <div className="tech-marquee-wrapper">
        <div className="tech-marquee-track">
          {/* Primary loop group */}
          <div className="tech-marquee-group" aria-hidden="false">
            {marqueeItems.map((item, idx) => (
              <React.Fragment key={`group1-${item.id}-${idx}`}>
                <div
                  className="tech-marquee-item"
                  title={item.title}
                  data-type={item.type}
                >
                  <span className="tech-marquee-icon">
                    <item.Icon size={26} />
                  </span>
                  <span className="tech-marquee-label">{item.label}</span>
                </div>
                <span className="tech-marquee-separator" aria-hidden="true">✦</span>
              </React.Fragment>
            ))}
          </div>

          {/* Duplicate loop group for seamless continuous -50% loop */}
          <div className="tech-marquee-group" aria-hidden="true">
            {marqueeItems.map((item, idx) => (
              <React.Fragment key={`group2-${item.id}-${idx}`}>
                <div
                  className="tech-marquee-item"
                  title={item.title}
                  data-type={item.type}
                >
                  <span className="tech-marquee-icon">
                    <item.Icon size={26} />
                  </span>
                  <span className="tech-marquee-label">{item.label}</span>
                </div>
                <span className="tech-marquee-separator" aria-hidden="true">✦</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Auto-mount if tech-marquee-root container is found on page
if (typeof document !== 'undefined') {
  const mountPoint = document.getElementById('tech-marquee-root');
  if (mountPoint && !mountPoint.dataset.mounted) {
    mountPoint.dataset.mounted = 'true';
    const root = ReactDOM.createRoot(mountPoint);
    root.render(<TechMarquee />);
  }
}
