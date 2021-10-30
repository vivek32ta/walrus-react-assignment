import React from "react";

function Header() {


    return (
        <div className="container">
            <div className="row">
                <div className="header-greeting col-sm-4">Hi John,</div>
            </div>
            <div className="header-body">
                <div className="header-body-top">
                    Complete your KYC
                </div>
                <div className="row">
                    <div className="header-body-bottom col-8">
                        and experience the world class bitcoin app defi
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="header-cta-button col-sm-4">
                    START KYC &nbsp;<i class="bi bi-arrow-right"></i>
                </div>
            </div>
        </div>
    );
}
export default Header;