import image1 from '../assets/images/wip1.jpeg'
import image2 from '../assets/images/wip2.jpeg'

export const workGallery = {
    id: "work",
    title: "My Work Gallery!",
    cardsPerRow: [
        {
            cards: [
                {
                    image: image1,
                    text: 'Backend Stuffs - Will add them shortly',
                    label: 'BACKEND',
                    path: 'some path'

                },
                {
                    image: image2,
                    text: 'Frontend Stuffs - Will add them shortly',
                    label: 'FRONTEND',
                    path: 'some path'

                }

            ]
        },
        {
            cards: [
                {
                    image: image1,
                    text: 'Explore the hidden waterfall deep inside the Amazon Jungle',
                    label: 'ILLUSTRATION',
                    path: 'some path'

                },
                {
                    image: image2,
                    text: 'Travel through the Islands of Bali in a Private Cruise',
                    label: 'PHOTOGRAPHY',
                    path: 'some path'

                },
                {
                    image: image2,
                    text: 'Travel through the Islands of Bali in a Private Cruise',
                    label: 'ART',
                    path: 'some path'

                }

            ]

        }
    ]
}