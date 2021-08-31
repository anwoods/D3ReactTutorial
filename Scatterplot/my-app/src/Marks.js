export const Marks = ({data, yScale, xScale, xValue, yValue, colorScale, colorValue, tooltipFormat, radiusSize}) => (
    data.map(d => 
      <circle
        className="mark"
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        fill={colorScale(colorValue(d))}
        r={radiusSize}
      >
          <title>X: {tooltipFormat(xValue(d))}, Y: {tooltipFormat(yValue(d))}</title>
      </circle>
    )
);