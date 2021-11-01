import React from "react";

function Header() {


    return (
        <>
            <div className="container col-md-10">
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
                    <div className="header-cta-button col-sm-4" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        START KYC &nbsp;<i className="bi bi-arrow-right"></i>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">KYC Processing</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Please contact the support team to continue.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;