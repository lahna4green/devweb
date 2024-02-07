import React, { useEffect } from 'react'


import { IEvent } from '@/lib/database/models/event.model';
import { Button } from '../ui/button';
//import { checkoutOrder } from '@/lib/actions/order.actions';

import { loadStripe } from '@stripe/stripe-js';
import { checkoutOrder } from '@/lib/actions/order.actions';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const Checkout = ({ event, userId }: { event: IEvent, userId: string }) => {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('succès')) {
      console.log('Commande passée! Vous recevrez un email de confirmation.');
    }

    if (query.get('annulé')) {
      console.log('Commande annulée : continuez vos achats et payez lorsque vous êtes prêt.');
    }
  }, []);

  const onCheckout = async () => {
    const order = {
      eventTitle: event.title,
      eventId: event._id,
      price: event.price,
      isFree: event.isFree,
      buyerId: userId
    }

    await checkoutOrder(order);
  }

  return (
    <form action={onCheckout} method="post">
      <Button type="submit" role="link" size="lg" className="button sm:w-fit">
        {event.isFree ? 'Obtenir le billet' : 'Acheter le billet'}
      </Button>
    </form>
  )
}

export default Checkout