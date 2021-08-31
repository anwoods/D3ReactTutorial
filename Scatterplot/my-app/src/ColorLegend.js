
export const ColorLegend = ({ colorScale,
     tickSpacing = 20, 
     tickSize = 8, 
     tickXOffset = 20,
     onHover,
     hoveredValue,
     fadeOpacity 
     }) => (

    colorScale.domain().map((domainValue, i) => (
        <g 
            transform={`translate(0,${i * tickSpacing})`}
            onMouseEnter={() => {
                console.log("hovered ", domainValue);
                onHover(domainValue);
            }}
            onMouseOut={() => {
                onHover(null)
            }}
            opacity={hoveredValue && domainValue !== hoveredValue ? fadeOpacity : 1}
        >
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