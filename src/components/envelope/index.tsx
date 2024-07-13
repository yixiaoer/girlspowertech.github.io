import React, { FC } from 'react';
import Stamp from '@/components/stamp';
import Logo from '@assets/logo.svg';
import './style.scss';

export type EnvelopeProps = {
  key: number;
  onClick: () => void;
  title: string;
  date: string;
  tags: string[];
  id: string;
};

const GirlsPowerTechStamp: FC<{ color?: string }> = ({ color }) => (
  <Stamp
    logo={ Logo }
    logoStyle={ {
      marginBottom: '3px',
      marginRight: '3px',
    } }
    color={ color }
    upperText=" ✾✿ GIRLS POWER TECH ✿✾"
    lowerText="- 2024.07 -"
  />
);

const Envelope: FC<EnvelopeProps> = ({ title, date, tags, key, onClick }) => {
  return (
    <div
      style={
        {
          '--bg-color': '#161616',
          '--color': '#f7f7f7',
        } as React.CSSProperties
      }
      className={ 'envelope' }
      key={ key }
      onClick={ onClick }
    >
      <div className="header">
        <h3>{ title }</h3>
        <p className="date">{ date }</p>
      </div>
      <div className="tags">
        { tags.map((tag, idx) => (
          <span key={ idx } className="tag">
            { tag }
          </span>
        )) }
      </div>
      <div className="stamp">
        <GirlsPowerTechStamp color='#f7f7f7' />
      </div>
    </div>
  );
};

export default Envelope;
