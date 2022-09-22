import { Fragment, MouseEvent, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { getLabels } from '../../../store/mail';
import Label from '../../Icons/Label';
import Menu from '../../Menu';
import MenuItem from '../../Menu/MenuItem';

interface LabelMenuProps {
  onClick(labelId: string): void;
  color?: string;
}

export default function LabelMenu({ color, onClick }: LabelMenuProps) {
  const labels = useRecoilValue(getLabels);
  const [labelAnchorEl, setLabelAnchorEl] = useState<HTMLSpanElement | null>(null);
  const handleLabelIconClick = (e: MouseEvent<HTMLSpanElement>) => {
    if (e.currentTarget instanceof HTMLSpanElement) setLabelAnchorEl(e.currentTarget);
  };
  const isLabelMenuOpen = Boolean(labelAnchorEl);
  const handleLabelMenuClose = () => {
    setLabelAnchorEl(null);
  };

  const handleMenuClick = (labelId: string) => {
    onClick(labelId);
    setLabelAnchorEl(null);
  };

  return (
    <>
      <span className="icon-hover" onClick={handleLabelIconClick}>
        <Label color={color} />
      </span>
      <Menu isOpen={isLabelMenuOpen} anchorEl={labelAnchorEl} onClose={handleLabelMenuClose}>
        {labels.length > 0 &&
          labels.map(label => (
            <Fragment key={label.id}>
              <MenuItem onClick={() => handleMenuClick(label.id)}>{label.name}</MenuItem>
            </Fragment>
          ))}
      </Menu>
    </>
  );
}
