import { useCallback } from "react";
import PropTypes from "prop-types";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { DATA_VIEW_MODES } from "../../constants/viewModes";

export const ToggleDataViewMode = ({ dataViewMode, setDataViewMode }) => {
  const handleChangeDataViewMode = useCallback(
    (_, nextView) => {
      setDataViewMode(nextView);
    },
    [setDataViewMode]
  );

  return (
    <ToggleButtonGroup
      value={dataViewMode}
      exclusive
      onChange={handleChangeDataViewMode}
    >
      <ToggleButton
        value={DATA_VIEW_MODES.TABLE}
        aria-label={DATA_VIEW_MODES.TABLE}
      >
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton
        value={DATA_VIEW_MODES.GRID}
        aria-label={DATA_VIEW_MODES.GRID}
      >
        <ViewModuleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

ToggleDataViewMode.propTypes = {
  dataViewMode: PropTypes.oneOf([DATA_VIEW_MODES.TABLE, DATA_VIEW_MODES.GRID])
    .isRequired,
  setDataViewMode: PropTypes.func.isRequired,
};
