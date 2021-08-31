
export const ColorLegend = ({ colorScale, tickSpacing = 20, tickSize = 8, tickXOffset = 20 }) => (

    colorScale.domain().map((domainValue, i) => (
        <g transform={`translate(0,${i * tickSpacing})`}>
            <circle
                fill={colorScale(domainValue)}
                r={tickSize}
            >
            </circle>
            <text dy=".32em" x={tickXOffset} >
                {domainValue}
            </text>
        </g>
    ))
);