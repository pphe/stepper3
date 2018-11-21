import React, {Component} from 'react';
import HourGlass from '../animations/HourGlass.js'
import styles from '../styles'
import {StepperContext} from '../App'

// export const Stage = ({stage, num}) => (
// 	<div style={circleStyle(stage, num)}>
// 		{renderIcon(stage, num)}
// 	</div>
// )

export const Stage = ({stage, num }) => (
			<div style={circleStyle(stage, num)}>{renderIcon(stage, num)}</div>
);


const renderIcon = (stage, num) => {
	if (stage === num) {
		return <HourGlass size="30px" />;
	} else if (stage < num) {
		return (
			<div>
				<div>{num}</div>
				<img
					style={{
						position: 'absolute',
						left: '20px',
						top: '20px',
						width: '15px'
					}}
					src="/icons/padlock.svg"
				/>
			</div>
		);
	}
	return <img className="animated fadeIn" style={{ width: '12px' }} src="/icons/checked2.svg" />;
};

const circleStyle = (current, circleSection) => {
	if (current === circleSection) {
		return { ...styles.circle, ...styles.circleActive };
	} else if (current > circleSection) {
		return { ...styles.circle, ...styles.circleComplete };
	}
	return styles.circle;
};

export default class Progress extends Component {
  render(){
    return(
      <div style={styles.progressContainer}>
        {this.props.children}
      </div>
    )
  }
}
