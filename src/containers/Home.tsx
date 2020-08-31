import React, {FunctionComponent} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {standard} from '../store/actions/StandardActions';
import {getStandardValue} from '../store/selectors/getStandard';

interface IProps {
  value: boolean;
  standardValue: number;
  applyStandard: (value: number) => void;
}

const mapStateToProps = (state: any) => ({
  standardValue: getStandardValue(state),
});
const mapDispatchToProps = (dispatch: any) => ({
  applyStandard: (value: number) => standard(value)(dispatch),
});

const Home: FunctionComponent<IProps> = (props: IProps) => {
  const {value} = props;
  return <Text>{value}</Text>;
};

Home.propTypes = {
  standardValue: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
