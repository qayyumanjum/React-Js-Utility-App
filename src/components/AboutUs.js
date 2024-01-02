import React, { useState } from 'react';

function AboutUs(props) {
  const cardData = [
    {
      id: 1,
      title: 'Analyze your text',
      text: 'Some quick example text for Card 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas, unde temporibus ex quis quisquam accusamus a dignissimos tempora neque ipsam sit sint vitae libero corporis, excepturi quia architecto voluptatum. Culpa iure assumenda itaque, consectetur eum dolorum non quas voluptatum sapiente obcaecati rem totam, quis est. Ut fugiat architecto pariatur odio consequatur exercitationem adipisci ex vel tempore ipsum quos perferendis, tenetur accusantium ducimus veniam expedita sequi doloremque assumenda facilis impedit.',
      image: 'media/img1.jpg',
    },
    {
      id: 2,
      title: 'Free to use',
      text: 'Some quick example text for Card 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas, unde temporibus ex quis quisquam accusamus a dignissimos tempora neque ipsam sit sint vitae libero corporis, excepturi quia architecto voluptatum. Culpa iure assumenda itaque, consectetur eum dolorum non quas voluptatum sapiente obcaecati rem totam, quis est. Ut fugiat architecto pariatur odio consequatur exercitationem adipisci ex vel tempore ipsum quos perferendis, tenetur accusantium ducimus veniam expedita sequi doloremque assumenda facilis impedit.',
      image: 'media/img2.png',
    },
    {
      id: 3,
      title: 'Browser Compatible',
      text: 'Some quick example text for Card 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptas, unde temporibus ex quis quisquam accusamus a dignissimos tempora neque ipsam sit sint vitae libero corporis, excepturi quia architecto voluptatum. Culpa iure assumenda itaque, consectetur eum dolorum non quas voluptatum sapiente obcaecati rem totam, quis est. Ut fugiat architecto pariatur odio consequatur exercitationem adipisci ex vel tempore ipsum quos perferendis, tenetur accusantium ducimus veniam expedita sequi doloremque assumenda facilis impedit.',
      image: 'media/img3.png',
    },
  
  ];

  // State to track expanded cards
  const [expandedCards, setExpandedCards] = useState([]);

  // Function to toggle card expansion
  const toggleCardExpansion = (cardId) => {
    setExpandedCards((prevExpandedCards) =>
      prevExpandedCards.includes(cardId)
        ? prevExpandedCards.filter((id) => id !== cardId)
        : [...prevExpandedCards, cardId]
    );
  };

  

  return (
    <div className="container wrapper d-flex justify-content-evenly align-items-center flex-wrap" style={{ height: '60vh', width: '90vw' }}>
      {cardData.map((card) => (
        <div key={card.id} className="card my-2 mx-2" style={{ width: '25vw', height: '60vh' }}>
          <div className={`card-body  bg-${props.mode  === 'dark' ? 'light' : 'dark'} `}>
            <h5 className={`card-title text-${props.mode  === 'dark' ? 'dark' : 'light'}`}>{card.title}</h5>
            <div className={`card-text my-1 text-${props.mode  === 'dark' ? 'dark' : 'light'}`} style={{ maxHeight: expandedCards.includes(card.id) ? 'none' : '50vh', overflowY: 'auto' }}>
              {card.text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutUs;
