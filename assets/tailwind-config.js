// Custom Tailwind Config
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: 'rgb(240 249 255)',
                    100: 'rgb(224 242 254)',
                    200: 'rgb(186 230 253)',
                    300: 'rgb(125 211 252)',
                    400: 'rgb(56 189 248)',
                    500: 'rgb(14 165 233)',
                    600: 'rgb(2 132 199)',
                    700: 'rgb(3 105 161)',
                    800: 'rgb(7 89 133)',
                    900: 'rgb(12 74 110)'
                },
                accent: {
                    100: 'rgb(233 213 255)',
                    200: 'rgb(216 180 254)',
                    300: 'rgb(192 132 252)',
                    400: 'rgb(168 85 247)',
                    500: 'rgb(147 51 234)',
                    600: 'rgb(126 34 206)',
                    700: 'rgb(107 33 168)',
                    800: 'rgb(88 28 135)',
                    900: 'rgb(59 7 100)'
                },
                secondary: {
                    50: 'rgb(240 255 255)',
                    100: 'rgb(224 254 234)',
                    200: 'rgb(186 245 223)',
                    300: 'rgb(125 245 212)',
                    400: 'rgb(56 245 208)',
                    500: 'rgb(14 245 193)',
                    600: 'rgb(2 245 189)',
                    700: 'rgb(3 245 161)',
                    800: 'rgb(7 245 133)',
                    900: 'rgb(12 90 88)'
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(30px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' }
                }
            }
        }
    }
}
