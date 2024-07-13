import React, { useMemo } from 'react';
import classNames from 'classnames';
import './style.scss';
import { hexToCSSFilter } from 'hex-to-css-filter';

interface PostmarkStampProps {
  logo: string;
  upperText: string;
  lowerText: string;
  size?: number;
  color?: string;
  className?: string;
  logoStyle?: React.CSSProperties;
}

const PostmarkStamp: React.FC<PostmarkStampProps> = ({
  logo,
  upperText,
  lowerText,
  color = '#000',
  size = 120,
  logoStyle,
  className
}) => {

  console.log(color)
  const logoFilter = `${ hexToCSSFilter(color).filter.replace(';', '') }`;

  const style = useMemo(() => {
    const borderWidth = Math.max(0.5, Math.floor(size / 60));
    return {
      '--size': `${ size }px`,
      '--color': color,
      '--border-width': `${ borderWidth }px`,
      '--font-size': `${ Math.max(8, size / 40) }px`,
    } as React.CSSProperties;
  }, [size]);

  return (
    <div
      className={ classNames('postmark-stamp', className) }
      style={ style }
    >
      <div className="outer-circle">
        <div className="inner-circle">
          <img src={ logo } className="logo" style={ {
            ...logoStyle,
            filter: logoFilter
          } } />
        </div>
        <svg viewBox="0 0 100 100" className="text-circle">
          <path id="upper-curve" d="M 10,50 A 40,38 0 1,1 90,50" fill="none" />
          <path id="lower-curve" d="M 90,50 A 40,40 0 1,1 10,50" fill="none" />
          <text>
            <textPath xlinkHref="#upper-curve" startOffset="50%" textAnchor="middle">
              { upperText }
            </textPath>
          </text>
          <text>
            <textPath xlinkHref="#lower-curve" startOffset="50%" textAnchor="middle">
              { lowerText }
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default PostmarkStamp;