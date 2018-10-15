import * as d3 from 'd3'

export default function createContainer (rootNode, height, width) {
  return d3.select(rootNode)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
}
