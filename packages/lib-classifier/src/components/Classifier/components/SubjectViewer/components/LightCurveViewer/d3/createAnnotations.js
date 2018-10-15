export default function createPoints (selection, xScale, axisHeight, margin) {
  selection
    .append('rect')
      .attr('class', 'annotation')
      .attr('transform', `translate(0,${margin})`)
      .attr('x', d => xScale(d[0]))
      .attr('y', 0)
      .attr('height', axisHeight)
      .attr('width', d => xScale(d[1]) - xScale(d[0]))
      .style('fill', 'blue')
      .style('opacity', 0.2)
}
