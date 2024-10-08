// @ ts-check
import * as colTem from './colors-template.mjs'
const oklch = colTem.oklch

import * as morning from "./morning.mjs"

/**
 * @type {colTem.ColorTemplate}
 */
export const template = {
	conf: {
		name: "Always Half-Full 🌇 afternoon",
		type: "light",
		filename: "Always Half-Full afternoon.json",
		include: "./" + morning.template.conf.filename
	},
	col: {
		bg: {
			// r4: oklch(0.9900, 0.005, 60).hex,  // 99.00,
			// r3: oklch(0.9800, 0.012, 60).hex,  // 98.25,
			// r2: oklch(0.9725, 0.016, 60).hex,  // 97.25,
			// r1: oklch(0.9625, 0.016, 60).hex,  // 96.25,
			// m:  oklch(0.9550, 0.013, 60).hex,  // 95.00,
			// l1: oklch(0.9250, 0.012, 60).hex,  // 92.50,
			// l2: oklch(0.8950, 0.010, 60).hex,  // 88.75,


			
			r4: oklch(0.9325, 0.012, 60).hex,
			r3: oklch(0.9550, 0.011, 60).hex,
			r2: oklch(0.9625, 0.010, 60).hex,
			r1: oklch(0.9750, 0.009, 60).hex,
			m:  oklch(0.9875, 0.008, 60).hex,
			l1: oklch(0.9150, 0.014, 60).hex,
			l2: oklch(0.9000, 0.016, 60).hex,
		},
	},
	opa: morning.template.opa
}
