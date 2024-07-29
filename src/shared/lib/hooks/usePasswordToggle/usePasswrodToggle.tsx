import { HTMLInputTypeAttribute, useState } from "react";
import EyeIcon from "shared/assets/icon/eye_rounded.svg";
import CloseEyeIcon from "shared/assets/icon/close_eye_rounded.svg";

const usePasswordToggle = (): [
  HTMLInputTypeAttribute,
  React.FC<React.SVGProps<SVGSVGElement>>
] => {
  const [visible, setVisible] = useState(false);

  const Icon: React.FC<React.SVGProps<SVGSVGElement>> = () =>
    visible ? (
      <EyeIcon onClick={() => setVisible((visiblity) => !visiblity)} />
    ) : (
      <CloseEyeIcon onClick={() => setVisible((visiblity) => !visiblity)} />
    );

  const Type = visible ? "text" : "password";

  return [Type, Icon];
};

export default usePasswordToggle;
