module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./public/index.html"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
        heartBeat: {
          '0%': { transform: 'scale(1);' },
          '14%': { transform: 'scale(1.3);' },
          '28%': { transform: 'scale(1);' },
          '42%': { transform: 'scale(1.3);' },
          '70%': { transform: 'scale(1);' },
        },
        flipHorizontal: {
          '50%': { transform: 'rotateY(180deg)' },
        },
        flipVertical: {
          '50%': { transform: 'rotateX(180deg)' },
        },
        swing: {
          '20%': {
            transform: 'rotate3d(0, 0, 1, 15deg)',
          },

          '40%': {
            transform: 'rotate3d(0, 0, 1, -10deg)',
          },

          '60%': {
            transform: 'rotate3d(0, 0, 1, 5deg)',
          },

          '80%': {
            transform: 'rotate3d(0, 0, 1, -5deg)',
          },
          to: {
            transform: 'rotate3d(0, 0, 1, 0deg)',
          },
        },
        rubberBand: {
          from: {
            transform: 'scale3d(1, 1, 1)',
          },

          '30%': {
            transform: 'scale3d(1.25, 0.75, 1)',
          },

          '40%': {
            transform: 'scale3d(0.75, 1.25, 1)',
          },

          '50%': {
            transform: 'scale3d(1.15, 0.85, 1)',
          },

          '65%': {
            transform: 'scale3d(0.95, 1.05, 1)',
          },

          '75%': {
            transform: 'scale3d(1.05, 0.95, 1)',
          },
          to: {
            transform: 'scale3d(1, 1, 1)',
          },
        },
        flash: {
          '25%, 40%': { opacity: '0' },
          '50%': { opacity: '1' },
          '75%': { opacity: '0' },
        },
        headShake: {
          '0%': {
            transform: 'translateX(0)',
          },
          '6.5%': {
            transform: 'translateX(-6px) rotateY(-9deg)',
          },

          '18.5%': {
            transform: 'translateX(5px) rotateY(7deg)',
          },

          '31.5%': {
            transform: 'translateX(-3px) rotateY(-5deg)',
          },

          '43.5%': {
            transform: 'translateX(2px) rotateY(3deg)',
          },
          '50%': {
            transform: 'translateX(0)',
          },
        },
        wobble: {
          from: {
            transform: 'translate3d(0, 0, 0)',
          },

          '15%': {
            transform: 'translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)',
          },

          '30%': {
            transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)',
          },

          '45%': {
            transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)',
          },

          '60%': {
            transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)',
          },

          '75%': {
            transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)',
          },

          to: {
            transform: 'translate3d(0, 0, 0)',
          },
        },
        jello: {
          'from, 11.1%,to': {
            transform: 'translate3d(0, 0, 0)',
          },

          '22.2%': {
            transform: 'skewX(-12.5deg) skewY(-12.5deg)',
          },

          '33.3%': {
            transform: 'skewX(6.25deg) skewY(6.25deg)',
          },

          '44.4%': {
            transform: 'skewX(-3.125deg) skewY(-3.125deg)',
          },

          '55.5%': {
            transform: 'skewX(1.5625deg) skewY(1.5625deg)',
          },

          '66.6%': {
            transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
          },

          '77.7%': {
            transform: 'skewX(0.390625deg) skewY(0.390625deg)',
          },

          '88.8%': {
            transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
          },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' }
        },
        fadeOut: {
          from: { opacity: '1' }, 
          to: { opacity: '0' }
        },
        bounce: {
         ' 70%': {transform:'translateY(0%)', },
          '80%': {transform:'translateY(-15%)' ,},
          '90%': { transform:'translateY(0%)' ,},
          '95%': { transform:'translateY(-7%)', },
          '97%': { transform:'translateY(0%)' ,},
          '99%': { transform:'translateY(-3%)', },
          '100%': { transform:'translateY(0)' ,},
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeOutLeft: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
        },
        fadeOutRight: {
          '0%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
          '100%': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
        },
        popIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.1)',
          },
          '100%': {
              opacity: '1',
              transform: 'scale(1)', 
            },
        },
        slideInRight: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(20px)',
          }
        },
        slideInLeft: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-20px)',
          }
        },
        typing: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
          '100%': { 'border-color': 'black' },
        },



      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out ',
        heartBeat: 'heartBeat 1s ',
        hflip: 'flipHorizontal 2s ',
        vflip: 'flipVertical 2s ',
        swing: 'swing 2s ease-out ',
        rubberBand: 'rubberBand 1s ',
        flash: 'flash 2s ',
        headShake: 'headShake 2s',
        wobble: 'wobble 1s ',
        jello: 'jello 2s ',
        fadeIn: 'fadeIn 2s linear ',
        fadeOut: 'fadeOut 2s linear ',
        bounce: 'bounce 2s ease ',
        fadeInDown: 'fadeInDown 2s ease ',
        fadeInLeft: 'fadeInLeft 2s ease ',
        fadeInRight: 'fadeInRight 2s ease ',
        fadeOutLeft: 'fadeOutLeft 2s ease ',
        fadeOutRight: 'fadeOutRight 2s ease ',
        popIn: 'popIn 0.2s',
        slideInRight: 'slideInRight 2s ease',
        slideInLeft: 'slideInLeft 2s ease',
        typing: 'typing 4s steps(30, end) forwards',  // Adjust "30" steps according to character count
        blink: 'blink 0.7s step-end infinite',
      },

      colors:{
          darkblue: '#06373b',
          darkBlue: '#1e1e1e',
          white: '#ffffff',
          lightBlue: '#00e7fc',
          lightblue: '#00e7fc',
          grayblue: '#5f8285',
          grayBlue: '#707070',
          bluewhite: '#92c1c5',
          blueWhite: '#707070',
          lightBlueWhite: '#d3fbff',
          Blue: '#0c545a',
          blue: '#2b2b2b',
          lemon: "#E5FF2A",
          lilBlack: "#1A1C1F",
          purple: '#831DE2',
          neonBlue: '#0FE5B2',
          green: '#33cc33', 
      },
      backgroundImage: {
        'gradient-purple-blue': 'linear-gradient(to right, #831DE2, #0FE5B2)', // Define the gradient
      },
      fontFamily: {
          sans: ["Montserrat"],
          customFont: ['ClashDisplay']
      },

    
    },
  },
  darkMode: "class",
  plugins: [
    //other plugins
    // require('tailwindcss-animatecss'),
  ],
}