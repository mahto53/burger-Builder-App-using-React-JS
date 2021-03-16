import React ,{Component} from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxilliary/Auxilliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{
// This can also be functional component
	shouldComponentUpdate(nextProps,nextState){
			return nextProps.show !== this.props.show || nextProps.children != this.props.children;
		}
		
	render(){
		return(
			<Aux>
				<Backdrop show ={this.props.show} clicked={this.props.modalClosed} />
				<div 
					className ={classes.Modal}
					style ={{
						transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
						opacity: this.props.show ? '1':'0'
					}} >
					{this.props.children}
				</div>
			</Aux>
		);
	}
}
export default Modal;