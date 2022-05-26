/* eslint-disable react/forbid-prop-types */

import React from "react";
import PropTypes from "prop-types";

const ColumnShowHide = ({
  allColumns,
  children,
  getColumnHeaderArray, 
  setColumnHeaderArray,
  toggleHideAllColumnsProps,
}) => <div>{children({ toggleHideAllColumnsProps, allColumns, getColumnHeaderArray, setColumnHeaderArray })}</div>;

ColumnShowHide.propTypes = {
  allColumns: PropTypes.array,
  children: PropTypes.func,
  getColumnHeaderArray: PropTypes.array,
  setColumnHeaderArray: PropTypes.func, 
  toggleHideAllColumnsProps: PropTypes.func,
};

export default ColumnShowHide;
