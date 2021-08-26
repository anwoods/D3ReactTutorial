import { BackgroundCircle } from './BackgroundCircle';
import { Eyes } from './Eyes.js';
import { Mouth } from './Mouth';
import { FaceContainer } from './FaceContainer';

export const Face = ({ width, height, centerX, centerY, strokeWidth, eyeOffsetX, eyeOffsetY, eyeRadius, mouthWidth, mouthRadius}) => (
    <FaceContainer
      width={width}
      height={height}
      centerX={centerX}
      centerY={centerY}
    >
      <BackgroundCircle radius = {centerY - strokeWidth / 2}
        strokeWidth={strokeWidth}
      >
      </BackgroundCircle>
  
      <Eyes
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
        eyeRadius={eyeRadius}
      >
      </Eyes>
  
      <Mouth
        mouthRadius={mouthRadius}
        mouthWidth={mouthWidth}
      >
      </Mouth>
  
    </FaceContainer>
  );