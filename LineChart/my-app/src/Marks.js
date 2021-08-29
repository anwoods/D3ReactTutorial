export const Marks = ({data, yScale, xScale, xValue, yValue, tooltipFormat, radiusSize}) => (
    data.map(d => 
      <circle
        className="mark"
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={radiusSize}
      >
          <title>X: {tooltipFormat(xValue(d))}, Y: {tooltipFormat(yValue(d))}</title>
      </circle>
    )
);