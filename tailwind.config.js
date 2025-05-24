/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],

    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#1d4ed8",
                    dark: "#1e40af",
                },
                // Définir une palette de couleurs plus riche pour le design
                'deep-blue': '#1e3a8a', // Un bleu très foncé pour le texte principal
                'soft-blue': '#e0f2fe', // Un bleu très clair pour les fonds
                'accent-green': '#059669', // Vert pour les accents positifs
                'accent-purple': '#7c3aed', // Violet pour des catégories
                'light-gray-bg': '#f9fafb', // Fond très clair
                'border-light': '#e5e7eb', // Couleur de bordure légère
            },
            screens: {
                xs: "480px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
                tall: { raw: "(min-height: 800px)" },
                short: { raw: "(max-height: 600px)" },
            },
            spacing: {
                18: "4.5rem",
                22: "5.5rem",
            },
            fontSize: {
                xxs: "0.625rem",
                base: '1rem', // Base pour le texte
                lg: '1.125rem', // Grands titres
                xl: '1.25rem', // Très grands titres
                '2xl': '1.5rem', // Titres principaux
            },
            zIndex: {
                60: "60",
                70: "70",
                80: "80",
                90: "90",
                100: "100",
            },
            animation: {
                fadeIn: "fadeIn 0.3s ease-in-out",
                slideUp: "slideUp 0.4s ease-out",
                slideDown: "slideDown 0.4s ease-out",
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                marquee: "marquee 25s linear infinite",
                "marquee-reverse": "marquee-reverse 25s linear infinite",
                'fade-in': 'fade-in 0.5s ease-in-out forwards',
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                slideUp: {
                    "0%": { transform: "translateY(10px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                slideDown: {
                    "0%": { transform: "translateY(-10px)", opacity: "0" },
                    "100%": { transform: "translateY(0)", opacity: "1" },
                },
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                "marquee-reverse": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(50%)" },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                }
            },
            touchAction: {
                manipulation: "manipulation",
            },
            typography: ({ theme }) => ({
                DEFAULT: {
                    css: {
                        // Couleurs de texte générales et styles de paragraphe
                        color: theme('colors.deep-blue'), // Couleur de texte plus foncée pour le corps
                        lineHeight: '1.6', // Interligne confortable
                        fontSize: theme('fontSize.base'),

                        'p': {
                            marginTop: '0.7em',
                            marginBottom: '0.7em',
                        },

                        // Titres principaux (###) - Section "Candidats Sélectionnés"
                        'h3': {
                            color: theme('colors.accent-purple'), // Un violet riche pour le titre principal
                            fontWeight: '800',
                            fontSize: theme('fontSize.2xl'), // Grande taille pour le titre de section
                            marginTop: '2.5em', // Plus d'espace au-dessus
                            marginBottom: '1.2em', // Plus d'espace en dessous
                            textAlign: 'center', // Centrer le titre principal
                            textTransform: 'uppercase', // Mettre en majuscules
                            letterSpacing: '0.05em', // Plus d'espacement pour un look élégant
                            // Utilisation d'un dégradé de fond ou d'une ombre complexe
                            background: `linear-gradient(to right, ${theme('colors.purple.600')}, ${theme('colors.indigo.600')})`,
                            '-webkit-background-clip': 'text',
                            'background-clip': 'text',
                            color: 'transparent', // Rendre le texte transparent pour que le dégradé soit visible
                            filter: 'drop-shadow(0 2px 2px rgba(0,0,0,0.1))', // Ombre subtile pour le texte

                            '&::after': { // Ligne décorative sous le titre
                                content: '""',
                                display: 'block',
                                width: '60px', // Longueur de la ligne
                                height: '3px',
                                background: `linear-gradient(to right, ${theme('colors.purple.400')}, ${theme('colors.indigo.400')})`,
                                margin: '0.5em auto 0 auto', // Centrer la ligne
                                borderRadius: '9999px', // Arrondir les bords
                            },
                        },

                        // Sous-titres (####) - Noms des candidats
                        'h4': {
                            color: theme('colors.deep-blue'), // Un bleu foncé élégant pour les noms
                            fontWeight: '700',
                            fontSize: theme('fontSize.xl'),
                            marginTop: '2em', // Plus d'espace au-dessus de chaque candidat
                            marginBottom: '0.8em',
                            position: 'relative',
                            paddingLeft: '1.5em', // Espace pour l'icône/puce
                            '&::before': { // Icône ou puce stylisée
                                content: '"👤"', // Utilisation d'un émoji ou d'une icône personnalisée
                                position: 'absolute',
                                left: '0',
                                top: '0.05em',
                                color: theme('colors.accent-purple'), // Couleur de l'icône
                                fontSize: '1.1em',
                            },
                        },

                        // Listes à puces
                        'ul': {
                            listStyleType: 'none',
                            paddingLeft: '0',
                            marginTop: '0.8em',
                            marginBottom: '0.8em',
                        },
                        'li': {
                            marginBottom: '0.4em', // Espacement un peu plus généreux pour la lisibilité
                            position: 'relative',
                            paddingLeft: '1.8em',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: '0',
                                top: '0.5em',
                                width: '0.55em', // Puce légèrement plus grande
                                height: '0.55em',
                                borderRadius: '50%',
                                backgroundColor: theme('colors.accent-green'), // Puces vertes pour les éléments
                                border: `1px solid ${theme('colors.green.600')}`, // Bordure subtile
                                boxShadow: `0 1px 2px rgba(0,0,0,0.1)`, // Ombre légère
                            },
                        },

                        // Blocs de citation (Compétences Clés, Langues)
                        'blockquote': {
                            backgroundColor: theme('colors.soft-blue'), // Fond bleu très clair
                            borderLeftColor: theme('colors.primary.DEFAULT'), // Bordure gauche avec votre couleur primaire
                            borderLeftWidth: '6px', // Bordure plus prononcée
                            padding: '1.2em 1.8em', // Plus de padding
                            borderRadius: '1rem', // Bords plus arrondis
                            color: theme('colors.deep-blue'),
                            fontStyle: 'normal',
                            marginTop: '2.5em', // Plus d'espace autour
                            marginBottom: '2.5em',
                            boxShadow: `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)`, // Ombre plus élégante et profonde
                            position: 'relative', // Pour un effet de coin
                            '&::before': { // Coin décoratif en haut à gauche
                                content: '""',
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                width: '20px',
                                height: '20px',
                                borderTopLeftRadius: '1rem',
                                borderLeft: `6px solid ${theme('colors.primary.DEFAULT')}`,
                                borderTop: `6px solid ${theme('colors.primary.DEFAULT')}`,
                            },
                            '& > p': { // Paragraphes dans blockquote
                                marginTop: '0.5em',
                                marginBottom: '0.5em',
                                lineHeight: '1.5',
                            },
                            '& > ul': {
                                marginTop: '0.8em',
                                marginBottom: '0.5em',
                            },
                            '& > ul > li': {
                                marginBottom: '0.2em', // Puces plus proches
                                '&::before': {
                                    backgroundColor: theme('colors.primary.DEFAULT'), // Puces couleur primaire
                                    border: `1px solid ${theme('colors.primary.dark')}`,
                                    top: '0.4em',
                                },
                            }
                        },

                        // Séparateurs (lignes horizontales)
                        'hr': {
                            borderColor: theme('colors.border-light'), // Ligne très légère
                            borderTopWidth: '1px',
                            marginTop: '3.5em', // Plus d'espace pour la séparation des candidats
                            marginBottom: '3.5em',
                            opacity: '0.8',
                            // Ajout d'une petite ombre ou d'un effet 3D
                            boxShadow: `0 1px 3px rgba(0,0,0,0.05)`,
                        },

                        // Texte en gras
                        'strong': {
                            color: theme('colors.accent-purple'), // Texte gras en violet vif
                            fontWeight: '800', // Très gras pour accentuer
                        },
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        function ({ addUtilities }) {
            const newUtilities = {
                ".touch-manipulation": {
                    "touch-action": "manipulation",
                },
                ".safe-top": {
                    paddingTop: "env(safe-area-inset-top)",
                },
                ".safe-bottom": {
                    paddingBottom: "env(safe-area-inset-bottom)",
                },
                ".safe-left": {
                    paddingLeft: "env(safe-area-inset-left)",
                },
                ".safe-right": {
                    paddingRight: "env(safe-area-inset-right)",
                },
                ".scrollbar-hide": {
                    "-ms-overflow-style": "none",
                    "scrollbar-width": "none",
                },
                ".scrollbar-hide::-webkit-scrollbar": {
                    display: "none",
                },
            };
            addUtilities(newUtilities);
        },
    ],
};