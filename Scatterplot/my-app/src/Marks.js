export const Marks = ({data, yScale, xScale, xValue, yValue, tooltipFormat, radiusSize}) => (
    data.map(d => 
      <circle
        className="mark"
        cx={xScale(xValue(d))}
        cy={yScale(yValue(d))}
        r={radiusSize}
      >
          <title>{tooltipFormat(xValue(d))}</title>
      </circle>

    )
);