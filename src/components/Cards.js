import { useEffect, useState } from 'react'
import card from 'api/cards.json'
import CardItem from 'components/ui/CardItem'

export default function Cards() {

    const [cards, setCards] = useState([]);

	useEffect(() => {
		setCards(card)
	}, []); 

    return (
        <>
            <div className="grid mt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
				{card.map((card, key) => <CardItem key={key} card={card} />)}
			</div>
        </>
    )
  }
  