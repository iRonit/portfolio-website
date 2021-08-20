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
                    text: 'My Illustrations - Waiting to upload them!',
                    label: 'ILLUSTRATION',
                    path: 'some path'

                },
                {
                    image: image2,
                    text: 'My take on photography! Planning on building a website for that.',
                    label: 'PHOTOGRAPHY',
                    path: 'some path'

                },
                {
                    image: image2,
                    text: 'What is any work without an artistic touch!',
                    label: 'ART',
                    path: 'some path'

                }

            ]

        }
    ]
}