import * as d3 from 'd3'
import './utils/includes-polyfill'
import colors from './colors'

const graphic = d3.select('.graphic__refs')
const chart = graphic.select('.graphic__chart')

function cleanData(row) {
	return {
		...row,
		ic: +row.ic,
		inc: +row.inc,
		games: +row.games,
		rate_ic: +row.ic / +row.games,
		rate_inc: +row.inc / +row.games,
	}
}

function createTable(data) {
	const refData = data
		.filter(d => d.games > 20)
		.sort((a, b) => d3.descending(a.rate_inc, b.rate_inc))

	// console.log(refData)
	// const scale = d3.scaleThreshold()

	// scale
	// 	.domain([.2, .4, .6, .8])
	// 	.range(colors.diverging)

	// const tableEnter = chart.append('table')
	// 	.attr('class', 'calls__table')

	// const headEnter = tableEnter.append('thead')
	// 	.append('tr')

	// headEnter.append('th').text('Call').classed('text', true)
	// headEnter.append('th').text('CC').classed('number', true)
	// headEnter.append('th').text('IC').classed('number', true)
	// headEnter.append('th').text('INC').classed('number', true)
	// headEnter.append('th').text('Rate correct').classed('number', true)

	// const bodyEnter = tableEnter.append('tbody')

	// const trEnter = bodyEnter.selectAll('tr')
	// 	.data(callData)
	// 	.enter().append('tr')

	// trEnter.style('background-color', d => scale(d.rate_correct))

	// trEnter.append('td').text(d => d.call).classed('text', true)
	// trEnter.append('td').text(d => formatComma(d.cc)).classed('number', true)
	// trEnter.append('td').text(d => formatComma(d.ic)).classed('number', true)
	// trEnter.append('td').text(d => formatComma(d.inc)).classed('number', true)
	// trEnter.append('td').text(d => formatPercent(d.rate_correct)).classed('number', true)

}

function init() {
	d3.csv('assets/data/web_refs.csv', cleanData, (err,  data) => {
		if (err) console.error(err)
		createTable(data)
	})
}

export default { init }