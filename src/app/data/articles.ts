export interface Article {
    id: string | number,
    photoURL: string,
    title: string,
    description: string
}

export const articles: Article[] = [
    {
        id: 1,
        photoURL: 'https://picsum.photos/1350/730',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repudiandae, error deserunt inventore aitaque aliquid libero rerum, pariatur velit minima alias nesciunt ullam. Officiis?',
        title: 'Algum titulo aqui',
    },
    {
        id: 2,
        photoURL: 'https://picsum.photos/1450/800',
        title: 'The title goes here... Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repudiandae, error deserunt inventore aitaque aliquid libero rerum, pariatur velit minima alias nesciunt ullam. Officiis?'
    },
    {
        id: 3,
        photoURL: 'https://picsum.photos/1920/1080',
        title: 'The title goes here... Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repudiandae, error deserunt inventore aitaque aliquid libero rerum, pariatur velit minima alias nesciunt ullam. Officiis?'
    },
    {
        id: 4,
        photoURL: 'https://picsum.photos/1000/1000',
        title: 'The title goes here... Lorem ipsum dolor sit amet',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus repudiandae, error deserunt inventore aitaque aliquid libero rerum, pariatur velit minima alias nesciunt ullam. Officiis?'
    }
]