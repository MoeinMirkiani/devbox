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
        },

        images: {
            text: 'detailed images you can use for any project'
        },

        videos: {
            text: 'Videos for any purposes'
        },

        sounds: {
            text: 'Find your perfect track file fast and free'
        }
    },

    buttons: {
        download: "Download",
        more: 'View more'
    },

    responsive: {
        first: 'Sorry :(',
        second: 'Responsive version is not available.'
    }
} as const
