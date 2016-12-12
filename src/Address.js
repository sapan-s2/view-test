/**
 * Created by sjain on 12/5/2016.
 */

import  React,{PropTypes} from "external/react"

const Address = React.createClass({

    mixins: [React.addons.PureRenderMixin],

    render(){
        return(
            <div className="localization_line1">
                <label id="address-label" htmlFor="address-label" className="localization_labek localization_label-address"
                arial-label ={this.props.label}
                       >{this.props.label}
                </label>
                <input type="text" placeholder={this.props.placeHolderText}></input>

            </div>
        );
    }

});

export default Address;