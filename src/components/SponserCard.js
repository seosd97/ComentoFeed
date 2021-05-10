import React from 'react';
import PropType from 'prop-types';
import Card from './Card';

const SponserCard = ({ ad = {} }) => (
  <Card>
    <div>sponsered</div>
    <section className="card-content-flex">
      <section>
        <img src={`https://cdn.comento.kr/assignment/${ad.img}`}/>
      </section>
      <section className="card-content">
        <h1 className="elipse-text elipse-line-2">{ad.title}</h1>
        <div className="content-desc elipse-text elipse-line-4">{ad.contents}</div>
      </section>
    </section>
  </Card>
);

SponserCard.propTypes = {
  ad: PropType.object,
};

export default SponserCard;
