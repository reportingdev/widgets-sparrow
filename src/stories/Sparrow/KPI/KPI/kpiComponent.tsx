import React from 'react';
import './kpi.css';
import { getIcon,IconFormat } from '../../../utils/icons';

interface KPIProps {
  alignment?: 'left' | 'center';
  icon?: string;
  iconColor?: string;
  iconFormat?: IconFormat
  metricLabel: string;
  metricColor?: string;
  labelColor?: string;
  metricValue: string | number;
  growthPercentage?: string;
}

const KPIMetric: React.FC<KPIProps> = ({ alignment = 'left', icon, iconFormat, metricLabel, metricValue, iconColor = "#5E52ED", growthPercentage }) => {
  const getGrowthColor = () => {
    if (growthPercentage?.charAt(0) === '+') return '#498656';
    if (growthPercentage?.charAt(0) === '-') return '#FF5860';
    return '#7E8B9D';
  };


  const hexToRgba = (hex: string, opacity: number): string => {
    // Remove the hash at the start if it's there
    hex = hex.replace('#', '');

    // If shorthand form is provided, expand it to the full form
    if (hex.length === 3) {
      hex = hex.split('').map(color => color + color).join('');
    }

    // Parse r, g, b values
    let bigint = parseInt(hex, 16);
    let r = (bigint >> 16) & 255;
    let g = (bigint >> 8) & 255;
    let b = bigint & 255;

    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  };

  const HeroIcon = icon ? getIcon(icon,iconFormat) : null;
  console.log(HeroIcon)
  const IconCircle = icon ? (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: hexToRgba(iconColor, 0.25),
        borderRadius: '50%',
        width: 48,
        height: 48,
        marginRight: alignment === 'left' ? 10 : 0,
        marginBottom: alignment === 'center' ? 10 : 0
      }}
    >
      {<HeroIcon style={{ height: 16, width: 16, color: hexToRgba(iconColor, 1) }} />}
    </div>
  ) : null;

  if (alignment === 'center') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {IconCircle}
        <p className='KPI__Label' style={{ color: '#7E8B9D', margin: '2px 0 0 0' }}>{metricLabel}</p>
        <p className='KPI__Metric' style={{ color: '#2C3039', margin: '6px 0' }}>{metricValue}</p>
        {
          growthPercentage && (
            <p className='KPI__Delta' style={{ color: getGrowthColor(), margin: '0' }}>
              {growthPercentage}
            </p>
          )
        }
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {IconCircle}
      <div style={{ marginRight: 8 }}>
        <p className='KPI__Label' style={{ color: '#7E8B9D', margin: '0' }}>{metricLabel}</p>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p className='KPI__Metric' style={{ color: '#2C3039', margin: '2px 8px 0 0' }}>{metricValue}</p>
          <p className="KPI__Delta" style={{ fontSize: 12, color: getGrowthColor(), margin: '2px 0 0 0' }}>
            {growthPercentage}
          </p>
        </div>
      </div>
    </div>
  );
};

export default KPIMetric;
