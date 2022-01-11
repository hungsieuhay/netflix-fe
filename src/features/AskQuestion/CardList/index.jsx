import React from 'react';
import CardInfo from '../CardInfo';

CardList.propTypes = {};

function CardList(props) {
  const initCardList = [
    {
      id: 1,
      title: 'What is Netflix?',
      description: (
        <p>
          Netflix is a streaming service that offers a wide variety of award-winning TV shows,
          movies, anime, documentaries, and more on thousands of internet-connected devices.
          <br />
          You can watch as much as you want, whenever you want without a single commercial – all for
          one low monthly price. There's always something new to discover and new TV shows and
          movies are added every week!
        </p>
      ),
    },
    {
      id: 2,
      title: 'How much does Netflix cost?',
      description:
        'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 70,000 ₫ to 260,000 ₫ a month. No extra costs, no contracts.',
    },
    {
      id: 3,
      title: 'Where can I watch?',
      description: (
        <p>
          Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web
          at netflix.com from your personal computer or on any internet-connected device that offers
          the Netflix app, including smart TVs, smartphones, tablets, streaming media players and
          game consoles.
          <br />
          You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use
          downloads to watch while you're on the go and without an internet connection. Take Netflix
          with you anywhere."
        </p>
      ),
    },
    {
      id: 4,
      title: 'How do I cancel?',
      description:
        'Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.',
    },
    {
      id: 5,
      title: 'What can I watch on Netflix?',
      description:
        'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.',
    },
    {
      id: 6,
      title: 'Is Netflix good for kids?',
      description: (
        <p>
          The Netflix Kids experience is included in your membership to give parents control while
          kids enjoy family-friendly TV shows and movies in their own space.
          <br />
          Kids profiles come with PIN-protected parental controls that let you restrict the maturity
          rating of content kids can watch and block specific titles you don’t want kids to see.'
        </p>
      ),
    },
  ];
  return (
    <div>
      <CardInfo cardList={initCardList} />
    </div>
  );
}

export default CardList;
