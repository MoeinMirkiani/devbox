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

    footer: {
        copyright: '© 2021 devbox.com All Rights Reserved'
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
        },

        avatars: {
            text: 'Avatars for everyone and any age'
        },

        logos: {
            text: 'High-res logos for your website & digital use'
        }
    },

    buttons: {
        download: "Download",
        more: 'View more',
        goBack: 'Go Back'
    },

    responsive: {
        first: 'Sorry :(',
        second: 'Responsive version is not available.'
    },

    errors: {
        sorry: 'Sorry!'
    }
} as const
