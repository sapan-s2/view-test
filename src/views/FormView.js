/**
 * Created by sjain on 12/4/2016.
 */

import React, {PropTypes} from "external/react";
import Address from "../Address";

const ViewTestForm = React.createClass({

    formSubmit(e){
        this.props.onSubmit(e);
    },

    render(){
        return (
            <div className="">
            <form automplete="off" className="" onSubmit={this.formSubmit}>

                <Address label={this.props.dynamicContent.wareHouseNameLabel} placeHolderText={this.props.wareHouseName} />
                <Address label={this.props.dynamicContent.wareHouseNumberLabel} placeHolderText={this.props.wareHouseNumber}  />
                    <button type="submit" className="localization__input-submit"
                    data-submit>{this.props.buttonText}</button>


            </form>
            </div>
        );
    }


});
export default ViewTestForm;