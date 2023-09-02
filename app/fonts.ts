import localFont from 'next/font/local'

export const rufina = localFont({
    src: [
        {
            path: '../public/fonts/Rufina/Rufina-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/Rufina/Rufina-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--rufina'
});

export const lato = localFont({
    src: [
        {
            path: '../public/fonts/Lato/Lato-Regular.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/Lato/Lato-Bold.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--lato'
});