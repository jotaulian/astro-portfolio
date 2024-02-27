/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			animation:{
				blobdown: "blobdown 7s infinite", 
				blobup: "blobup 10s infinite", 
				blobleftdown: "blobleftdown 5s infinite", 

			},
			keyframes:{
				blobdown:{
					"0%":{
						transform: "translate(0px,0px) scale(1)"
					},
					"33%":{
						transform: " translate(-50px,-20px) scale(0.9)"
					},
					"66%":{
						transform: "translate(-20px,300px) scale(1.2)"
					},
					"100%":{
						transform: " translate(0px,0px) scale(1)"
					},
				},
				blobup:{
					"0%":{
						transform: "translate(0px,0px) scale(1)"
					},
					"33%":{
						transform: " translate(-20px,20px) scale(0.9)"
					},
					"66%":{
						transform: "translate(-100px,-250px) scale(1.2)"
					},
					"100%":{
						transform: " translate(0px,0px) scale(1)"
					},
				},
				blobleftdown:{
					"0%":{
						transform: "translate(0px,0px) scale(1)"
					},
					"33%":{
						transform: " translate(-20px,20px) scale(0.9)"
					},
					"66%":{
						transform: "translate(-20px,-50px) scale(1.3)"
					},
					"100%":{
						transform: " translate(0px,0px) scale(1)"
					},
				}
			}
		},
	},
	plugins: [],
}
