import * as d3 from 'd3';

export const Marks = ({data, yScale, xScale, xValue, yValue, tooltipFormat, radiusSize}) => (
    <g className="marks">
        <path 
            fill="none"
            stroke="black"
            d={d3.line()
                .x(d => xScale(xValue(d)))
                .y(d => yScale(yValue(d)))
                .curve(d3.curveNatural)
                (data)
                }
        />
        {/* {data.map(d => 
        <circle
            cx={xScale(xValue(d))}
            cy={yScale(yValue(d))}
            r={radiusSize}
        >
            <title>X: {tooltipFormat(xValue(d))}, Y: {tooltipFormat(yValue(d))}</title>
        </circle>
        )} */}
    </g>
);