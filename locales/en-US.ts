export default {
    header: {
        navigation: [
            {
                name: 'Images',
                link: 'images'
            },
            {
                name: 'Videos',
                link: 'videos'
            },
            {
                name: 'Avatars',
                link: 'avatars'
            },
            {
                name: 'Sounds',
                link: 'sounds'
            },
            {
                name: 'Logos',
                link: 'logos'
            }
        ]
    },

    main: {
        hero: {
            fixed: 'Find free',
            description: 'Access many of royalty-free soundtracks, stock photos, sample videos, avatars and logos for your projects'
        }
    },

    buttons: {
        download: "Download"
    },

    responsive: {
        first: 'Sorry :(',
        second: 'Responsive version not available.'
    }
} as const
