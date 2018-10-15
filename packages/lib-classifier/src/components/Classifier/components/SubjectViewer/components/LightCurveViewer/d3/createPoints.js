export default function createPoints (selection, xScale, yScale, margin) {
  selection
    .append('circle')
      .attr('class', 'dot')
      .attr('cx', d => xScale(d[0]))
      .attr('cy', d => yScale(d[1]))
      .attr('transform', `translate(${margin},${margin})`)
      .attr('r', 2)
      .style('fill', 'blue')
}
