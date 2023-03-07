/* eslint-disable */
import { RDSProp } from "./css-atoms";
import type * as CSS from 'csstype';

/**
 * RDS
 * Function for dynamically creating and auto-completing
 * RDS design system files.
 * @param {DSysProp} dsysStyles
 * @param {Object} CSS.Properties
 * @return {CSS.Properties}
 */
export default function rds(
  dsysStyles: RDSProp,
  otherStyles: CSS.Properties = {},
) : CSS.Properties {
  const dsysStylesObj: {[key:`--RDS-${string}`]: string} = {};
  Object.entries(dsysStyles).map((entry) => {
    if (entry[1] === true) {
      dsysStylesObj[`--rds-${entry[0]}`] = '1';
    }else{
      dsysStylesObj[`--rds-${entry[0]}`] = `var( --rds-${entry[1]} )`;
    }
  });
  return {
    ...dsysStylesObj,
    ...otherStyles,
  };
}
